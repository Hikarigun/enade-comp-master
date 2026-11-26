import React, { useState, useMemo } from 'react';
import { AlertOctagon, Bookmark, Play, CheckCircle2 } from 'lucide-react';
import type { DisciplineId, ObjectiveQuestion, OptionLetter, UserProgress } from '../types/enade';
import { DISCIPLINE_MAP } from '../data/disciplines';
import { QuestionCard } from '../components/QuestionCard';

interface ErrorNotebookPageProps {
  allQuestions: ObjectiveQuestion[];
  progress: UserProgress;
  onRecordAnswer: (qId: string, selected: OptionLetter, correct: boolean) => void;
  onToggleBookmark: (qId: string) => void;
  onOpenModule: (disc: DisciplineId) => void;
  onStartRecoverySimulado: (questionIds: string[], title: string) => void;
}

export const ErrorNotebookPage: React.FC<ErrorNotebookPageProps> = ({
  allQuestions,
  progress,
  onRecordAnswer,
  onToggleBookmark,
  onOpenModule,
  onStartRecoverySimulado,
}) => {
  const [tab, setTab] = useState<'errors' | 'bookmarks'>('errors');
  const [activeReviewId, setActiveReviewId] = useState<string | null>(null);
  const [retrySelection, setRetrySelection] = useState<Record<string, OptionLetter>>({});

  const errorQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      if (q.annulled) return false;
      const ans = progress.answeredQuestions[q.id];
      return ans && !ans.correct && !progress.errorNotebookResolved.includes(q.id);
    });
  }, [allQuestions, progress]);

  const bookmarkedQuestions = useMemo(() => {
    return allQuestions.filter((q) => progress.bookmarkedQuestions.includes(q.id));
  }, [allQuestions, progress.bookmarkedQuestions]);

  const displayed = tab === 'errors' ? errorQuestions : bookmarkedQuestions;

  const groupedByDiscipline = useMemo(() => {
    const map: Record<string, ObjectiveQuestion[]> = {};
    for (const q of displayed) {
      if (!map[q.discipline]) map[q.discipline] = [];
      map[q.discipline].push(q);
    }
    return Object.entries(map).sort((a, b) => b[1].length - a[1].length);
  }, [displayed]);

  const activeQuestion = displayed.find((q) => q.id === activeReviewId) || displayed[0] || null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <AlertOctagon className="w-7 h-7 text-rose-500" />
            Caderno de Erros & Favoritas
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Revisar seus erros é o caminho mais rápido para subir sua nota. Toda questão errada vem automaticamente para cá até você acertá-la!
          </p>
        </div>

        {displayed.length > 0 && (
          <button
            type="button"
            onClick={() =>
              onStartRecoverySimulado(
                displayed.map((q) => q.id),
                tab === 'errors' ? 'Simulado de Recuperação (Meus Erros)' : 'Simulado de Questões Favoritas'
              )
            }
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold transition flex items-center gap-2 self-start cursor-pointer shadow-sm"
          >
            <Play className="w-4 h-4" />
            Refazer {displayed.length} em Simulado
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          type="button"
          onClick={() => {
            setTab('errors');
            setActiveReviewId(null);
          }}
          className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition cursor-pointer ${
            tab === 'errors'
              ? 'bg-rose-600 text-white'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          <AlertOctagon className="w-4 h-4" />
          Erros Pendentes ({errorQuestions.length})
        </button>
        <button
          type="button"
          onClick={() => {
            setTab('bookmarks');
            setActiveReviewId(null);
          }}
          className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition cursor-pointer ${
            tab === 'bookmarks'
              ? 'bg-indigo-600 text-white'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          Questões Favoritas ({bookmarkedQuestions.length})
        </button>
      </div>

      {displayed.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {tab === 'errors' ? 'Nenhum erro pendente!' : 'Nenhuma questão favoritada ainda'}
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            {tab === 'errors'
              ? 'Conforme você fizer simulados e exercícios no Banco de Questões, qualquer questão que você errar aparecerá automaticamente aqui para revisão dirigida.'
              : 'Clique no ícone de bandeira/marcador em qualquer questão para salvá-la aqui e revisar antes da prova.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Grouped sidebar */}
          <div className="lg:col-span-4 space-y-4 max-h-[75vh] overflow-y-auto pr-1">
            {groupedByDiscipline.map(([discId, qs]) => {
              const disc = DISCIPLINE_MAP[discId as DisciplineId];
              return (
                <div key={discId} className="space-y-1.5">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: disc.color }}>
                      {disc.shortName}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{qs.length}</span>
                  </div>
                  {qs.map((q) => {
                    const isSel = activeQuestion?.id === q.id;
                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setActiveReviewId(q.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${
                          isSel
                            ? 'bg-indigo-50 dark:bg-indigo-950/50 border-indigo-400 dark:border-indigo-500'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-slate-900 dark:text-white">
                          {q.source.toUpperCase()} • Q{String(q.number).padStart(2, '0')}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">{q.subtopic}</div>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Active Question Card */}
          <div className="lg:col-span-8">
            {activeQuestion && (
              <QuestionCard
                key={activeQuestion.id}
                question={activeQuestion}
                selectedOption={retrySelection[activeQuestion.id] ?? null}
                onSelectOption={(letter) => {
                  setRetrySelection((prev) => ({ ...prev, [activeQuestion.id]: letter }));
                  const correct = letter === activeQuestion.correctOption;
                  onRecordAnswer(activeQuestion.id, letter, correct);
                }}
                showFeedback={Boolean(retrySelection[activeQuestion.id])}
                isBookmarked={progress.bookmarkedQuestions.includes(activeQuestion.id)}
                onToggleBookmark={() => onToggleBookmark(activeQuestion.id)}
                onOpenModule={onOpenModule}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
