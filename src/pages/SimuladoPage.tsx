import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Play,
  Clock,
  CheckCircle2,
  XCircle,
  Flag,
  ChevronLeft,
  ChevronRight,
  Award,
  Sparkles,
  FileCheck2,
  Sliders,
  Pause,
  RotateCcw,
  Calculator,
  X,
  Trophy,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import type {
  DisciplineId,
  ObjectiveQuestion,
  OptionLetter,
  SimuladoResult,
  UserProgress,
} from '../types/enade';
import { DISCIPLINES, DISCIPLINE_MAP } from '../data/disciplines';
import { QuestionCard } from '../components/QuestionCard';

export interface SimuladoLaunchRequest {
  title: string;
  questionIds: string[];
  mode: 'prova' | 'treino';
  sourceFilter: string;
  durationMinutes: number;
}

interface SimuladoPageProps {
  allQuestions: ObjectiveQuestion[];
  progress: UserProgress;
  onFinishSimulado: (
    result: SimuladoResult,
    questionMap: Record<string, { selected: OptionLetter; correct: boolean }>
  ) => void;
  onToggleBookmark: (qId: string) => void;
  onOpenModule: (disc: DisciplineId) => void;
  pendingLaunch: SimuladoLaunchRequest | null;
  onClearPendingLaunch: () => void;
}

