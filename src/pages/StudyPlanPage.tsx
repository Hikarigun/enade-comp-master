import React, { useMemo } from 'react';
import { Calendar, CheckCircle2, Circle, Target, ArrowRight, Flame, Sliders } from 'lucide-react';
import type { DisciplineId, ObjectiveQuestion, UserProgress } from '../types/enade';
import { DISCIPLINES, DISCIPLINE_MAP } from '../data/disciplines';

interface StudyPlanPageProps {
  allQuestions: ObjectiveQuestion[];
  progress: UserProgress;
  onUpdatePlan: (partial: Partial<UserProgress['studyPlan']>) => void;
  onToggleTask: (taskId: string) => void;
  onNavigateModule: (disc: DisciplineId) => void;
  onStartOfficialSimulado: (source: string) => void;
  onOpenDiscursive: () => void;
  onOpenFlashcards: () => void;
}

interface PlanTask {
  id: string;
  label: string;
  type: 'module' | 'simulado' | 'discursive' | 'flashcards';
  discipline?: DisciplineId;
  simuladoSource?: string;
  estMinutes: number;
}

interface WeekPlan {
  weekNumber: number;
  title: string;
  focus: string;
  tasks: PlanTask[];
}

export const StudyPlanPage: React.FC<StudyPlanPageProps> = ({
  allQuestions,
  progress,
  onUpdatePlan,
  onToggleTask,
  onNavigateModule,
  onStartOfficialSimulado,
  onOpenDiscursive,
  onOpenFlashcards,
}) => {
  const { examDate, hoursPerDay, daysPerWeek, completedTasks } = progress.studyPlan;

  const daysRemaining = useMemo(() => {
    const target = new Date(examDate + 'T00:00:00');
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return Math.max(7, Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  }, [examDate]);

  const totalWeeks = Math.max(2, Math.min(12, Math.ceil(daysRemaining / 7)));
  const weeklyHours = hoursPerDay * daysPerWeek;

  // Order disciplines by ENADE incidence + user weakness
  const rankedDisciplines = useMemo(() => {
    const officialQs = allQuestions.filter((q) => q.source.startsWith('enade-'));
    return [...DISCIPLINES].sort((a, b) => {
      const countA = officialQs.filter((q) => q.discipline === a.id).length;
      const countB = officialQs.filter((q) => q.discipline === b.id).length;

      // Accuracy penalty (weaker disciplines rise to the top)
      const acc = (id: DisciplineId) => {
        const qs = allQuestions.filter((q) => q.discipline === id && progress.answeredQuestions[q.id]);
        if (qs.length === 0) return 0.5;
        const ok = qs.filter((q) => progress.answeredQuestions[q.id]?.correct).length;
        return ok / qs.length;
      };

      const scoreA = countA * 1.5 + (1 - acc(a.id)) * 10 + (a.priority === 'alta' ? 4 : 0);
      const scoreB = countB * 1.5 + (1 - acc(b.id)) * 10 + (b.priority === 'alta' ? 4 : 0);
      return scoreB - scoreA;
    });
  }, [allQuestions, progress.answeredQuestions]);

  // Build week-by-week plan
  const weeks: WeekPlan[] = useMemo(() => {
    const plan: WeekPlan[] = [];
    const studyWeeks = Math.max(1, totalWeeks - 1);
    const modulesPerWeek = Math.ceil(rankedDisciplines.length / studyWeeks);
    const simuladoSchedule = [
      { source: 'enade-2017', label: 'Simulado Oficial ENADE 2017 (Diagnóstico Inicial)' },
      { source: 'enade-2019', label: 'Simulado Oficial ENADE 2019 (Consolidação)' },
      { source: 'inedita-1', label: 'Simulado Inédito #1 — Formato 2023+ (38 questões)' },
      { source: 'enade-2023', label: 'Simulado Oficial ENADE 2023 (Prova mais recente)' },
      { source: 'inedita-2', label: 'Simulado Inédito #2 — Simulado Final Completo' },
    ];

    for (let w = 0; w < totalWeeks; w++) {
      const isFinalWeek = w === totalWeeks - 1;
      const tasks: PlanTask[] = [];

      if (!isFinalWeek) {
        const slice = rankedDisciplines.slice(w * modulesPerWeek, (w + 1) * modulesPerWeek);
        for (const d of slice) {
          tasks.push({
            id: `w${w + 1}-mod-${d.id}`,
            label: `Estudar Guia Completo + Praticar: ${d.shortName}`,
            type: 'module',
            discipline: d.id,
            estMinutes: 90,
          });
        }
        tasks.push({
          id: `w${w + 1}-disc`,
          label: `Treinar 2 Questões Discursivas (15 linhas + Rubrica INEP)`,
          type: 'discursive',
          estMinutes: 45,
        });
        tasks.push({
          id: `w${w + 1}-fc`,
          label: `Zerar fila de Flashcards SM-2 (3 sessões na semana)`,
          type: 'flashcards',
          estMinutes: 45,
        });

        // Attach a simulado proportionally across weeks
        const simIdx = Math.floor((w / Math.max(1, totalWeeks - 1)) * (simuladoSchedule.length - 1));
        const prevSimIdx = w === 0 ? -1 : Math.floor(((w - 1) / Math.max(1, totalWeeks - 1)) * (simuladoSchedule.length - 1));
        if (w === 0 || simIdx !== prevSimIdx) {
          const sim = simuladoSchedule[Math.min(simIdx, simuladoSchedule.length - 2)];
          if (sim) {
            tasks.push({
              id: `w${w + 1}-sim-${sim.source}`,
              label: sim.label,
              type: 'simulado',
              simuladoSource: sim.source,
              estMinutes: 180,
            });
          }
        }

        plan.push({
          weekNumber: w + 1,
          title: w === 0 ? 'Base Prioritária & Diagnóstico' : `Bloco de Domínio ${w + 1}`,
          focus: slice.map((s) => s.shortName).join(' • ') || 'Revisão & Exercícios',
          tasks,
        });
      } else {
        // Final sprint week
        tasks.push(
          {
            id: `final-sim-inedita-2`,
            label: 'Simulado Inédito #2 (Prova Completa Cronometrada 4h)',
            type: 'simulado',
            simuladoSource: 'inedita-2',
            estMinutes: 240,
          },
          {
            id: `final-errors`,
            label: 'Zerar 100% do Caderno de Erros & Questões Favoritas',
            type: 'flashcards',
            estMinutes: 90,
          },
          {
            id: `final-disc`,
            label: 'Revisar Estrutura de Discursivas (FG + Código C em 15 linhas)',
            type: 'discursive',
            estMinutes: 60,
          },
          {
            id: `final-formulas`,
            label: 'Leitura final da Folha de Fórmulas + Pegadinhas Clássicas do INEP',
            type: 'module',
            discipline: 'formacao-geral',
            estMinutes: 60,
          }
        );

        plan.push({
          weekNumber: w + 1,
          title: 'Reta Final & Simulado Geral',
          focus: 'Revisão de alta retenção, Caderno de Erros e Folha de Fórmulas',
          tasks,
        });
      }
    }

    return plan;
  }, [totalWeeks, rankedDisciplines]);

  const totalTasks = weeks.reduce((acc, w) => acc + w.tasks.length, 0);
  const doneCount = weeks.reduce(
    (acc, w) => acc + w.tasks.filter((t) => completedTasks.includes(t.id)).length,
    0
  );
  const pctDone = totalTasks > 0 ? Math.round((doneCount / totalTasks) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Calendar className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            Plano de Estudos Adaptativo
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Cronograma priorizado automaticamente pela incidência real das provas 2017–2023 e pelos seus pontos fracos.
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800">
          <Flame className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <div className="text-xs">
            <span className="text-slate-500 dark:text-slate-400 block">Progresso do Plano</span>
            <strong className="text-base text-indigo-700 dark:text-indigo-300">
              {doneCount}/{totalTasks} tarefas ({pctDone}%)
            </strong>
          </div>
        </div>
      </div>

      {/* Config panel */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5 flex items-center gap-1">
            <Target className="w-3.5 h-3.5" /> Data da Prova ENADE
          </label>
          <input
            type="date"
            value={examDate}
            onChange={(e) => onUpdatePlan({ examDate: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5 flex items-center gap-1">
            <Sliders className="w-3.5 h-3.5" /> Horas por dia: {hoursPerDay}h
          </label>
          <input
            type="range"
            min={1}
            max={6}
            step={0.5}
            value={hoursPerDay}
            onChange={(e) => onUpdatePlan({ hoursPerDay: Number(e.target.value) })}
            className="w-full accent-indigo-600"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
            Dias por semana: {daysPerWeek} dias
          </label>
          <input
            type="range"
            min={2}
            max={7}
            step={1}
            value={daysPerWeek}
            onChange={(e) => onUpdatePlan({ daysPerWeek: Number(e.target.value) })}
            className="w-full accent-indigo-600"
          />
        </div>
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-0.5">
          <div className="text-slate-500">Carga estimada:</div>
          <div className="font-extrabold text-slate-900 dark:text-white text-sm">
            {weeklyHours}h/semana • {totalWeeks} semanas ({daysRemaining} dias)
          </div>
        </div>
      </div>

      {/* Weeks Timeline */}
      <div className="space-y-4">
        {weeks.map((week) => {
          const wDone = week.tasks.filter((t) => completedTasks.includes(t.id)).length;
          const allDone = wDone === week.tasks.length && week.tasks.length > 0;
          return (
            <div
              key={week.weekNumber}
              className={`bg-white dark:bg-slate-900 rounded-2xl border p-5 space-y-4 transition ${
                allDone
                  ? 'border-emerald-300 dark:border-emerald-800'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Semana {week.weekNumber}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{week.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{week.focus}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    allDone
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  {wDone}/{week.tasks.length} concluídas
                </span>
              </div>

              <div className="space-y-2">
                {week.tasks.map((task) => {
                  const checked = completedTasks.includes(task.id);
                  const disc = task.discipline ? DISCIPLINE_MAP[task.discipline] : null;
                  return (
                    <div
                      key={task.id}
                      className={`flex items-center justify-between gap-3 p-3 rounded-xl border transition ${
                        checked
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
                          : 'bg-slate-50/70 dark:bg-slate-950/50 border-slate-200/80 dark:border-slate-800'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => onToggleTask(task.id)}
                        className="flex items-center gap-3 text-left flex-1 cursor-pointer"
                      >
                        {checked ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                        <div>
                          <div
                            className={`text-sm font-semibold ${
                              checked ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'
                            }`}
                          >
                            {task.label}
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                            <span>~{task.estMinutes} min</span>
                            {disc && (
                              <span style={{ color: disc.color }} className="font-medium">
                                • {disc.shortName}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (task.type === 'module' && task.discipline) onNavigateModule(task.discipline);
                          else if (task.type === 'simulado' && task.simuladoSource) onStartOfficialSimulado(task.simuladoSource);
                          else if (task.type === 'discursive') onOpenDiscursive();
                          else onOpenFlashcards();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition flex items-center gap-1 shrink-0 cursor-pointer"
                      >
                        Abrir <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
