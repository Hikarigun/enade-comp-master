import React, { useState } from 'react';
import {
  Bookmark,
  CheckCircle2,
  XCircle,
  Flag,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  ZoomIn,
  X,
  Strikethrough,
} from 'lucide-react';
import type { DisciplineId, ObjectiveQuestion, OptionLetter } from '../types/enade';
import { DISCIPLINE_MAP } from '../data/disciplines';
import { RichText, InlineRichText } from './RichText';
import { assetUrl } from '../utils/assetUrl';

interface QuestionCardProps {
  question: ObjectiveQuestion;
  selectedOption: OptionLetter | null;
  onSelectOption?: (letter: OptionLetter) => void;
  showFeedback: boolean;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
  isFlagged?: boolean;
  onToggleFlag?: () => void;
  onOpenModule?: (discipline: DisciplineId) => void;
  disabled?: boolean;
  indexLabel?: string;
}

const SOURCE_LABELS: Record<string, string> = {
  'enade-2017': 'ENADE 2017',
  'enade-2019': 'ENADE 2019',
  'enade-2023': 'ENADE 2023',
  'inedita-1': 'Inédita • Simulado 1',
  'inedita-2': 'Inédita • Simulado 2',
};

const STYLE_LABELS: Record<string, string> = {
  'multipla-simples': 'Múltipla Escolha',
  afirmativas: 'Análise de Afirmativas',
  'assercao-razao': 'Asserção-Razão',
  'interpretacao-codigo': 'Código / Algoritmo',
  'interpretacao-grafico-circuito': 'Gráfico / Circuito / Diagrama',
};

