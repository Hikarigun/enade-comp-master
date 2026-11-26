import { useState, useEffect, useCallback, useRef } from 'react';
import type { DisciplineId, StudyTimerPhase, StudyTimerPreset } from '../types/enade';

export const STUDY_TIMER_PRESETS: StudyTimerPreset[] = [
  {
    id: 'pomodoro',
    name: 'Pomodoro Clássico',
    tagline: '25 min foco • 5 min pausa • 4 ciclos',
    focusMinutes: 25,
    shortBreakMinutes: 5,
    longBreakMinutes: 15,
    cycles: 4,
    recommendedFor: 'Flashcards SM-2, Caderno de Erros e revisão ativa',
  },
  {
    id: 'bloco-profundo',
    name: 'Bloco Profundo ENADE',
    tagline: '50 min foco • 10 min pausa • 3 ciclos',
    focusMinutes: 50,
    shortBreakMinutes: 10,
    longBreakMinutes: 20,
    cycles: 3,
    recommendedFor: 'Enciclopédia Teórica e listas do Banco de Questões',
  },
  {
    id: 'sprint',
    name: 'Sprint Rápido',
    tagline: '15 min foco • 3 min pausa • 4 ciclos',
    focusMinutes: 15,
    shortBreakMinutes: 3,
    longBreakMinutes: 10,
    cycles: 4,
    recommendedFor: 'Folha de Fórmulas ou treino rápido de 5–8 questões',
  },
  {
    id: 'discursiva',
    name: 'Treino Discursivo',
    tagline: '45 min foco • 10 min pausa • 2 ciclos',
    focusMinutes: 45,
    shortBreakMinutes: 10,
    longBreakMinutes: 15,
    cycles: 2,
    recommendedFor: 'Planejar, redigir em 15 linhas e corrigir 2 discursivas',
  },
  {
    id: 'maratona',
    name: 'Maratona Prova Real',
    tagline: '90 min foco • 15 min pausa • 2 ciclos',
    focusMinutes: 90,
    shortBreakMinutes: 15,
    longBreakMinutes: 25,
    cycles: 2,
    recommendedFor: 'Resistência mental para simulados longos (4h ENADE)',
  },
];

const TIMER_STORAGE_KEY = 'enade-comp-master-study-timer-v1';
const DEFAULT_TITLE = 'ENADE Comp Master — Plataforma Definitiva de Engenharia da Computação';

export interface CustomTimerConfig {
  focusMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
  cycles: number;
}

interface PersistedTimerState {
  active: boolean;
  presetId: string;
  presetName: string;
  config: CustomTimerConfig;
  discipline: DisciplineId | 'geral';
  phase: StudyTimerPhase;
  currentCycle: number;
  remainingSeconds: number;
  totalPhaseSeconds: number;
  isRunning: boolean;
  endTimeMs: number | null;
  soundEnabled: boolean;
  autoAdvance: boolean;
  focusedSecondsThisSession: number;
  completedFocusBlocks: number;
}

const DEFAULT_CUSTOM: CustomTimerConfig = {
  focusMinutes: 40,
  shortBreakMinutes: 8,
  longBreakMinutes: 20,
  cycles: 3,
};

const INITIAL_STATE: PersistedTimerState = {
  active: false,
  presetId: 'pomodoro',
  presetName: 'Pomodoro Clássico',
  config: {
    focusMinutes: 25,
    shortBreakMinutes: 5,
    longBreakMinutes: 15,
    cycles: 4,
  },
  discipline: 'geral',
  phase: 'focus',
  currentCycle: 1,
  remainingSeconds: 25 * 60,
  totalPhaseSeconds: 25 * 60,
  isRunning: false,
  endTimeMs: null,
  soundEnabled: true,
  autoAdvance: false,
  focusedSecondsThisSession: 0,
  completedFocusBlocks: 0,
};

