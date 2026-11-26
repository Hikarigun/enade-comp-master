import React, { useState, useMemo, useEffect } from 'react';
import {
  Layers,
  RotateCcw,
  Eye,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  Clock,
  Filter,
} from 'lucide-react';
import { FLASHCARDS } from '../data/flashcards';
import { DISCIPLINES, DISCIPLINE_MAP } from '../data/disciplines';
import type { DisciplineId, FlashcardProgress } from '../types/enade';
import { RichText } from '../components/RichText';

interface FlashcardsPageProps {
  flashcardProgress: Record<string, FlashcardProgress>;
  onReview: (cardId: string, quality: 1 | 3 | 4 | 5) => void;
  initialDiscipline?: DisciplineId | 'all';
}

export const FlashcardsPage: React.FC<FlashcardsPageProps> = ({
  flashcardProgress,
  onReview,
  initialDiscipline = 'all',
}) => {
  const [selectedDisc, setSelectedDisc] = useState<DisciplineId | 'all'>(initialDiscipline);
  const [mode, setMode] = useState<'due' | 'all'>('due');
  const [showBack, setShowBack] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [sessionReviewed, setSessionReviewed] = useState(0);

  useEffect(() => {
    setSelectedDisc(initialDiscipline);
    setSessionIndex(0);
    setShowBack(false);
    setShowHint(false);
  }, [initialDiscipline]);

  const now = Date.now();

  const stats = useMemo(() => {
    const pool = selectedDisc === 'all' ? FLASHCARDS : FLASHCARDS.filter((c) => c.discipline === selectedDisc);
    let due = 0;
    let newCards = 0;
    let mastered = 0;
    for (const c of pool) {
      const p = flashcardProgress[c.id];
      if (!p) {
        newCards++;
        due++;
      } else {
        if (p.nextReview <= now) due++;
        if (p.repetition >= 2 && p.interval >= 6) mastered++;
      }
    }
    return { total: pool.length, due, newCards, mastered };
  }, [selectedDisc, flashcardProgress, now]);

  const deck = useMemo(() => {
    const pool = selectedDisc === 'all' ? FLASHCARDS : FLASHCARDS.filter((c) => c.discipline === selectedDisc);
    if (mode === 'all') return pool;
    return pool.filter((c) => {
      const p = flashcardProgress[c.id];
      return !p || p.nextReview <= now;
    });
  }, [selectedDisc, mode, flashcardProgress, now]);

  const currentCard = deck[sessionIndex % Math.max(1, deck.length)];

  const handleRate = (quality: 1 | 3 | 4 | 5) => {
    if (!currentCard) return;
    onReview(currentCard.id, quality);
    setSessionReviewed((r) => r + 1);
    setShowBack(false);
    setShowHint(false);
    if (mode === 'all') {
      setSessionIndex((i) => (i + 1) % Math.max(1, deck.length));
    } else {
      setSessionIndex(0);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space' && !showBack && currentCard) {
        e.preventDefault();
        setShowBack(true);
      } else if (showBack && currentCard) {
        if (e.key === '1') handleRate(1);
        if (e.key === '2') handleRate(3);
        if (e.key === '3') handleRate(4);
        if (e.key === '4') handleRate(5);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Layers className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            Flashcards Inteligentes (Revisão Espaçada SM-2)
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Memorize definições, fórmulas, protocolos e pegadinhas do INEP no momento ideal de revisão.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              setMode('due');
              setSessionIndex(0);
              setShowBack(false);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              mode === 'due'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
            }`}
          >
            Fila de Hoje ({stats.due})
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('all');
              setSessionIndex(0);
              setShowBack(false);
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              mode === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
            }`}
          >
            Todos ({stats.total})
          </button>
        </div>
      </div>

      {/* KPI bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">Para Revisar Hoje</span>
          <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-0.5">{stats.due}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">Cartões Novos</span>
          <p className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 mt-0.5">{stats.newCards}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">Dominados</span>
          <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">{stats.mastered}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
          <span className="text-xs text-slate-500">Revisados na Sessão</span>
          <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">{sessionReviewed}</p>
        </div>
      </div>

      {/* Discipline Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <Filter className="w-4 h-4 text-slate-400 shrink-0" />
        <button
          type="button"
          onClick={() => {
            setSelectedDisc('all');
            setSessionIndex(0);
            setShowBack(false);
          }}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition cursor-pointer ${
            selectedDisc === 'all'
              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
          }`}
        >
          Todas
        </button>
        {DISCIPLINES.map((d) => {
          const count = FLASHCARDS.filter((c) => c.discipline === d.id).length;
          if (count === 0) return null;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => {
                setSelectedDisc(d.id);
                setSessionIndex(0);
                setShowBack(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition cursor-pointer ${
                selectedDisc === d.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {d.shortName} ({count})
            </button>
          );
        })}
      </div>

      {/* Card Arena */}
      {deck.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-emerald-200 dark:border-emerald-800 p-10 text-center space-y-4">
          <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Parabéns! Você zerou sua fila de revisão de hoje!
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Todos os flashcards desta disciplina estão em dia no seu cronograma SM-2. Você pode praticar livremente no modo "Todos" ou partir para um simulado.
          </p>
          <button
            type="button"
            onClick={() => {
              setMode('all');
              setSessionIndex(0);
            }}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> Revisar todos mesmo assim
          </button>
        </div>
      ) : currentCard ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden">
          {/* Card top bar */}
          <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: `${DISCIPLINE_MAP[currentCard.discipline].color}18`,
                  color: DISCIPLINE_MAP[currentCard.discipline].color,
                }}
              >
                {DISCIPLINE_MAP[currentCard.discipline].shortName}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                {currentCard.tag}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              {mode === 'due' ? `${deck.length} restante(s)` : `${(sessionIndex % deck.length) + 1} / ${deck.length}`}
            </span>
          </div>

          {/* Front */}
          <div className="p-8 min-h-[220px] flex flex-col justify-center">
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-500 mb-3">
              Pergunta / Conceito
            </span>
            <div className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white leading-relaxed">
              <RichText content={currentCard.front} className="text-lg sm:text-xl text-slate-900 dark:text-white" />
            </div>

            {currentCard.hint && !showBack && (
              <div className="mt-5">
                {showHint ? (
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{currentCard.hint}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowHint(true)}
                    className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5" /> Mostrar dica
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Back / Answer */}
          {showBack ? (
            <div className="px-8 py-6 bg-indigo-50/50 dark:bg-indigo-950/25 border-t border-indigo-200/70 dark:border-indigo-800/50 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 block">
                  Resposta & Explicação
                </span>
                <RichText content={currentCard.back} className="text-base" />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 text-center">
                  Como foi sua lembrança? (Atalhos: teclas 1, 2, 3, 4)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleRate(1)}
                    className="py-3 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 font-bold text-sm transition cursor-pointer flex flex-col items-center"
                  >
                    <span>1 • Errei</span>
                    <span className="text-[11px] font-normal opacity-80 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" /> 10 min
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRate(3)}
                    className="py-3 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/60 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 font-bold text-sm transition cursor-pointer flex flex-col items-center"
                  >
                    <span>2 • Difícil</span>
                    <span className="text-[11px] font-normal opacity-80 mt-0.5">1–3 dias</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRate(4)}
                    className="py-3 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-bold text-sm transition cursor-pointer flex flex-col items-center"
                  >
                    <span>3 • Bom</span>
                    <span className="text-[11px] font-normal opacity-80 mt-0.5">1–6+ dias</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRate(5)}
                    className="py-3 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-bold text-sm transition cursor-pointer flex flex-col items-center"
                  >
                    <span>4 • Fácil</span>
                    <span className="text-[11px] font-normal opacity-80 flex items-center gap-1 mt-0.5">
                      <Sparkles className="w-3 h-3" /> 3+ dias
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-5 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800 flex justify-center">
              <button
                type="button"
                onClick={() => setShowBack(true)}
                className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" /> Mostrar Resposta (Espaço)
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