const DIFFICULTY_STYLES: Record<string, { label: string; cls: string }> = {
  facil: { label: 'Fácil', cls: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800' },
  medio: { label: 'Médio', cls: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800' },
  dificil: { label: 'Difícil', cls: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800' },
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  showFeedback,
  isBookmarked = false,
  onToggleBookmark,
  isFlagged = false,
  onToggleFlag,
  onOpenModule,
  disabled = false,
  indexLabel,
}) => {
  const [eliminated, setEliminated] = useState<OptionLetter[]>([]);
  const [showOptionDetails, setShowOptionDetails] = useState(true);
  const [lightboxSrc, setLightboxSrc] = useState<{ src: string; alt: string } | null>(null);

  const disc = DISCIPLINE_MAP[question.discipline];
  const diff = DIFFICULTY_STYLES[question.difficulty] || DIFFICULTY_STYLES.medio;

  const toggleEliminate = (e: React.MouseEvent, letter: OptionLetter) => {
    e.stopPropagation();
    setEliminated((prev) => (prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]));
  };

  const isCorrectSelection =
    !question.annulled && selectedOption !== null && selectedOption === question.correctOption;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      {/* Header Badges */}
      <div className="px-5 py-3.5 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {indexLabel && (
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs">
              {indexLabel}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-semibold text-xs">
            {SOURCE_LABELS[question.source] || question.source} • Q{String(question.number).padStart(2, '0')}
          </span>
          <span
            className={`px-2 py-1 rounded-lg text-xs font-semibold border ${
              question.component === 'FG'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800'
                : 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800'
            }`}
          >
            {question.component === 'FG' ? 'Formação Geral' : 'Componente Específico'}
          </span>
          {disc && (
            <span
              className="px-2.5 py-1 rounded-lg text-xs font-medium border"
              style={{
                backgroundColor: `${disc.color}14`,
                color: disc.color,
                borderColor: `${disc.color}38`,
              }}
            >
              {disc.shortName}
            </span>
          )}
          <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${diff.cls}`}>
            {diff.label}
          </span>
          <span className="px-2 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
            {STYLE_LABELS[question.questionStyle] || question.questionStyle}
          </span>
          {question.annulled && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 border border-amber-300 dark:border-amber-700 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" /> Anulada pelo INEP
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {onToggleFlag && (
            <button
              type="button"
              onClick={onToggleFlag}
              title="Marcar para revisão"
              className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                isFlagged
                  ? 'bg-amber-50 border-amber-300 text-amber-700 dark:bg-amber-950/60 dark:border-amber-700 dark:text-amber-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-amber-600 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Flag className="w-3.5 h-3.5" fill={isFlagged ? 'currentColor' : 'none'} />
              <span className="hidden sm:inline">{isFlagged ? 'Marcada' : 'Revisar'}</span>
            </button>
          )}
          {onToggleBookmark && (
            <button
              type="button"
              onClick={onToggleBookmark}
              title="Salvar nos favoritos"
              className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                isBookmarked
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-700 dark:text-indigo-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
          )}
        </div>
      </div>

      {/* Subtopic strip */}
      <div className="px-5 py-2 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/70 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>
          <strong className="text-slate-700 dark:text-slate-300">Tópico:</strong> {question.subtopic}
        </span>
        {onOpenModule && (
          <button
            type="button"
            onClick={() => onOpenModule(question.discipline)}
            className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-medium cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" /> Revisar teoria
          </button>
        )}
      </div>

      {/* Context / Body */}
      <div className="p-5 sm:p-6 space-y-5">
        <RichText content={question.context} className="text-[15px]" />

        {/* Question Figures */}
        {question.images && question.images.length > 0 && (
          <div className="space-y-4 my-4">
            {question.images.map((img, idx) => (
              <figure key={idx} className="question-figure relative group">
                <div className="flex justify-center">
                  <img
                    src={assetUrl(img.src)}
                    alt={img.alt}
                    onClick={() => setLightboxSrc({ src: assetUrl(img.src), alt: img.alt })}
                    className="max-h-[460px] w-auto object-contain cursor-zoom-in rounded"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxSrc({ src: assetUrl(img.src), alt: img.alt })}
                  className="absolute top-3 right-3 px-2.5 py-1.5 rounded-lg bg-slate-900/75 text-white text-xs font-medium opacity-80 group-hover:opacity-100 transition flex items-center gap-1 cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" /> Ampliar
                </button>
                {img.caption && (
                  <figcaption className="mt-2 text-center text-xs text-slate-600">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {question.reference && (
          <p className="text-xs text-slate-500 dark:text-slate-400 text-right italic">
            {question.reference}
          </p>
        )}

        {/* Command */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="font-semibold text-slate-900 dark:text-slate-100 text-[15px]">
            <RichText content={question.command} />
          </div>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {question.options.map((opt) => {
            const isSelected = selectedOption === opt.letter;
            const isCorrect = !question.annulled && question.correctOption === opt.letter;
            const isEliminated = eliminated.includes(opt.letter);

            let cardStyle =
              'border-slate-200 dark:border-slate-700/80 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20';
            let badgeStyle =
              'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600';

            if (showFeedback) {
              if (isCorrect) {
                cardStyle =
                  'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 dark:border-emerald-500/80 ring-1 ring-emerald-500/30';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrect && !question.annulled) {
                cardStyle =
                  'border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 dark:border-rose-500/80 ring-1 ring-rose-500/30';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                cardStyle = 'border-slate-200/80 dark:border-slate-800 opacity-75';
              }
            } else if (isSelected) {
              cardStyle =
                'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 dark:border-indigo-400 ring-1 ring-indigo-500/30';
              badgeStyle = 'bg-indigo-600 text-white border-indigo-600';
            }

            return (
              <div
                key={opt.letter}
                onClick={() => !disabled && onSelectOption?.(opt.letter)}
                className={`group relative rounded-xl border p-3.5 transition-all flex items-start gap-3 ${
                  disabled ? 'cursor-default' : 'cursor-pointer'
                } ${cardStyle} ${isEliminated && !showFeedback ? 'opacity-45' : ''}`}
              >
                <span
                  className={`w-7 h-7 rounded-lg border font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 transition-colors ${badgeStyle}`}
                >
                  {opt.letter}
                </span>

                <div className="flex-1 min-w-0 space-y-2">
                  {opt.text && (
                    <div
                      className={`text-sm leading-relaxed text-slate-800 dark:text-slate-200 ${
                        isEliminated && !showFeedback ? 'line-through' : ''
                      }`}
                    >
                      <InlineRichText content={opt.text} />
                    </div>
                  )}
                  {opt.image && (
                    <div className="question-figure inline-block max-w-full">
                      <img
                        src={assetUrl(opt.image)}
                        alt={`Alternativa ${opt.letter}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxSrc({ src: assetUrl(opt.image!), alt: `Alternativa ${opt.letter}` });
                        }}
                        className="max-h-60 w-auto object-contain cursor-zoom-in"
                      />
                    </div>
                  )}
                </div>

                {/* Right indicator / eliminate button */}
                <div className="shrink-0 flex items-center gap-1.5">
                  {showFeedback && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  )}
                  {showFeedback && isSelected && !isCorrect && !question.annulled && (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  )}
                  {!showFeedback && !disabled && (
                    <button
                      type="button"
                      onClick={(e) => toggleEliminate(e, opt.letter)}
                      title={isEliminated ? 'Restaurar alternativa' : 'Riscar alternativa (eliminar)'}
                      className={`p-1.5 rounded-lg transition cursor-pointer ${
                        isEliminated
                          ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                          : 'opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Strikethrough className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Feedback & Detailed Resolution */}
        {showFeedback && (
          <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-50/70 dark:bg-slate-950/60">
            {/* Banner */}
            <div
              className={`px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 border-b ${
                question.annulled
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                  : isCorrectSelection
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                  : selectedOption
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  : 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm">
                {question.annulled ? (
                  <>
                    <AlertTriangle className="w-5 h-5" />
                    Questão oficialmente ANULADA pelo INEP (pontuada para todos os candidatos)
                  </>
                ) : isCorrectSelection ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Resposta Correta! Gabarito oficial: Alternativa {question.correctOption}
                  </>
                ) : selectedOption ? (
                  <>
                    <XCircle className="w-5 h-5" />
                    Você marcou {selectedOption}. Gabarito oficial: Alternativa {question.correctOption}
                  </>
                ) : (
                  <>
                    <Lightbulb className="w-5 h-5" />
                    Gabarito oficial: Alternativa {question.correctOption}
                  </>
                )}
              </div>
            </div>

            <div className="p-5 space-y-4">
              {question.annulled && question.annulledNote && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-sm text-amber-900 dark:text-amber-200">
                  <strong>Nota sobre a anulação:</strong> {question.annulledNote}
                </div>
              )}

              {/* Key concept */}
              <div className="p-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/70 flex gap-3 items-start">
                <Lightbulb className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-sm text-indigo-950 dark:text-indigo-100">
                  <span className="font-bold block text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-0.5">
                    Conceito-Chave Cobrado
                  </span>
                  <InlineRichText content={question.keyConcept} />
                </div>
              </div>

              {/* Full step-by-step explanation */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Resolução Comentada Passo a Passo
                </h4>
                <RichText content={question.explanation} className="text-sm" />
              </div>

              {/* Per-option analysis */}
              {question.optionAnalysis && Object.keys(question.optionAnalysis).length > 0 && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setShowOptionDetails((v) => !v)}
                    className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 py-1 cursor-pointer"
                  >
                    <span>Análise de cada alternativa (A–E)</span>
                    {showOptionDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {showOptionDetails && (
                    <div className="mt-2.5 space-y-2">
                      {(['A', 'B', 'C', 'D', 'E'] as OptionLetter[]).map((letter) => {
                        const note = question.optionAnalysis?.[letter];
                        if (!note) return null;
                        const isRight = letter === question.correctOption;
                        return (
                          <div
                            key={letter}
                            className={`text-xs sm:text-sm p-2.5 rounded-lg border flex gap-2.5 items-start ${
                              isRight
                                ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800'
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                            }`}
                          >
                            <span
                              className={`font-bold px-1.5 py-0.5 rounded text-xs shrink-0 ${
                                isRight
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              {letter}
                            </span>
                            <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              <InlineRichText content={note} />
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
        )}
      </div>

      {/* Image Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] bg-white rounded-2xl p-4 shadow-2xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxSrc.src}
              alt={lightboxSrc.alt}
              className="max-w-full max-h-[82vh] object-contain mx-auto"
            />
            <p className="text-center text-xs text-slate-600 mt-2">{lightboxSrc.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};