function playChime(kind: 'focus-done' | 'break-done') {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const notes = kind === 'focus-done' ? [523.25, 659.25, 783.99] : [659.25, 523.25];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const start = ctx.currentTime + i * 0.14;
      gain.gain.setValueAtTime(0.001, start);
      gain.gain.exponentialRampToValueAtTime(0.16, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.48);
    });
  } catch {
    // Ignore audio errors if autoplay policy blocks it
  }
}

export function formatTimerClock(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function loadTimerState(): PersistedTimerState {
  try {
    const raw = localStorage.getItem(TIMER_STORAGE_KEY);
    if (!raw) return INITIAL_STATE;
    const parsed = JSON.parse(raw) as Partial<PersistedTimerState>;
    const merged: PersistedTimerState = { ...INITIAL_STATE, ...parsed };
    if (merged.isRunning && merged.endTimeMs) {
      const left = Math.max(0, Math.ceil((merged.endTimeMs - Date.now()) / 1000));
      merged.remainingSeconds = left;
      if (left === 0) {
        merged.isRunning = false;
        merged.endTimeMs = null;
      }
    }
    return merged;
  } catch {
    return INITIAL_STATE;
  }
}

export interface StudyTimerToast {
  id: number;
  title: string;
  subtitle: string;
  phaseCompleted: StudyTimerPhase;
}

export function useStudyTimer(
  onCompleteFocusBlock: (info: { presetName: string; discipline: DisciplineId | 'geral'; durationMinutes: number }) => void
) {
  const [state, setState] = useState<PersistedTimerState>(() => loadTimerState());
  const [customConfig, setCustomConfig] = useState<CustomTimerConfig>(DEFAULT_CUSTOM);
  const [toast, setToast] = useState<StudyTimerToast | null>(null);
  const completeCbRef = useRef(onCompleteFocusBlock);
  completeCbRef.current = onCompleteFocusBlock;

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage quota errors
    }
  }, [state]);

  // Dynamic browser tab title while active
  useEffect(() => {
    if (!state.active) {
      document.title = DEFAULT_TITLE;
      return;
    }
    const phaseLabel =
      state.phase === 'focus' ? 'Foco' : state.phase === 'short-break' ? 'Pausa' : 'Pausa Longa';
    const prefix = state.isRunning ? '' : '⏸ ';
    document.title = `${prefix}${formatTimerClock(state.remainingSeconds)} • ${phaseLabel} | ENADE Comp`;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [state.active, state.isRunning, state.phase, state.remainingSeconds]);

  const computeNextPhase = useCallback((curr: PersistedTimerState): Partial<PersistedTimerState> => {
    if (curr.phase === 'focus') {
      const isLastCycle = curr.currentCycle >= curr.config.cycles;
      const nextPhase: StudyTimerPhase = isLastCycle ? 'long-break' : 'short-break';
      const nextSec = (isLastCycle ? curr.config.longBreakMinutes : curr.config.shortBreakMinutes) * 60;
      return {
        phase: nextPhase,
        remainingSeconds: nextSec,
        totalPhaseSeconds: nextSec,
        completedFocusBlocks: curr.completedFocusBlocks + 1,
        focusedSecondsThisSession: curr.focusedSecondsThisSession + curr.totalPhaseSeconds,
        isRunning: curr.autoAdvance,
        endTimeMs: curr.autoAdvance ? Date.now() + nextSec * 1000 : null,
      };
    }

    // Break ended -> back to focus
    const nextCycle = curr.phase === 'long-break' ? 1 : curr.currentCycle + 1;
    const nextSec = curr.config.focusMinutes * 60;
    return {
      phase: 'focus',
      currentCycle: nextCycle,
      remainingSeconds: nextSec,
      totalPhaseSeconds: nextSec,
      isRunning: curr.autoAdvance,
      endTimeMs: curr.autoAdvance ? Date.now() + nextSec * 1000 : null,
    };
  }, []);

  // Drift-free ticking interval
  useEffect(() => {
    if (!state.active || !state.isRunning || !state.endTimeMs) return;

    const tick = () => {
      const left = Math.max(0, Math.ceil((state.endTimeMs! - Date.now()) / 1000));
      if (left > 0) {
        setState((prev) => (prev.remainingSeconds === left ? prev : { ...prev, remainingSeconds: left }));
      } else {
        // Phase finished!
        setState((prev) => {
          if (!prev.isRunning) return prev;
          if (prev.soundEnabled) {
            playChime(prev.phase === 'focus' ? 'focus-done' : 'break-done');
          }
          if (prev.phase === 'focus') {
            const mins = Math.max(1, Math.round(prev.totalPhaseSeconds / 60));
            completeCbRef.current({
              presetName: prev.presetName,
              discipline: prev.discipline,
              durationMinutes: mins,
            });
            setToast({
              id: Date.now(),
              title: `Bloco de foco concluído! (+${mins} min registrados)`,
              subtitle:
                prev.currentCycle >= prev.config.cycles
                  ? `Ciclo completo! Hora da pausa longa (${prev.config.longBreakMinutes} min).`
                  : `Hora de descansar ${prev.config.shortBreakMinutes} min antes do ciclo ${prev.currentCycle + 1}/${prev.config.cycles}.`,
              phaseCompleted: 'focus',
            });
          } else {
            setToast({
              id: Date.now(),
              title: 'Pausa encerrada — hora de voltar ao foco!',
              subtitle: `Próximo bloco de ${prev.config.focusMinutes} min pronto para começar.`,
              phaseCompleted: prev.phase,
            });
          }
          return { ...prev, ...computeNextPhase(prev) };
        });
      }
    };

    tick();
    const id = window.setInterval(tick, 500);
    return () => window.clearInterval(id);
  }, [state.active, state.isRunning, state.endTimeMs, computeNextPhase]);

  const startPreset = useCallback(
    (preset: StudyTimerPreset, discipline: DisciplineId | 'geral') => {
      const sec = preset.focusMinutes * 60;
      setToast(null);
      setState((prev) => ({
        ...prev,
        active: true,
        presetId: preset.id,
        presetName: preset.name,
        config: {
          focusMinutes: preset.focusMinutes,
          shortBreakMinutes: preset.shortBreakMinutes,
          longBreakMinutes: preset.longBreakMinutes,
          cycles: preset.cycles,
        },
        discipline,
        phase: 'focus',
        currentCycle: 1,
        remainingSeconds: sec,
        totalPhaseSeconds: sec,
        isRunning: true,
        endTimeMs: Date.now() + sec * 1000,
        focusedSecondsThisSession: 0,
        completedFocusBlocks: 0,
      }));
    },
    []
  );

  const startCustomSession = useCallback(
    (cfg: CustomTimerConfig, discipline: DisciplineId | 'geral') => {
      const clean: CustomTimerConfig = {
        focusMinutes: Math.max(1, Math.min(180, Math.round(cfg.focusMinutes))),
        shortBreakMinutes: Math.max(1, Math.min(60, Math.round(cfg.shortBreakMinutes))),
        longBreakMinutes: Math.max(1, Math.min(90, Math.round(cfg.longBreakMinutes))),
        cycles: Math.max(1, Math.min(12, Math.round(cfg.cycles))),
      };
      setCustomConfig(clean);
      const sec = clean.focusMinutes * 60;
      setToast(null);
      setState((prev) => ({
        ...prev,
        active: true,
        presetId: 'custom',
        presetName: `Personalizada (${clean.focusMinutes}/${clean.shortBreakMinutes}m)`,
        config: clean,
        discipline,
        phase: 'focus',
        currentCycle: 1,
        remainingSeconds: sec,
        totalPhaseSeconds: sec,
        isRunning: true,
        endTimeMs: Date.now() + sec * 1000,
        focusedSecondsThisSession: 0,
        completedFocusBlocks: 0,
      }));
    },
    []
  );

  const toggleRun = useCallback(() => {
    setState((prev) => {
      if (!prev.active) return prev;
      if (prev.isRunning) {
        const left = prev.endTimeMs
          ? Math.max(0, Math.ceil((prev.endTimeMs - Date.now()) / 1000))
          : prev.remainingSeconds;
        return { ...prev, isRunning: false, endTimeMs: null, remainingSeconds: left };
      }
      const left = Math.max(1, prev.remainingSeconds);
      return { ...prev, isRunning: true, endTimeMs: Date.now() + left * 1000, remainingSeconds: left };
    });
  }, []);

  const addMinutes = useCallback((mins: number) => {
    setState((prev) => {
      if (!prev.active) return prev;
      const delta = mins * 60;
      const nextRem = Math.max(60, prev.remainingSeconds + delta);
      return {
        ...prev,
        remainingSeconds: nextRem,
        totalPhaseSeconds: Math.max(prev.totalPhaseSeconds, nextRem),
        endTimeMs: prev.isRunning ? Date.now() + nextRem * 1000 : null,
      };
    });
  }, []);

  const resetCurrentPhase = useCallback(() => {
    setState((prev) => {
      if (!prev.active) return prev;
      const sec =
        prev.phase === 'focus'
          ? prev.config.focusMinutes * 60
          : prev.phase === 'short-break'
          ? prev.config.shortBreakMinutes * 60
          : prev.config.longBreakMinutes * 60;
      return {
        ...prev,
        remainingSeconds: sec,
        totalPhaseSeconds: sec,
        isRunning: false,
        endTimeMs: null,
      };
    });
  }, []);

  const skipPhase = useCallback(() => {
    setState((prev) => {
      if (!prev.active) return prev;
      // Record partial focus time if user already focused >= 2 minutes before skipping
      if (prev.phase === 'focus') {
        const elapsedSec = prev.totalPhaseSeconds - prev.remainingSeconds;
        if (elapsedSec >= 120) {
          completeCbRef.current({
            presetName: prev.presetName,
            discipline: prev.discipline,
            durationMinutes: Math.round(elapsedSec / 60),
          });
        }
      }
      return { ...prev, ...computeNextPhase({ ...prev, autoAdvance: false }) };
    });
  }, [computeNextPhase]);

  const endSession = useCallback(() => {
    setState((prev) => {
      if (prev.active && prev.phase === 'focus') {
        const elapsedSec = prev.totalPhaseSeconds - prev.remainingSeconds;
        if (elapsedSec >= 120) {
          completeCbRef.current({
            presetName: prev.presetName,
            discipline: prev.discipline,
            durationMinutes: Math.round(elapsedSec / 60),
          });
        }
      }
      return {
        ...prev,
        active: false,
        isRunning: false,
        endTimeMs: null,
        phase: 'focus',
        currentCycle: 1,
        remainingSeconds: prev.config.focusMinutes * 60,
        totalPhaseSeconds: prev.config.focusMinutes * 60,
      };
    });
    setToast(null);
  }, []);

  const setDiscipline = useCallback((discipline: DisciplineId | 'geral') => {
    setState((prev) => ({ ...prev, discipline }));
  }, []);

  const toggleSound = useCallback(() => {
    setState((prev) => ({ ...prev, soundEnabled: !prev.soundEnabled }));
  }, []);

  const toggleAutoAdvance = useCallback(() => {
    setState((prev) => ({ ...prev, autoAdvance: !prev.autoAdvance }));
  }, []);

  const dismissToast = useCallback(() => setToast(null), []);

  const progressPct =
    state.totalPhaseSeconds > 0
      ? Math.min(100, Math.max(0, ((state.totalPhaseSeconds - state.remainingSeconds) / state.totalPhaseSeconds) * 100))
      : 0;

  return {
    state,
    customConfig,
    setCustomConfig,
    toast,
    dismissToast,
    progressPct,
    startPreset,
    startCustomSession,
    toggleRun,
    addMinutes,
    resetCurrentPhase,
    skipPhase,
    endSession,
    setDiscipline,
    toggleSound,
    toggleAutoAdvance,
  };
}

export type StudyTimerController = ReturnType<typeof useStudyTimer>;
