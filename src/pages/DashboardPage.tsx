import React, { useMemo } from 'react';
import {
  Flame,
  Target,
  BookOpen,
  FileCheck2,
  AlertOctagon,
  Layers,
  Award,
  TrendingUp,
  ArrowRight,
  Sparkles,
  FileEdit,
  BarChart3,
  Timer,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';
import type {
  DisciplineId,
  DiscursiveQuestion,
  ObjectiveQuestion,
  UserProgress,
} from '../types/enade';
import { DISCIPLINES } from '../data/disciplines';
import { FLASHCARDS } from '../data/flashcards';
import { estimateEnadeConcept } from './SimuladoPage';

interface DashboardPageProps {
  allQuestions: ObjectiveQuestion[];
  allDiscursive: DiscursiveQuestion[];
  progress: UserProgress;
  onNavigate: (tab: string) => void;
  onOpenModule: (disc: DisciplineId) => void;
  onLaunchExam: (source: string) => void;
  onOpenStudyTimer: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  allQuestions,
  allDiscursive,
  progress,
  onNavigate,
  onOpenModule,
  onLaunchExam,
  onOpenStudyTimer,
}) => {
  const officialQuestions = useMemo(
    () => allQuestions.filter((q) => q.source.startsWith('enade-')),
    [allQuestions]
  );

  // User stats
  const stats = useMemo(() => {
    const entries = Object.entries(progress.answeredQuestions);
    const totalAnswered = entries.length;
    const totalCorrect = entries.filter(([, v]) => v.correct).length;
    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

    const pendingErrors = allQuestions.filter((q) => {
      if (q.annulled) return false;
      const a = progress.answeredQuestions[q.id];
      return a && !a.correct && !progress.errorNotebookResolved.includes(q.id);
    }).length;

    const now = Date.now();
    const dueFlashcards = FLASHCARDS.filter((c) => {
      const fp = progress.flashcardProgress[c.id];
      return !fp || fp.nextReview <= now;
    }).length;

    const discursiveDone = Object.values(progress.discursiveAttempts).filter(
      (a) => a.text.trim().length > 10 || a.checkedCriteriaIds.length > 0
    ).length;

    // Estimated weighted score from answered questions or latest simulado
    let estimatedScore = 0;
    if (progress.simuladoHistory.length > 0) {
      estimatedScore = progress.simuladoHistory[0].weightedScore;
    } else if (totalAnswered > 0) {
      const fgAnswered = allQuestions.filter(
        (q) => q.component === 'FG' && progress.answeredQuestions[q.id]
      );
      const ceAnswered = allQuestions.filter(
        (q) => q.component === 'CE' && progress.answeredQuestions[q.id]
      );
      const fgAcc =
        fgAnswered.length > 0
          ? fgAnswered.filter((q) => progress.answeredQuestions[q.id].correct).length / fgAnswered.length
          : accuracy / 100;
      const ceAcc =
        ceAnswered.length > 0
          ? ceAnswered.filter((q) => progress.answeredQuestions[q.id].correct).length / ceAnswered.length
          : accuracy / 100;
      estimatedScore = Number((fgAcc * 25 + ceAcc * 75).toFixed(1));
    }

    const daysUntilExam = Math.max(
      0,
      Math.ceil(
        (new Date(progress.studyPlan.examDate + 'T00:00:00').getTime() - new Date().setHours(0, 0, 0, 0)) /
          (1000 * 60 * 60 * 24)
      )
    );

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const todayFocusMinutes = (progress.studySessions || [])
      .filter((s) => s.completedAt >= startOfToday.getTime())
      .reduce((acc, s) => acc + s.durationMinutes, 0);

    return {
      totalAnswered,
      totalCorrect,
      accuracy,
      pendingErrors,
      dueFlashcards,
      discursiveDone,
      estimatedScore,
      daysUntilExam,
      todayFocusMinutes,
    };
  }, [allQuestions, progress]);

  // Real Historical Incidence Chart across 2017, 2019, 2023
  const incidenceData = useMemo(() => {
    return DISCIPLINES.filter((d) => d.component === 'CE')
      .map((d) => {
        const y2017 = officialQuestions.filter((q) => q.year === 2017 && q.discipline === d.id).length;
        const y2019 = officialQuestions.filter((q) => q.year === 2019 && q.discipline === d.id).length;
        const y2023 = officialQuestions.filter((q) => q.year === 2023 && q.discipline === d.id).length;
        return {
          id: d.id,
          name: d.shortName,
          '2017': y2017,
          '2019': y2019,
          '2023': y2023,
          total: y2017 + y2019 + y2023,
          color: d.color,
        };
      })
      .sort((a, b) => b.total - a.total);
  }, [officialQuestions]);

  // Question Style Distribution (Official Exams)
  const styleData = useMemo(() => {
    const labels: Record<string, { label: string; color: string }> = {
      'multipla-simples': { label: 'Múltipla Simples', color: '#4f46e5' },
      afirmativas: { label: 'Afirmativas (I, II, III...)', color: '#0891b2' },
      'assercao-razao': { label: 'Asserção-Razão (PORQUE)', color: '#d97706' },
      'interpretacao-codigo': { label: 'Código / Algoritmo', color: '#059669' },
      'interpretacao-grafico-circuito': { label: 'Gráfico / Circuito / Diagrama', color: '#e11d48' },
    };
    return Object.entries(labels).map(([key, info]) => ({
      name: info.label,
      count: officialQuestions.filter((q) => q.questionStyle === key).length,
      color: info.color,
    }));
  }, [officialQuestions]);

  // Recommended next module (high incidence + unstudied or lowest accuracy)
  const recommendedModule = useMemo(() => {
    const scored = DISCIPLINES.map((d) => {
      const incidence = officialQuestions.filter((q) => q.discipline === d.id).length;
      const done = progress.completedModules.includes(d.id);
      const ansQs = allQuestions.filter((q) => q.discipline === d.id && progress.answeredQuestions[q.id]);
      const acc =
        ansQs.length > 0
          ? ansQs.filter((q) => progress.answeredQuestions[q.id].correct).length / ansQs.length
          : 0.4;
      const priorityScore = incidence * 2 + (done ? 0 : 12) + (1 - acc) * 15;
      return { disc: d, incidence, priorityScore, acc: Math.round(acc * 100), ansCount: ansQs.length };
    }).sort((a, b) => b.priorityScore - a.priorityScore);
    return scored[0];
  }, [officialQuestions, allQuestions, progress]);

  const conceptInfo = estimateEnadeConcept(stats.estimatedScore);

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-700 to-slate-900 text-white p-6 sm:p-8 shadow-lg">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Engenharia da Computação • Base Real ENADE 2017, 2019 e 2023 + Inéditas
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Sua Central Definitiva para o Conceito 5 no ENADE
            </h1>
            <p className="text-sm text-indigo-100 leading-relaxed">
              {allQuestions.length} questões objetivas comentadas passo a passo, {allDiscursive.length} discursivas com Padrão Oficial do INEP, 15 guias teóricos profundos, flashcards SM-2 e simulados no formato real da prova.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => onLaunchExam('enade-2023')}
                className="px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-bold text-xs sm:text-sm hover:bg-indigo-50 transition flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <FileCheck2 className="w-4 h-4" /> Fazer ENADE 2023 Agora
              </button>
              <button
                type="button"
                onClick={() => onLaunchExam('inedita-1')}
                className="px-5 py-2.5 rounded-xl bg-indigo-500/40 hover:bg-indigo-500/60 border border-white/25 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" /> Simulado Inédito #1
              </button>
              <button
                type="button"
                onClick={onOpenStudyTimer}
                className="px-5 py-2.5 rounded-xl bg-emerald-500/30 hover:bg-emerald-500/50 border border-emerald-300/40 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Timer className="w-4 h-4 text-emerald-200" />
                {stats.todayFocusMinutes > 0
                  ? `Sessão c/ Timer (${stats.todayFocusMinutes}m hoje)`
                  : 'Iniciar Sessão c/ Timer'}
              </button>
            </div>
          </div>

          {/* Right status card */}
          <div className="grid grid-cols-2 gap-3 shrink-0 min-w-[260px]">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-[11px] uppercase tracking-wider text-indigo-200 font-semibold flex items-center gap-1">
                <Target className="w-3.5 h-3.5" /> Faltam
              </span>
              <p className="text-2xl font-black mt-1">{stats.daysUntilExam} dias</p>
              <span className="text-[11px] text-indigo-200">até a prova</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-[11px] uppercase tracking-wider text-indigo-200 font-semibold flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-300" /> Sequência
              </span>
              <p className="text-2xl font-black mt-1">{progress.streakDays} dia(s)</p>
              <span className="text-[11px] text-indigo-200">estudando firme</span>
            </div>
            <div className="col-span-2 p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-indigo-200 font-semibold">
                  Nota Estimada ENADE
                </span>
                <p className="text-2xl font-black mt-0.5">
                  {stats.totalAnswered > 0 || progress.simuladoHistory.length > 0
                    ? `${stats.estimatedScore.toFixed(1)} / 100`
                    : 'Sem diagnóstico'}
                </p>
              </div>
              {stats.totalAnswered > 0 || progress.simuladoHistory.length > 0 ? (
                <span className="px-3 py-1.5 rounded-xl bg-white text-slate-900 font-black text-xs flex items-center gap-1">
                  <Award className="w-4 h-4" style={{ color: conceptInfo.color }} />
                  Conceito {conceptInfo.concept}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate('simulados')}
                  className="px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer"
                >
                  Diagnosticar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
        <button
          type="button"
          onClick={() => onNavigate('questoes')}
          className="text-left bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition cursor-pointer"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Questões Feitas</span>
            <TrendingUp className="w-4 h-4 text-indigo-500" />
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-white">
            {stats.totalAnswered}
            <span className="text-sm font-medium text-slate-400">/{allQuestions.length}</span>
          </p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
            {stats.accuracy}% de acerto
          </p>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('guias')}
          className="text-left bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition cursor-pointer"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Guias Teóricos</span>
            <BookOpen className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-white">
            {progress.completedModules.length}
            <span className="text-sm font-medium text-slate-400">/{DISCIPLINES.length}</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">módulos concluídos</p>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('discursivas')}
          className="text-left bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition cursor-pointer"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Discursivas</span>
            <FileEdit className="w-4 h-4 text-violet-500" />
          </div>
          <p className="text-2xl font-black text-slate-900 dark:text-white">
            {stats.discursiveDone}
            <span className="text-sm font-medium text-slate-400">/{allDiscursive.length}</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">treinadas c/ rubrica</p>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('flashcards')}
          className="text-left bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition cursor-pointer"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Flashcards Hoje</span>
            <Layers className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl font-black text-amber-600 dark:text-amber-400">{stats.dueFlashcards}</p>
          <p className="text-xs text-slate-500 mt-1">pendentes SM-2</p>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('erros')}
          className="text-left bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-rose-400 transition cursor-pointer col-span-2 lg:col-span-1"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Caderno de Erros</span>
            <AlertOctagon className="w-4 h-4 text-rose-500" />
          </div>
          <p className="text-2xl font-black text-rose-600 dark:text-rose-400">{stats.pendingErrors}</p>
          <p className="text-xs text-slate-500 mt-1">erros para superar</p>
        </button>
      </div>

      {/* Recommended Next Step Card */}
      {recommendedModule && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-indigo-200 dark:border-indigo-800/70 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Próximo Passo Recomendado para Você
            </span>
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Estudar: {recommendedModule.disc.name}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Alta incidência nos ENADEs 2017–2023 ({recommendedModule.incidence} questões oficiais) •{' '}
              {recommendedModule.ansCount > 0
                ? `Seu aproveitamento atual: ${recommendedModule.acc}%`
                : 'Ainda não praticado'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenModule(recommendedModule.disc.id)}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition flex items-center gap-2 shrink-0 cursor-pointer"
          >
            Abrir Módulo Agora <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Raio-X Real das Provas (2017, 2019, 2023) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                Raio-X Real: O que Mais Cai (ENADEs 2017, 2019 e 2023)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Contagem exata de questões do Componente Específico nas 3 últimas provas oficiais.
              </p>
            </div>
          </div>

          <div className="h-[360px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incidenceData} layout="vertical" margin={{ left: 6, right: 16, top: 4, bottom: 4 }}>
                <XAxis type="number" allowDecimals={false} fontSize={11} />
                <YAxis type="category" dataKey="name" width={150} fontSize={11} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="2017" stackId="a" fill="#94a3b8" radius={[0, 0, 0, 0]} />
                <Bar dataKey="2019" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
                <Bar dataKey="2023" stackId="a" fill="#4f46e5" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          {/* Style distribution */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              Padrão de Questões da Banca INEP
            </h2>
            <p className="text-xs text-slate-500">
              Distribuição dos formatos cobrados nas {officialQuestions.length} questões objetivas oficiais:
            </p>
            <div className="h-52 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={styleData} layout="vertical" margin={{ left: 4, right: 20, top: 4, bottom: 4 }}>
                  <XAxis type="number" allowDecimals={false} fontSize={11} />
                  <YAxis type="category" dataKey="name" width={155} fontSize={11} />
                  <Tooltip />
                  <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                    {styleData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Exam Structure Comparison */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-3">
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white">
              Estrutura Oficial da Prova (Mudança 2023+)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-1.5">Componente</th>
                    <th className="py-1.5">2017 / 2019</th>
                    <th className="py-1.5 text-indigo-600 dark:text-indigo-400">2023+ (Atual)</th>
                    <th className="py-1.5">Peso</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="py-2 font-semibold">Formação Geral</td>
                    <td className="py-2">8 obj + 2 disc</td>
                    <td className="py-2 font-bold text-indigo-600 dark:text-indigo-400">9 obj + 1 disc</td>
                    <td className="py-2 font-bold">25%</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Comp. Específico</td>
                    <td className="py-2">27 obj + 3 disc</td>
                    <td className="py-2 font-bold text-indigo-600 dark:text-indigo-400">29 obj + 1 disc</td>
                    <td className="py-2 font-bold">75%</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Total / Duração</td>
                    <td className="py-2">40 Q • 4h</td>
                    <td className="py-2 font-bold text-indigo-600 dark:text-indigo-400">40 Q • 4h</td>
                    <td className="py-2">15 linhas/disc</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Discipline Mastery Matrix */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              Mapa de Domínio por Disciplina
            </h2>
            <p className="text-xs text-slate-500">
              Clique em qualquer disciplina para abrir seu guia teórico completo e praticar suas questões.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {DISCIPLINES.map((d) => {
            const discQs = allQuestions.filter((q) => q.discipline === d.id);
            const answered = discQs.filter((q) => progress.answeredQuestions[q.id]);
            const correct = answered.filter((q) => progress.answeredQuestions[q.id].correct).length;
            const pct = answered.length > 0 ? Math.round((correct / answered.length) * 100) : null;
            const modDone = progress.completedModules.includes(d.id);

            return (
              <button
                key={d.id}
                type="button"
                onClick={() => onOpenModule(d.id)}
                className="text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 bg-slate-50/50 dark:bg-slate-950/40 transition space-y-2.5 cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-xs text-slate-900 dark:text-white truncate">
                    {d.shortName}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                      modDone
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-slate-200/80 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    }`}
                  >
                    {modDone ? 'Estudado' : `${discQs.length} Q`}
                  </span>
                </div>

                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${pct !== null ? pct : 0}%`,
                      backgroundColor:
                        pct === null ? d.color : pct >= 70 ? '#10b981' : pct >= 45 ? '#f59e0b' : '#ef4444',
                    }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>
                    {answered.length}/{discQs.length} resolvidas
                  </span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {pct !== null ? `${pct}% acerto` : 'Sem dados'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
