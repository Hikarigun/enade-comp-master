import React, { useState, useMemo } from 'react';
import {
  Timer,
  Play,
  Pause,
  SkipForward,
  RotateCcw,
  Volume2,
  VolumeX,
  X,
  Minimize2,
  Maximize2,
  Coffee,
  Flame,
  Plus,
  StopCircle,
  CheckCircle2,
  Sliders,
  Sparkles,
} from 'lucide-react';
import type { DisciplineId, StudySessionLog } from '../types/enade';
import { DISCIPLINES, DISCIPLINE_MAP } from '../data/disciplines';
import {
  STUDY_TIMER_PRESETS,
  formatTimerClock,
  type StudyTimerController,
} from '../hooks/useStudyTimer';

interface StudyTimerWidgetProps {
  timer: StudyTimerController;
  isPanelOpen: boolean;
  onOpenPanel: () => void;
  onClosePanel: () => void;
  sessions: StudySessionLog[];
  dailyGoalMinutes: number;
}

export const StudyTimerWidget: React.FC<StudyTimerWidgetProps> = ({
  timer,
  isPanelOpen,
  onOpenPanel,
  onClosePanel,
  sessions,
  dailyGoalMinutes,
}) => {
  const { state, customConfig, setCustomConfig, toast, dismissToast, progressPct } = timer;
  const [minimized, setMinimized] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineId | 'geral'>(state.discipline);
  const [panelTab, setPanelTab] = useState<'presets' | 'custom' | 'history'>('presets');

  const todayStats = useMemo(() => {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const todayTs = startOfToday.getTime();
    const todayLogs = sessions.filter((s) => s.completedAt >= todayTs);
    const todayMinutes = todayLogs.reduce((acc, s) => acc + s.durationMinutes, 0);
    const totalMinutes = sessions.reduce((acc, s) => acc + s.durationMinutes, 0);
    return {
      todayCount: todayLogs.length,
      todayMinutes,
      totalMinutes,
      goalPct: Math.min(100, Math.round((todayMinutes / Math.max(15, dailyGoalMinutes)) * 100)),
    };
  }, [sessions, dailyGoalMinutes]);

  const isFocus = state.phase === 'focus';
  const phaseTitle =
    state.phase === 'focus'
      ? `Foco • Ciclo ${state.currentCycle}/${state.config.cycles}`
      : state.phase === 'short-break'
      ? 'Pausa Curta'
      : 'Pausa Longa';

  const activeDiscName =
    state.discipline === 'geral'
      ? 'Estudo Geral'
      : DISCIPLINE_MAP[state.discipline]?.shortName || state.discipline;

  return (
    <>
      {/* Toast Notification when a phase finishes */}
      {toast && (
        <div className="fixed top-16 lg:top-5 right-4 z-50 max-w-sm w-[calc(100vw-2rem)] bg-white dark:bg-slate-900 rounded-2xl border-2 border-indigo-500 shadow-2xl p-4 flex items-start gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              toast.phaseCompleted === 'focus'
                ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400'
                : 'bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
            }`}
          >
            {toast.phaseCompleted === 'focus' ? <CheckCircle2 className="w-5 h-5" /> : <Flame className="w-5 h-5" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">{toast.title}</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{toast.subtitle}</p>
            <div className="flex items-center gap-2 mt-2.5">
              {!state.isRunning && state.active && (
                <button
                  type="button"
                  onClick={() => {
                    timer.toggleRun();
                    dismissToast();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Play className="w-3 h-3" /> Iniciar {isFocus ? 'Foco' : 'Pausa'}
                </button>
              )}
              <button
                type="button"
                onClick={dismissToast}
                className="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold cursor-pointer"
              >
                Dispensar
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={dismissToast}
            className="text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Persistent Floating Widget across the whole app when a session is active */}
      {state.active && !isPanelOpen && (
        <div className="fixed bottom-4 right-4 z-40">
          {minimized ? (
            <div className="flex items-center gap-1.5 bg-slate-900 dark:bg-indigo-600 text-white rounded-full shadow-xl border border-white/15 pl-3 pr-1.5 py-1.5">
              <button
                type="button"
                onClick={onOpenPanel}
                className="flex items-center gap-2 cursor-pointer"
                title="Abrir painel da Sessão de Estudo"
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    state.isRunning
                      ? isFocus
                        ? 'bg-emerald-400 animate-pulse'
                        : 'bg-amber-300 animate-pulse'
                      : 'bg-slate-400'
                  }`}
                />
                <span className="font-mono font-extrabold text-sm tracking-tight">
                  {formatTimerClock(state.remainingSeconds)}
                </span>
              </button>
              <button
                type="button"
                onClick={timer.toggleRun}
                title={state.isRunning ? 'Pausar' : 'Retomar'}
                className="p-1.5 rounded-full bg-white/15 hover:bg-white/25 transition cursor-pointer"
              >
                {state.isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => setMinimized(false)}
                title="Expandir barra do timer"
                className="p-1.5 rounded-full hover:bg-white/15 transition cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="w-76 sm:w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden">
              {/* Thin top progress bar */}
              <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800">
                <div
                  className={`h-full transition-all duration-500 ${
                    isFocus ? 'bg-indigo-600 dark:bg-indigo-400' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${progressPct}%` }}
                />
              </div>

              <div className="p-3.5 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={onOpenPanel}
                    className="flex items-center gap-2 min-w-0 text-left group cursor-pointer"
                  >
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                        isFocus
                          ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                          : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400'
                      }`}
                    >
                      {isFocus ? <Flame className="w-4 h-4" /> : <Coffee className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-extrabold text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {phaseTitle}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {state.presetName} • {activeDiscName}
                      </div>
                    </div>
                  </button>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={onOpenPanel}
                      title="Configurar sessão"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <Sliders className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setMinimized(true)}
                      title="Minimizar para chip"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <Minimize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-0.5">
                  <div className="font-mono text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    {formatTimerClock(state.remainingSeconds)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={timer.toggleRun}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold text-white flex items-center gap-1 transition cursor-pointer ${
                        state.isRunning
                          ? 'bg-amber-500 hover:bg-amber-600'
                          : isFocus
                          ? 'bg-indigo-600 hover:bg-indigo-700'
                          : 'bg-emerald-600 hover:bg-emerald-700'
                      }`}
                    >
                      {state.isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      {state.isRunning ? 'Pausar' : 'Continuar'}
                    </button>

                    <button
                      type="button"
                      onClick={timer.skipPhase}
                      title="Pular para próxima fase"
                      className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer"
                    >
                      <SkipForward className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={timer.endSession}
                      title="Encerrar sessão"
                      className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-100 dark:hover:bg-rose-950/60 text-slate-500 hover:text-rose-600 cursor-pointer"
                    >
                      <StopCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Full Study Session Modal / Panel */}
      {isPanelOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={onClosePanel}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Timer className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                    Sessão de Estudo com Timer
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Inicie uma sessão e navegue livremente por todo o site com o timer ativo.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClosePanel}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto">
              {/* Active Session Live Banner */}
              {state.active && (
                <div
                  className={`rounded-2xl p-5 border space-y-4 ${
                    isFocus
                      ? 'bg-indigo-50/70 dark:bg-indigo-950/35 border-indigo-200 dark:border-indigo-800'
                      : 'bg-emerald-50/70 dark:bg-emerald-950/35 border-emerald-200 dark:border-emerald-800'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          isFocus
                            ? 'bg-indigo-600 text-white'
                            : 'bg-emerald-600 text-white'
                        }`}
                      >
                        {isFocus ? <Flame className="w-3 h-3" /> : <Coffee className="w-3 h-3" />}
                        {phaseTitle}
                      </span>
                      <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">
                        {state.presetName} • Foco em: <strong>{activeDiscName}</strong>
                      </div>
                    </div>

                    <div className="font-mono text-4xl font-black text-slate-900 dark:text-white">
                      {formatTimerClock(state.remainingSeconds)}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2.5 rounded-full bg-white/80 dark:bg-slate-900 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isFocus ? 'bg-indigo-600' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={timer.toggleRun}
                        className={`px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 cursor-pointer ${
                          state.isRunning ? 'bg-amber-500 hover:bg-amber-600' : 'bg-indigo-600 hover:bg-indigo-700'
                        }`}
                      >
                        {state.isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        {state.isRunning ? 'Pausar' : 'Retomar'}
                      </button>
                      <button
                        type="button"
                        onClick={() => timer.addMinutes(5)}
                        className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 flex items-center gap-1 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" /> 5 min
                      </button>
                      <button
                        type="button"
                        onClick={timer.resetCurrentPhase}
                        title="Reiniciar fase atual"
                        className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={timer.skipPhase}
                        title="Pular fase"
                        className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer"
                      >
                        <SkipForward className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={onClosePanel}
                        className="px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold cursor-pointer"
                      >
                        Continuar estudando no site
                      </button>
                      <button
                        type="button"
                        onClick={timer.endSession}
                        className="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs font-bold cursor-pointer"
                      >
                        Encerrar
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Daily goal + Preferences strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Meta de Foco Hoje</span>
                    <span className="font-extrabold text-indigo-600 dark:text-indigo-400">
                      {todayStats.todayMinutes} / {dailyGoalMinutes} min ({todayStats.goalPct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all"
                      style={{ width: `${todayStats.goalPct}%` }}
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Disciplina desta sessão
                  </label>
                  <select
                    value={selectedDiscipline}
                    onChange={(e) => {
                      const val = e.target.value as DisciplineId | 'geral';
                      setSelectedDiscipline(val);
                      if (state.active) timer.setDiscipline(val);
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                  >
                    <option value="geral">Estudo Geral / Misto</option>
                    {DISCIPLINES.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.shortName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Audio & Auto-advance toggles */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                  {(
                    [
                      ['presets', 'Sessões Pré-Definidas'],
                      ['custom', 'Personalizar'],
                      ['history', `Histórico (${sessions.length})`],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPanelTab(id)}
                      className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                        panelTab === id
                          ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={timer.toggleSound}
                    className={`px-2.5 py-1.5 rounded-lg border font-semibold flex items-center gap-1 cursor-pointer ${
                      state.soundEnabled
                        ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
                        : 'border-slate-200 dark:border-slate-700 text-slate-400'
                    }`}
                  >
                    {state.soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                    Som
                  </button>
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-600 dark:text-slate-300 font-semibold">
                    <input
                      type="checkbox"
                      checked={state.autoAdvance}
                      onChange={timer.toggleAutoAdvance}
                      className="accent-indigo-600 rounded"
                    />
                    Auto-iniciar próxima fase
                  </label>
                </div>
              </div>

              {/* TAB 1: Presets */}
              {panelTab === 'presets' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STUDY_TIMER_PRESETS.map((preset) => {
                    const isCurrent = state.active && state.presetId === preset.id;
                    return (
                      <div
                        key={preset.id}
                        className={`p-4 rounded-2xl border flex flex-col justify-between gap-3 transition ${
                          isCurrent
                            ? 'bg-indigo-50/60 dark:bg-indigo-950/30 border-indigo-400 dark:border-indigo-500'
                            : 'bg-white dark:bg-slate-950/50 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                              {preset.name}
                            </h3>
                            <span className="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono text-[11px] font-bold">
                              {preset.focusMinutes}/{preset.shortBreakMinutes}m
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                            {preset.tagline}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1 pt-0.5">
                            <Sparkles className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                            <span>{preset.recommendedFor}</span>
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            timer.startPreset(preset, selectedDiscipline);
                            setMinimized(false);
                            onClosePanel();
                          }}
                          className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5" />
                          {isCurrent ? 'Reiniciar Sessão' : 'Ativar e Estudar'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB 2: Custom Builder */}
              {panelTab === 'custom' && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                        Foco (min)
                      </label>
                      <input
                        type="number"
                        min={5}
                        max={180}
                        value={customConfig.focusMinutes}
                        onChange={(e) =>
                          setCustomConfig((c) => ({ ...c, focusMinutes: Number(e.target.value) || 25 }))
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                        Pausa curta
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={45}
                        value={customConfig.shortBreakMinutes}
                        onChange={(e) =>
                          setCustomConfig((c) => ({ ...c, shortBreakMinutes: Number(e.target.value) || 5 }))
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                        Pausa longa
                      </label>
                      <input
                        type="number"
                        min={5}
                        max={60}
                        value={customConfig.longBreakMinutes}
                        onChange={(e) =>
                          setCustomConfig((c) => ({ ...c, longBreakMinutes: Number(e.target.value) || 15 }))
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">
                        Ciclos
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={customConfig.cycles}
                        onChange={(e) =>
                          setCustomConfig((c) => ({ ...c, cycles: Number(e.target.value) || 3 }))
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-bold"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">
                    Tempo total de foco previsto:{' '}
                    <strong>{customConfig.focusMinutes * customConfig.cycles} minutos</strong> em{' '}
                    {customConfig.cycles} ciclo(s).
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      timer.startCustomSession(customConfig, selectedDiscipline);
                      setMinimized(false);
                      onClosePanel();
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4" /> Iniciar Sessão Personalizada
                  </button>
                </div>
              )}

              {/* TAB 3: History */}
              {panelTab === 'history' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <span className="text-[11px] text-slate-500 block">Blocos Hoje</span>
                      <strong className="text-lg font-black text-slate-900 dark:text-white">
                        {todayStats.todayCount}
                      </strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <span className="text-[11px] text-slate-500 block">Foco Hoje</span>
                      <strong className="text-lg font-black text-indigo-600 dark:text-indigo-400">
                        {todayStats.todayMinutes} min
                      </strong>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <span className="text-[11px] text-slate-500 block">Total Acumulado</span>
                      <strong className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                        {todayStats.totalMinutes} min
                      </strong>
                    </div>
                  </div>

                  {sessions.length === 0 ? (
                    <div className="text-center py-8 text-xs text-slate-500">
                      Nenhuma sessão concluída ainda. Escolha um preset e comece seu primeiro bloco de foco!
                    </div>
                  ) : (
                    <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                      {sessions.slice(0, 20).map((s) => {
                        const dLabel =
                          s.discipline === 'geral'
                            ? 'Estudo Geral'
                            : DISCIPLINE_MAP[s.discipline]?.shortName || s.discipline;
                        return (
                          <div
                            key={s.id}
                            className="px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs"
                          >
                            <div>
                              <span className="font-bold text-slate-900 dark:text-white">{s.presetName}</span>
                              <span className="text-slate-500 ml-2">• {dLabel}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                                +{s.durationMinutes} min
                              </span>
                              <span className="text-slate-400 text-[11px]">
                                {new Date(s.completedAt).toLocaleString('pt-BR', {
                                  day: '2-digit',
                                  month: '2-digit',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
