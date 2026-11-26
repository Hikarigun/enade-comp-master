import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Play,
  Layers,
  Clock,
  Search,
  ChevronRight,
  Sparkles,
  CheckSquare,
} from 'lucide-react';
import type { DisciplineId, ObjectiveQuestion, StudyModule } from '../types/enade';
import { DISCIPLINE_MAP } from '../data/disciplines';
import { RichText, LatexBlock } from '../components/RichText';

interface StudyGuidesPageProps {
  modules: StudyModule[];
  allQuestions: ObjectiveQuestion[];
  completedModules: DisciplineId[];
  onToggleModuleCompleted: (id: DisciplineId) => void;
  onPracticeDiscipline: (disc: DisciplineId) => void;
  onFlashcardsDiscipline: (disc: DisciplineId) => void;
  initialDiscipline?: DisciplineId | null;
}

export const StudyGuidesPage: React.FC<StudyGuidesPageProps> = ({
  modules,
  allQuestions,
  completedModules,
  onToggleModuleCompleted,
  onPracticeDiscipline,
  onFlashcardsDiscipline,
  initialDiscipline = null,
}) => {
  const [selectedId, setSelectedId] = useState<DisciplineId>(initialDiscipline || modules[0]?.id || 'algoritmos-ed');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (initialDiscipline) setSelectedId(initialDiscipline);
  }, [initialDiscipline]);

  const filteredModules = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return modules;
    return modules.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.subtitle.toLowerCase().includes(q) ||
        m.sections.some((s) => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q))
    );
  }, [modules, search]);

  const activeModule = modules.find((m) => m.id === selectedId) || modules[0];

  const relatedQuestions = useMemo(() => {
    if (!activeModule) return [];
    return allQuestions.filter((q) => q.discipline === activeModule.id);
  }, [allQuestions, activeModule]);

  const officialCount = relatedQuestions.filter((q) => q.source.startsWith('enade-')).length;
  const ineditaCount = relatedQuestions.length - officialCount;
  const isCompleted = activeModule ? completedModules.includes(activeModule.id) : false;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <BookOpen className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            Enciclopédia Teórica ENADE
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Todos os 15 blocos de conteúdo da Engenharia da Computação + Formação Geral explicados em profundidade.
          </p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>
            Módulos estudados: <strong className="text-slate-900 dark:text-white">{completedModules.length}</strong> / {modules.length}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Module Sidebar */}
        <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-6">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar assunto (ex: AVL, PID, Dijkstra, SQL)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="space-y-1.5 max-h-[72vh] overflow-y-auto pr-1">
            {filteredModules.map((mod) => {
              const disc = DISCIPLINE_MAP[mod.id];
              const done = completedModules.includes(mod.id);
              const selected = activeModule?.id === mod.id;
              const qCount = allQuestions.filter((q) => q.discipline === mod.id).length;

              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setSelectedId(mod.id)}
                  className={`w-full text-left p-3 rounded-xl border transition flex items-start gap-2.5 cursor-pointer ${
                    selected
                      ? 'bg-indigo-50/90 dark:bg-indigo-950/50 border-indigo-400 dark:border-indigo-500 ring-1 ring-indigo-500/20'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {done ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        {disc.shortName}
                      </span>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                        {qCount} Q
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {mod.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Module Content */}
        {activeModule && (
          <div className="lg:col-span-8 space-y-6">
            {/* Hero Banner */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div
                className="h-2 w-full"
                style={{ backgroundColor: DISCIPLINE_MAP[activeModule.id].color }}
              />
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: `${DISCIPLINE_MAP[activeModule.id].color}18`,
                          color: DISCIPLINE_MAP[activeModule.id].color,
                        }}
                      >
                        {DISCIPLINE_MAP[activeModule.id].component === 'FG'
                          ? 'Formação Geral'
                          : 'Componente Específico'}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> ~{activeModule.estimatedMinutes} min de estudo
                      </span>
                      <span className="text-xs text-slate-500">
                        • {officialCount} oficiais + {ineditaCount} inéditas
                      </span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {activeModule.title}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{activeModule.subtitle}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleModuleCompleted(activeModule.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 cursor-pointer ${
                      isCompleted
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-emerald-500'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {isCompleted ? 'Módulo Estudado' : 'Marcar como Estudado'}
                  </button>
                </div>

                <RichText content={activeModule.overview} className="text-sm" />

                {/* ENADE Weight note */}
                <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/70">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> Como o ENADE cobra este conteúdo
                  </div>
                  <RichText content={activeModule.enadeWeightNote} className="text-sm text-indigo-950 dark:text-indigo-100" />
                </div>

                {/* Quick actions + TOC */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => onPracticeDiscipline(activeModule.id)}
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4" />
                    Praticar {relatedQuestions.length} Questões deste Módulo
                  </button>
                  <button
                    type="button"
                    onClick={() => onFlashcardsDiscipline(activeModule.id)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold transition flex items-center gap-2 cursor-pointer"
                  >
                    <Layers className="w-4 h-4" />
                    Flashcards deste Módulo
                  </button>
                </div>

                {/* Section jump chips */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Tópicos deste guia
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModule.sections.map((sec, idx) => (
                      <a
                        key={sec.id}
                        href={`#sec-${sec.id}`}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-xs font-medium text-slate-700 dark:text-slate-300 transition flex items-center gap-1"
                      >
                        <ChevronRight className="w-3 h-3 text-indigo-500" />
                        {idx + 1}. {sec.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Study Sections */}
            {activeModule.sections.map((sec, idx) => (
              <section
                key={sec.id}
                id={`sec-${sec.id}`}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-sm scroll-mt-6"
              >
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span
                    className="w-7 h-7 rounded-lg text-white font-bold text-xs flex items-center justify-center shrink-0"
                    style={{ backgroundColor: DISCIPLINE_MAP[activeModule.id].color }}
                  >
                    {idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{sec.title}</h3>
                </div>

                <RichText content={sec.content} className="text-[15px]" />

                {/* Key Formulas */}
                {sec.keyFormulas && sec.keyFormulas.length > 0 && (
                  <div className="grid grid-cols-1 gap-3 pt-2">
                    {sec.keyFormulas.map((kf, fi) => (
                      <div
                        key={fi}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5"
                      >
                        <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                          {kf.label}
                        </div>
                        <div className="overflow-x-auto py-1 text-center">
                          <LatexBlock latex={kf.latex} display />
                        </div>
                        {kf.note && <p className="text-xs text-slate-500 dark:text-slate-400">{kf.note}</p>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Code Example */}
                {sec.codeExample && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 text-slate-100">
                    <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200">{sec.codeExample.title}</span>
                      <span className="font-mono uppercase text-indigo-400">{sec.codeExample.language}</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-[13px] leading-relaxed font-mono">
                      <code>{sec.codeExample.code}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}

            {/* INEP Traps */}
            <div className="bg-amber-50/80 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-800/70 p-6 space-y-3">
              <h3 className="text-base font-extrabold text-amber-900 dark:text-amber-200 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Pegadinhas Clássicas do INEP neste Assunto
              </h3>
              <ul className="space-y-2">
                {activeModule.inepTraps.map((trap, ti) => (
                  <li key={ti} className="text-sm text-amber-950 dark:text-amber-100 flex items-start gap-2.5">
                    <span className="font-bold text-amber-600 dark:text-amber-400 shrink-0">•</span>
                    <RichText content={trap} className="text-sm text-amber-950 dark:text-amber-100" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Checklist */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-600" />
                Checklist de Domínio (Antes da Prova)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModule.quickChecklist.map((item, ci) => (
                  <div
                    key={ci}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onToggleModuleCompleted(activeModule.id)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition cursor-pointer"
                >
                  {isCompleted ? '✓ Módulo marcado como estudado' : 'Concluir leitura deste módulo'}
                </button>
                <button
                  type="button"
                  onClick={() => onPracticeDiscipline(activeModule.id)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-4 h-4" /> Resolver questões agora
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
