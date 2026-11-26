import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Database,
  Play,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';
import type { DisciplineId, ObjectiveQuestion, OptionLetter, UserProgress } from '../types/enade';
import { DISCIPLINES } from '../data/disciplines';
import { QuestionCard } from '../components/QuestionCard';

interface QuestionBankPageProps {
  allQuestions: ObjectiveQuestion[];
  progress: UserProgress;
  onRecordAnswer: (qId: string, selected: OptionLetter, correct: boolean) => void;
  onToggleBookmark: (qId: string) => void;
  onOpenModule: (disc: DisciplineId) => void;
  onLaunchCustomSimulado: (questionIds: string[], title: string) => void;
  initialDiscipline?: DisciplineId | 'all';
}

export const QuestionBankPage: React.FC<QuestionBankPageProps> = ({
  allQuestions,
  progress,
  onRecordAnswer,
  onToggleBookmark,
  onOpenModule,
  onLaunchCustomSimulado,
  initialDiscipline = 'all',
}) => {
  const [search, setSearch] = useState('');
  const [source, setSource] = useState<string>('all');
  const [component, setComponent] = useState<'all' | 'FG' | 'CE'>('all');
  const [discipline, setDiscipline] = useState<DisciplineId | 'all'>(initialDiscipline);
  const [difficulty, setDifficulty] = useState<string>('all');
  const [style, setStyle] = useState<string>('all');
  const [status, setStatus] = useState<'all' | 'unanswered' | 'wrong' | 'correct' | 'bookmarked'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionAnswers, setSessionAnswers] = useState<Record<string, OptionLetter>>({});
  const [revealAll, setRevealAll] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setDiscipline(initialDiscipline);
    setCurrentIndex(0);
  }, [initialDiscipline]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allQuestions.filter((item) => {
      if (source !== 'all') {
        if (source === 'oficiais' && !item.source.startsWith('enade-')) return false;
        else if (source === 'ineditas' && !item.source.startsWith('inedita-')) return false;
        else if (source !== 'oficiais' && source !== 'ineditas' && item.source !== source) return false;
      }
      if (component !== 'all' && item.component !== component) return false;
      if (discipline !== 'all' && item.discipline !== discipline) return false;
      if (difficulty !== 'all' && item.difficulty !== difficulty) return false;
      if (style !== 'all' && item.questionStyle !== style) return false;

      const ans = progress.answeredQuestions[item.id];
      if (status === 'unanswered' && ans) return false;
      if (status === 'wrong' && (!ans || ans.correct)) return false;
      if (status === 'correct' && (!ans || !ans.correct)) return false;
      if (status === 'bookmarked' && !progress.bookmarkedQuestions.includes(item.id)) return false;

      if (q) {
        const hay = `${item.context} ${item.command} ${item.subtopic} ${item.keyConcept} ${item.options
          .map((o) => o.text)
          .join(' ')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [allQuestions, source, component, discipline, difficulty, style, status, search, progress]);

  const safeIndex = Math.min(currentIndex, Math.max(0, filtered.length - 1));
  const currentQuestion = filtered[safeIndex];

  const resetFilters = () => {
    setSearch('');
    setSource('all');
    setComponent('all');
    setDiscipline('all');
    setDifficulty('all');
    setStyle('all');
    setStatus('all');
    setCurrentIndex(0);
  };

  const handleSelect = (q: ObjectiveQuestion, letter: OptionLetter) => {
    setSessionAnswers((prev) => ({ ...prev, [q.id]: letter }));
    setRevealAll((prev) => ({ ...prev, [q.id]: true }));
    if (!q.annulled) {
      onRecordAnswer(q.id, letter, letter === q.correctOption);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Database className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            Banco Completo de Questões Comentadas
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {allQuestions.length} questões objetivas (ENADEs 2017, 2019, 2023 + 2 Simulados Inéditos), todas com resolução passo a passo.
          </p>
        </div>

        {filtered.length > 0 && (
          <button
            type="button"
            onClick={() =>
              onLaunchCustomSimulado(
                filtered.map((f) => f.id),
                `Simulado Personalizado (${filtered.length} questões)`
              )
            }
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center gap-2 self-start cursor-pointer shadow-sm"
          >
            <Play className="w-4 h-4" /> Fazer Simulado com Filtro ({filtered.length})
          </button>
        )}
      </div>

      {/* Filters panel */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentIndex(0);
              }}
              placeholder="Buscar no enunciado, código, tópico ou conceito..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Limpar Filtros
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <select
            value={source}
            onChange={(e) => {
              setSource(e.target.value);
              setCurrentIndex(0);
            }}
            className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium"
          >
            <option value="all">Todas as Origens</option>
            <option value="oficiais">Apenas Oficiais (108)</option>
            <option value="ineditas">Apenas Inéditas (76)</option>
            <option value="enade-2023">ENADE 2023</option>
            <option value="enade-2019">ENADE 2019</option>
            <option value="enade-2017">ENADE 2017</option>
            <option value="inedita-1">Inédita • Simulado 1</option>
            <option value="inedita-2">Inédita • Simulado 2</option>
          </select>

          <select
            value={component}
            onChange={(e) => {
              setComponent(e.target.value as 'all' | 'FG' | 'CE');
              setCurrentIndex(0);
            }}
            className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium"
          >
            <option value="all">FG + CE</option>
            <option value="CE">Componente Específico</option>
            <option value="FG">Formação Geral</option>
          </select>

          <select
            value={discipline}
            onChange={(e) => {
              setDiscipline(e.target.value as DisciplineId | 'all');
              setCurrentIndex(0);
            }}
            className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium"
          >
            <option value="all">Todas as Disciplinas</option>
            {DISCIPLINES.map((d) => (
              <option key={d.id} value={d.id}>
                {d.shortName}
              </option>
            ))}
          </select>

          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
              setCurrentIndex(0);
            }}
            className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium"
          >
            <option value="all">Todas Dificuldades</option>
            <option value="facil">Fácil</option>
            <option value="medio">Médio</option>
            <option value="dificil">Difícil</option>
          </select>

          <select
            value={style}
            onChange={(e) => {
              setStyle(e.target.value);
              setCurrentIndex(0);
            }}
            className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium"
          >
            <option value="all">Todos os Estilos</option>
            <option value="multipla-simples">Múltipla Simples</option>
            <option value="afirmativas">Afirmativas (I, II, III...)</option>
            <option value="assercao-razao">Asserção-Razão (PORQUE)</option>
            <option value="interpretacao-codigo">Código / Algoritmo</option>
            <option value="interpretacao-grafico-circuito">Gráfico / Circuito</option>
          </select>

          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as typeof status);
              setCurrentIndex(0);
            }}
            className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium"
          >
            <option value="all">Qualquer Status</option>
            <option value="unanswered">Nunca Respondidas</option>
            <option value="wrong">Erradas</option>
            <option value="correct">Acertadas</option>
            <option value="bookmarked">Favoritadas</option>
          </select>
        </div>
      </div>

      {/* Navigation bar & Question Card */}
      {filtered.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center text-slate-500">
          Nenhuma questão corresponde aos filtros selecionados.
        </div>
      ) : (
        <div className="space-y-4">
          {/* Pager */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Exibindo questão <strong className="text-indigo-600 dark:text-indigo-400">{safeIndex + 1}</strong> de{' '}
              <strong>{filtered.length}</strong> encontradas
            </span>

            <div className="flex items-center gap-2">
              {currentQuestion && !revealAll[currentQuestion.id] && (
                <button
                  type="button"
                  onClick={() => setRevealAll((p) => ({ ...p, [currentQuestion.id]: true }))}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
                >
                  Ver Gabarito
                </button>
              )}
              <button
                type="button"
                disabled={safeIndex === 0}
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                disabled={safeIndex >= filtered.length - 1}
                onClick={() => setCurrentIndex((i) => Math.min(filtered.length - 1, i + 1))}
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {currentQuestion && (
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              indexLabel={`#${safeIndex + 1}`}
              selectedOption={
                sessionAnswers[currentQuestion.id] ??
                progress.answeredQuestions[currentQuestion.id]?.selected ??
                null
              }
              onSelectOption={(letter) => handleSelect(currentQuestion, letter)}
              showFeedback={
                Boolean(revealAll[currentQuestion.id]) ||
                Boolean(progress.answeredQuestions[currentQuestion.id])
              }
              isBookmarked={progress.bookmarkedQuestions.includes(currentQuestion.id)}
              onToggleBookmark={() => onToggleBookmark(currentQuestion.id)}
              onOpenModule={onOpenModule}
            />
          )}

          {/* Bottom quick nav */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              disabled={safeIndex === 0}
              onClick={() => {
                setCurrentIndex((i) => Math.max(0, i - 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold disabled:opacity-40 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>
            <button
              type="button"
              disabled={safeIndex >= filtered.length - 1}
              onClick={() => {
                setCurrentIndex((i) => Math.min(filtered.length - 1, i + 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold disabled:opacity-40 flex items-center gap-1.5 cursor-pointer"
            >
              Próxima <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