function formatTime(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

export function estimateEnadeConcept(score: number): { concept: number; label: string; color: string } {
  if (score >= 75) return { concept: 5, label: 'Conceito 5 (Excelência)', color: '#059669' };
  if (score >= 60) return { concept: 4, label: 'Conceito 4 (Muito Bom)', color: '#2563eb' };
  if (score >= 45) return { concept: 3, label: 'Conceito 3 (Satisfatório)', color: '#d97706' };
  if (score >= 30) return { concept: 2, label: 'Conceito 2 (Abaixo da Média)', color: '#ea580c' };
  return { concept: 1, label: 'Conceito 1 (Crítico)', color: '#dc2626' };
}

export const SimuladoPage: React.FC<SimuladoPageProps> = ({
  allQuestions,
  progress,
  onFinishSimulado,
  onToggleBookmark,
  onOpenModule,
  pendingLaunch,
  onClearPendingLaunch,
}) => {
  const [phase, setPhase] = useState<'lobby' | 'running' | 'result'>('lobby');
  const [activeTitle, setActiveTitle] = useState('');
  const [activeMode, setActiveMode] = useState<'prova' | 'treino'>('prova');
  const [activeSourceFilter, setActiveSourceFilter] = useState('custom');
  const [activeQuestions, setActiveQuestions] = useState<ObjectiveQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, OptionLetter | null>>({});
  const [flagged, setFlagged] = useState<string[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [limitSeconds, setLimitSeconds] = useState(4 * 3600);
  const [paused, setPaused] = useState(false);
  const [lastResult, setLastResult] = useState<SimuladoResult | null>(null);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong'>('all');
  const [showCalc, setShowCalc] = useState(false);
  const [calcExpr, setCalcExpr] = useState('');
  const [calcOutput, setCalcOutput] = useState('');

  // Custom generator state
  const [customOrigin, setCustomOrigin] = useState<'all' | 'oficiais' | 'ineditas' | 'unanswered' | 'wrong'>('all');
  const [customDiscs, setCustomDiscs] = useState<DisciplineId[]>([]);
  const [customCount, setCustomCount] = useState(20);
  const [customMode, setCustomMode] = useState<'prova' | 'treino'>('treino');
  const [examModeChoice, setExamModeChoice] = useState<'prova' | 'treino'>('prova');

  const questionMapById = useMemo(
    () => Object.fromEntries(allQuestions.map((q) => [q.id, q])),
    [allQuestions]
  );

  const startSession = useCallback(
    (req: SimuladoLaunchRequest) => {
      const qs = req.questionIds.map((id) => questionMapById[id]).filter(Boolean);
      if (qs.length === 0) return;
      setActiveTitle(req.title);
      setActiveMode(req.mode);
      setActiveSourceFilter(req.sourceFilter);
      setActiveQuestions(qs);
      setAnswers({});
      setFlagged([]);
      setCurrentIdx(0);
      setElapsedSeconds(0);
      setLimitSeconds(req.durationMinutes * 60);
      setPaused(false);
      setLastResult(null);
      setPhase('running');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [questionMapById]
  );

  useEffect(() => {
    if (pendingLaunch) {
      startSession(pendingLaunch);
      onClearPendingLaunch();
    }
  }, [pendingLaunch, startSession, onClearPendingLaunch]);

  // Timer
  useEffect(() => {
    if (phase !== 'running' || paused) return;
    const id = window.setInterval(() => {
      setElapsedSeconds((s) => s + 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [phase, paused]);

  const currentQuestion = activeQuestions[currentIdx];

  const handleSelectOption = useCallback(
    (letter: OptionLetter) => {
      if (!currentQuestion) return;
      if (activeMode === 'treino' && answers[currentQuestion.id]) return; // lock once answered in treino
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: letter }));
    },
    [currentQuestion, activeMode, answers]
  );

  const toggleFlag = useCallback((qId: string) => {
    setFlagged((prev) => (prev.includes(qId) ? prev.filter((x) => x !== qId) : [...prev, qId]));
  }, []);

  // Keyboard shortcuts during running exam
  useEffect(() => {
    if (phase !== 'running') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const upper = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D', 'E'].includes(upper)) {
        handleSelectOption(upper as OptionLetter);
      } else if (e.key === 'ArrowRight') {
        setCurrentIdx((i) => Math.min(activeQuestions.length - 1, i + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIdx((i) => Math.max(0, i - 1));
      } else if (upper === 'R' && currentQuestion) {
        toggleFlag(currentQuestion.id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, activeQuestions.length, currentQuestion, handleSelectOption, toggleFlag]);

  const handleFinish = () => {
    let correctCount = 0;
    let answeredCount = 0;
    let fgCorrect = 0;
    let fgTotal = 0;
    let ceCorrect = 0;
    let ceTotal = 0;
    const byDiscipline: Record<string, { correct: number; total: number }> = {};
    const qRecordMap: Record<string, { selected: OptionLetter; correct: boolean }> = {};

    for (const q of activeQuestions) {
      const sel = answers[q.id] || null;
      if (sel) answeredCount++;

      // Annulled questions count as valid credit for everyone (INEP rule)
      const isCorrect = q.annulled ? true : sel !== null && sel === q.correctOption;
      if (isCorrect) correctCount++;

      if (q.component === 'FG') {
        fgTotal++;
        if (isCorrect) fgCorrect++;
      } else {
        ceTotal++;
        if (isCorrect) ceCorrect++;
      }

      if (!byDiscipline[q.discipline]) byDiscipline[q.discipline] = { correct: 0, total: 0 };
      byDiscipline[q.discipline].total++;
      if (isCorrect) byDiscipline[q.discipline].correct++;

      if (sel && !q.annulled) {
        qRecordMap[q.id] = { selected: sel, correct: isCorrect };
      }
    }

    // Weighted official ENADE formula: 25% FG + 75% CE (when both present)
    let weightedScore = 0;
    if (fgTotal > 0 && ceTotal > 0) {
      weightedScore = (fgCorrect / fgTotal) * 25 + (ceCorrect / ceTotal) * 75;
    } else if (activeQuestions.length > 0) {
      weightedScore = (correctCount / activeQuestions.length) * 100;
    }

    const result: SimuladoResult = {
      id: `sim-${Date.now()}`,
      title: activeTitle,
      mode: activeMode,
      sourceFilter: activeSourceFilter,
      date: Date.now(),
      durationSeconds: elapsedSeconds,
      totalQuestions: activeQuestions.length,
      answeredCount,
      correctCount,
      fgCorrect,
      fgTotal,
      ceCorrect,
      ceTotal,
      weightedScore: Number(weightedScore.toFixed(1)),
      answers,
      byDiscipline,
    };

    onFinishSimulado(result, qRecordMap);
    setLastResult(result);
    setPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const launchExamBySource = (source: string, title: string, minutes: number) => {
    const qs = allQuestions
      .filter((q) => q.source === source)
      .sort((a, b) => a.number - b.number);
    startSession({
      title,
      questionIds: qs.map((q) => q.id),
      mode: examModeChoice,
      sourceFilter: source,
      durationMinutes: minutes,
    });
  };

  const launchCustom = () => {
    let pool = allQuestions.filter((q) => !q.annulled);
    if (customOrigin === 'oficiais') pool = pool.filter((q) => q.source.startsWith('enade-'));
    else if (customOrigin === 'ineditas') pool = pool.filter((q) => q.source.startsWith('inedita-'));
    else if (customOrigin === 'unanswered') pool = pool.filter((q) => !progress.answeredQuestions[q.id]);
    else if (customOrigin === 'wrong')
      pool = pool.filter((q) => progress.answeredQuestions[q.id] && !progress.answeredQuestions[q.id].correct);

    if (customDiscs.length > 0) {
      pool = pool.filter((q) => customDiscs.includes(q.discipline));
    }

    // Shuffle cleanly
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, customCount);
    if (shuffled.length === 0) return;
    startSession({
      title: `Simulado Personalizado (${shuffled.length} Q)`,
      questionIds: shuffled.map((q) => q.id),
      mode: customMode,
      sourceFilter: 'custom',
      durationMinutes: Math.max(15, Math.round(shuffled.length * 4.5)),
    });
  };

  const evalCalc = () => {
    try {
      const sanitized = calcExpr
        .replace(/[^0-9+\-*/().^,\s]/g, '')
        .replace(/\^/g, '**');
      if (!sanitized.trim()) return;
      // eslint-disable-next-line no-new-func
      const val = Function(`"use strict"; return (${sanitized})`)();
      setCalcOutput(typeof val === 'number' && Number.isFinite(val) ? String(Number(val.toFixed(6))) : 'Erro');
    } catch {
      setCalcOutput('Expressão inválida');
    }
  };

  // ==================== LOBBY VIEW ====================
  if (phase === 'lobby') {
    const presetOfficial = [
      {
        source: 'enade-2023',
        title: 'ENADE 2023 (Formato Atual)',
        subtitle: '38 objetivas (9 FG + 29 CE) • Prova mais recente',
        minutes: 210,
        badge: 'Mais Recente',
        accent: 'border-indigo-400 dark:border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20',
      },
      {
        source: 'enade-2019',
        title: 'ENADE 2019 (Oficial Completo)',
        subtitle: '35 objetivas (8 FG + 27 CE) • Q1 anulada tratada oficialmente',
        minutes: 195,
        badge: 'Oficial INEP',
        accent: 'border-slate-200 dark:border-slate-800',
      },
      {
        source: 'enade-2017',
        title: 'ENADE 2017 (Oficial Completo)',
        subtitle: '35 objetivas (8 FG + 27 CE) • Base clássica de Computação',
        minutes: 195,
        badge: 'Oficial INEP',
        accent: 'border-slate-200 dark:border-slate-800',
      },
    ];

    const presetIneditos = [
      {
        source: 'inedita-1',
        title: 'Simulado Inédito #1 — Formato 2023+',
        subtitle: '38 questões 100% novas (9 FG + 29 CE) modeladas no padrão INEP',
        minutes: 210,
        badge: 'Inédito #1',
      },
      {
        source: 'inedita-2',
        title: 'Simulado Inédito #2 — Reta Final',
        subtitle: '38 questões 100% novas (9 FG + 29 CE) focadas em temas críticos',
        minutes: 210,
        badge: 'Inédito #2',
      },
    ];

    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
              <FileCheck2 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              Central de Simulados ENADE
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Resolva as provas oficiais completas (2017, 2019, 2023), simulados inéditos no formato atual ou monte seu treino sob medida.
            </p>
          </div>

          <div className="inline-flex rounded-xl p-1 bg-slate-200/70 dark:bg-slate-800 self-start">
            <button
              type="button"
              onClick={() => setExamModeChoice('prova')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                examModeChoice === 'prova'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Modo Prova Real
            </button>
            <button
              type="button"
              onClick={() => setExamModeChoice('treino')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                examModeChoice === 'treino'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Modo Treino (Feedback na hora)
            </button>
          </div>
        </div>

        {/* Official Exams */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Provas Oficiais Anteriores (INEP)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {presetOfficial.map((item) => {
              const count = allQuestions.filter((q) => q.source === item.source).length;
              const best = progress.simuladoHistory
                .filter((s) => s.sourceFilter === item.source)
                .sort((a, b) => b.weightedScore - a.weightedScore)[0];
              return (
                <div
                  key={item.source}
                  className={`bg-white dark:bg-slate-900 rounded-2xl border p-5 flex flex-col justify-between gap-4 shadow-sm ${item.accent}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold">
                        {item.badge}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {Math.round(item.minutes / 60)}h{item.minutes % 60 > 0 ? `${item.minutes % 60}m` : ''}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">{item.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.subtitle}</p>
                    {best && (
                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 pt-1">
                        <Trophy className="w-3.5 h-3.5" /> Melhor nota: {best.weightedScore}/100 ({best.correctCount}/{best.totalQuestions})
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={count === 0}
                    onClick={() => launchExamBySource(item.source, item.title, item.minutes)}
                    className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4" /> Iniciar ({count} questões)
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Brand-New ENADE Style Simulados */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Simulados Inéditos (Questões Novas Baseadas nos ENADEs Anteriores)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {presetIneditos.map((item) => {
              const count = allQuestions.filter((q) => q.source === item.source).length;
              const best = progress.simuladoHistory
                .filter((s) => s.sourceFilter === item.source)
                .sort((a, b) => b.weightedScore - a.weightedScore)[0];
              return (
                <div
                  key={item.source}
                  className="bg-gradient-to-br from-white to-indigo-50/40 dark:from-slate-900 dark:to-indigo-950/20 rounded-2xl border border-indigo-200/80 dark:border-indigo-800/60 p-5 flex flex-col justify-between gap-4 shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[11px] font-bold">
                        {item.badge}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 3h30m (Objetivas)
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">{item.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.subtitle}</p>
                    {best && (
                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 pt-1">
                        <Trophy className="w-3.5 h-3.5" /> Melhor nota: {best.weightedScore}/100
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={count === 0}
                    onClick={() => launchExamBySource(item.source, item.title, item.minutes)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white hover:opacity-90 disabled:opacity-40 text-white dark:text-slate-900 font-bold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4" /> Iniciar Simulado Inédito ({count} Q)
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Custom Generator */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Gerador de Simulado Personalizado
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                Origem das Questões
              </label>
              <select
                value={customOrigin}
                onChange={(e) => setCustomOrigin(e.target.value as typeof customOrigin)}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
              >
                <option value="all">Todas (Oficiais + Inéditas)</option>
                <option value="oficiais">Somente Oficiais (2017–2023)</option>
                <option value="ineditas">Somente Inéditas</option>
                <option value="unanswered">Somente Nunca Respondidas</option>
                <option value="wrong">Somente que Eu Errei</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                Quantidade de Questões: {customCount}
              </label>
              <input
                type="range"
                min={5}
                max={40}
                step={5}
                value={customCount}
                onChange={(e) => setCustomCount(Number(e.target.value))}
                className="w-full accent-indigo-600 mt-2"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                Modo de Execução
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setCustomMode('treino')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    customMode === 'treino'
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Treino (Imediato)
                </button>
                <button
                  type="button"
                  onClick={() => setCustomMode('prova')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition cursor-pointer ${
                    customMode === 'prova'
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Prova Real
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                Filtrar Disciplinas (vazio = todas):
              </span>
              {customDiscs.length > 0 && (
                <button
                  type="button"
                  onClick={() => setCustomDiscs([])}
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  Limpar seleção
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {DISCIPLINES.map((d) => {
                const active = customDiscs.includes(d.id);
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() =>
                      setCustomDiscs((prev) =>
                        prev.includes(d.id) ? prev.filter((x) => x !== d.id) : [...prev, d.id]
                      )
                    }
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                      active
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                    }`}
                  >
                    {d.shortName}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={launchCustom}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Play className="w-4 h-4" /> Gerar e Iniciar Simulado Personalizado
          </button>
        </section>

        {/* History */}
        {progress.simuladoHistory.length > 0 && (
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              Histórico de Simulados ({progress.simuladoHistory.length})
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-2 pr-4">Simulado</th>
                    <th className="py-2 px-3">Data</th>
                    <th className="py-2 px-3">Acertos</th>
                    <th className="py-2 px-3">Nota ENADE</th>
                    <th className="py-2 px-3">Tempo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {progress.simuladoHistory.slice(0, 10).map((s) => {
                    const est = estimateEnadeConcept(s.weightedScore);
                    return (
                      <tr key={s.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40">
                        <td className="py-2.5 pr-4 font-semibold text-slate-900 dark:text-white">
                          {s.title}
                          <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase">
                            {s.mode}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-xs text-slate-500">
                          {new Date(s.date).toLocaleDateString('pt-BR')}
                        </td>
                        <td className="py-2.5 px-3 font-medium">
                          {s.correctCount}/{s.totalQuestions}
                        </td>
                        <td className="py-2.5 px-3 font-extrabold" style={{ color: est.color }}>
                          {s.weightedScore.toFixed(1)} (C{est.concept})
                        </td>
                        <td className="py-2.5 px-3 text-xs text-slate-500 font-mono">
                          {formatTime(s.durationSeconds)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    );
  }

  // ==================== RUNNING EXAM VIEW ====================
  if (phase === 'running' && currentQuestion) {
    const answeredTotal = Object.values(answers).filter(Boolean).length;
    const remaining = Math.max(0, limitSeconds - elapsedSeconds);
    const showImmediateFeedback = activeMode === 'treino' && Boolean(answers[currentQuestion.id]);

    return (
      <div className="space-y-5">
        {/* Sticky top exam HUD */}
        <div className="sticky top-2 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Deseja sair deste simulado sem finalizar?')) setPhase('lobby');
              }}
              className="text-xs font-semibold text-slate-500 hover:text-rose-600 cursor-pointer"
            >
              Sair
            </button>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />
            <div className="truncate">
              <div className="text-sm font-extrabold text-slate-900 dark:text-white truncate">{activeTitle}</div>
              <div className="text-[11px] text-slate-500">
                Respondidas: <strong>{answeredTotal}</strong>/{activeQuestions.length} • Atalhos: A–E, ←/→, R (revisar)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div
              className={`px-3 py-1.5 rounded-xl font-mono text-sm font-bold flex items-center gap-1.5 border ${
                remaining < 600
                  ? 'bg-rose-50 text-rose-700 border-rose-300 dark:bg-rose-950 dark:text-rose-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Clock className="w-4 h-4" />
              {formatTime(activeMode === 'prova' ? remaining : elapsedSeconds)}
            </div>

            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              title={paused ? 'Retomar cronômetro' : 'Pausar cronômetro'}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {paused ? <Play className="w-4 h-4 text-emerald-600" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setShowCalc((v) => !v)}
              title="Calculadora rápida (lembre: no ENADE real não é permitida)"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleFinish}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer shadow-sm"
            >
              Finalizar Prova
            </button>
          </div>
        </div>

        {/* Optional quick calculator */}
        {showCalc && (
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-amber-300 dark:border-amber-700 p-3.5 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-amber-700 dark:text-amber-300">
              Calculadora de Estudo (proibida no ENADE real):
            </span>
            <input
              type="text"
              value={calcExpr}
              onChange={(e) => setCalcExpr(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && evalCalc()}
              placeholder="Ex: (11.3 - 6.9) / 11.3 * 100"
              className="flex-1 min-w-[200px] px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono"
            />
            <button
              type="button"
              onClick={evalCalc}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold cursor-pointer"
            >
              =
            </button>
            {calcOutput && <span className="font-mono font-bold text-sm text-emerald-600 dark:text-emerald-400">{calcOutput}</span>}
            <button type="button" onClick={() => setShowCalc(false)} className="p-1 text-slate-400 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Question Card */}
          <div className="lg:col-span-9 space-y-4">
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              indexLabel={`Questão ${currentIdx + 1} de ${activeQuestions.length}`}
              selectedOption={answers[currentQuestion.id] || null}
              onSelectOption={handleSelectOption}
              showFeedback={showImmediateFeedback}
              isBookmarked={progress.bookmarkedQuestions.includes(currentQuestion.id)}
              onToggleBookmark={() => onToggleBookmark(currentQuestion.id)}
              isFlagged={flagged.includes(currentQuestion.id)}
              onToggleFlag={() => toggleFlag(currentQuestion.id)}
              onOpenModule={activeMode === 'treino' ? onOpenModule : undefined}
              disabled={showImmediateFeedback}
            />

            <div className="flex items-center justify-between">
              <button
                type="button"
                disabled={currentIdx === 0}
                onClick={() => {
                  setCurrentIdx((i) => Math.max(0, i - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>

              {currentIdx < activeQuestions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => {
                    setCurrentIdx((i) => Math.min(activeQuestions.length - 1, i + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  Próxima <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinish}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" /> Entregar e Corrigir Prova
                </button>
              )}
            </div>
          </div>

          {/* Question Grid Sidebar */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-3 lg:sticky lg:top-24">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Cartão-Resposta
            </h3>
            <div className="grid grid-cols-5 gap-1.5">
              {activeQuestions.map((q, idx) => {
                const ans = answers[q.id];
                const isFlag = flagged.includes(q.id);
                const isCur = idx === currentIdx;
                let cls = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-transparent';

                if (activeMode === 'treino' && ans) {
                  cls =
                    q.annulled || ans === q.correctOption
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-rose-600 text-white border-rose-600';
                } else if (ans) {
                  cls = 'bg-indigo-600 text-white border-indigo-600';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      setCurrentIdx(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`relative h-9 rounded-lg font-bold text-xs border transition cursor-pointer ${cls} ${
                      isCur ? 'ring-2 ring-offset-1 ring-indigo-500 dark:ring-offset-slate-900' : ''
                    }`}
                  >
                    {idx + 1}
                    {isFlag && (
                      <Flag className="w-2.5 h-2.5 text-amber-400 absolute top-0.5 right-0.5" fill="currentColor" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 space-y-1">
              <div className="flex justify-between">
                <span>Respondidas:</span>
                <strong>{answeredTotal}</strong>
              </div>
              <div className="flex justify-between">
                <span>Em branco:</span>
                <strong>{activeQuestions.length - answeredTotal}</strong>
              </div>
              <div className="flex justify-between">
                <span>Marcadas p/ revisão:</span>
                <strong className="text-amber-600">{flagged.length}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==================== RESULT VIEW ====================
  if (phase === 'result' && lastResult) {
    const est = estimateEnadeConcept(lastResult.weightedScore);
    const chartData = Object.entries(lastResult.byDiscipline)
      .map(([discId, stats]) => ({
        name: DISCIPLINE_MAP[discId as DisciplineId]?.shortName || discId,
        pct: Math.round((stats.correct / stats.total) * 100),
        correct: stats.correct,
        total: stats.total,
        color: DISCIPLINE_MAP[discId as DisciplineId]?.color || '#6366f1',
      }))
      .sort((a, b) => a.pct - b.pct);

    const reviewQuestions = activeQuestions.filter((q) => {
      if (reviewFilter === 'all') return true;
      if (q.annulled) return false;
      return lastResult.answers[q.id] !== q.correctOption;
    });

    return (
      <div className="space-y-6">
        {/* Hero Score Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                Resultado Oficial Ponderado ENADE
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {lastResult.title}
              </h1>
              <p className="text-sm text-slate-500">
                Tempo total: <strong>{formatTime(lastResult.durationSeconds)}</strong> • Média:{' '}
                <strong>{Math.round(lastResult.durationSeconds / Math.max(1, lastResult.totalQuestions))}s</strong> por questão
              </p>
            </div>

            <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <div className="text-center">
                <span className="text-xs font-semibold text-slate-500 block">Nota ENADE</span>
                <span className="text-4xl font-black" style={{ color: est.color }}>
                  {lastResult.weightedScore.toFixed(1)}
                </span>
                <span className="text-xs text-slate-400">/100</span>
              </div>
              <div className="h-12 w-px bg-slate-200 dark:bg-slate-800" />
              <div>
                <div className="flex items-center gap-1.5 font-extrabold text-sm" style={{ color: est.color }}>
                  <Award className="w-5 h-5" /> {est.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Acertos: <strong>{lastResult.correctCount}/{lastResult.totalQuestions}</strong> (
                  {Math.round((lastResult.correctCount / lastResult.totalQuestions) * 100)}%)
                </div>
              </div>
            </div>
          </div>

          {/* FG vs CE breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">Formação Geral (Peso 25%)</span>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {lastResult.fgTotal > 0
                  ? `${lastResult.fgCorrect}/${lastResult.fgTotal} (${Math.round((lastResult.fgCorrect / lastResult.fgTotal) * 100)}%)`
                  : 'N/A'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60">
              <span className="text-xs font-bold text-blue-700 dark:text-blue-300">Componente Específico (Peso 75%)</span>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {lastResult.ceTotal > 0
                  ? `${lastResult.ceCorrect}/${lastResult.ceTotal} (${Math.round((lastResult.ceCorrect / lastResult.ceTotal) * 100)}%)`
                  : 'N/A'}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500">Erros adicionados</span>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  Salvos no Caderno de Erros
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPhase('lobby')}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Novo Simulado
              </button>
            </div>
          </div>
        </div>

        {/* Discipline Performance Chart */}
        {chartData.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white mb-4">
              Diagnóstico por Disciplina (do menor para o maior aproveitamento)
            </h2>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 24, top: 5, bottom: 5 }}>
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} fontSize={11} />
                  <YAxis type="category" dataKey="name" width={155} fontSize={11} />
                  <Tooltip
                    formatter={(val: unknown, _name: unknown, props: { payload?: { correct?: number; total?: number } }) => [
                      `${val}% (${props?.payload?.correct ?? 0}/${props?.payload?.total ?? 0})`,
                      'Aproveitamento',
                    ]}
                  />
                  <Bar dataKey="pct" radius={[0, 6, 6, 0]}>
                    {chartData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.pct >= 70 ? '#10b981' : entry.pct >= 45 ? '#f59e0b' : '#ef4444'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Full Annotated Review */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Gabarito Comentado da Prova
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setReviewFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer ${
                  reviewFilter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                Todas ({activeQuestions.length})
              </button>
              <button
                type="button"
                onClick={() => setReviewFilter('wrong')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer ${
                  reviewFilter === 'wrong'
                    ? 'bg-rose-600 text-white'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                <XCircle className="w-3.5 h-3.5" /> Apenas Erradas / Em Branco
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {reviewQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                indexLabel={`Q${String(q.number).padStart(2, '0')}`}
                selectedOption={lastResult.answers[q.id] || null}
                showFeedback
                disabled
                isBookmarked={progress.bookmarkedQuestions.includes(q.id)}
                onToggleBookmark={() => onToggleBookmark(q.id)}
                onOpenModule={onOpenModule}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
