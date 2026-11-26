import React, { useState, useMemo, useEffect } from 'react';
import {
  FileEdit,
  CheckCircle2,
  Eye,
  EyeOff,
  AlertTriangle,
  Sparkles,
  Code2,
  Award,
  ZoomIn,
  X,
  RotateCcw,
} from 'lucide-react';
import type { DiscursiveAttempt, DiscursiveQuestion } from '../types/enade';
import { DISCIPLINE_MAP } from '../data/disciplines';
import { RichText, InlineRichText } from '../components/RichText';
import { assetUrl } from '../utils/assetUrl';

interface DiscursiveLabPageProps {
  questions: DiscursiveQuestion[];
  attempts: Record<string, DiscursiveAttempt>;
  onSaveAttempt: (attempt: DiscursiveAttempt) => void;
  initialQuestionId?: string | null;
}

const SOURCE_LABELS: Record<string, string> = {
  'enade-2017': 'ENADE 2017',
  'enade-2019': 'ENADE 2019',
  'enade-2023': 'ENADE 2023',
  inedita: 'Inédita (Padrão ENADE)',
};

export const DiscursiveLabPage: React.FC<DiscursiveLabPageProps> = ({
  questions,
  attempts,
  onSaveAttempt,
  initialQuestionId = null,
}) => {
  const [sourceFilter, setSourceFilter] = useState<string>('all');
  const [compFilter, setCompFilter] = useState<'all' | 'FG' | 'CE'>('all');
  const [selectedId, setSelectedId] = useState<string>(initialQuestionId || questions[0]?.id || '');

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (sourceFilter !== 'all' && q.source !== sourceFilter) return false;
      if (compFilter !== 'all' && q.component !== compFilter) return false;
      return true;
    });
  }, [questions, sourceFilter, compFilter]);

  const currentQuestion = useMemo(() => {
    return (
      filteredQuestions.find((q) => q.id === selectedId) ||
      questions.find((q) => q.id === selectedId) ||
      filteredQuestions[0] ||
      questions[0]
    );
  }, [filteredQuestions, questions, selectedId]);

  const savedAttempt = currentQuestion ? attempts[currentQuestion.id] : undefined;

  const [draft, setDraft] = useState(savedAttempt?.text || '');
  const [checkedCriteria, setCheckedCriteria] = useState<string[]>(savedAttempt?.checkedCriteriaIds || []);
  const [showOfficial, setShowOfficial] = useState(Boolean(savedAttempt && savedAttempt.checkedCriteriaIds.length > 0));
  const [lightboxSrc, setLightboxSrc] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (initialQuestionId) setSelectedId(initialQuestionId);
  }, [initialQuestionId]);

  useEffect(() => {
    if (!currentQuestion) return;
    const prev = attempts[currentQuestion.id];
    setDraft(prev?.text || '');
    setCheckedCriteria(prev?.checkedCriteriaIds || []);
    setShowOfficial(Boolean(prev && prev.checkedCriteriaIds.length > 0));
  }, [currentQuestion?.id]);

  // Estimate ENADE sheet lines (~90 chars per wrapped line or explicit newlines)
  const estimatedLines = useMemo(() => {
    if (!draft.trim()) return 0;
    const rawLines = draft.split('\n');
    const charsPerLine = currentQuestion?.isCodeQuestion ? 78 : 92;
    return rawLines.reduce((acc, line) => acc + Math.max(1, Math.ceil(line.length / charsPerLine)), 0);
  }, [draft, currentQuestion?.isCodeQuestion]);

  const currentScore = useMemo(() => {
    if (!currentQuestion) return 0;
    return currentQuestion.rubricCriteria
      .filter((c) => checkedCriteria.includes(c.id))
      .reduce((acc, c) => acc + c.maxPoints, 0);
  }, [currentQuestion, checkedCriteria]);

  const handleToggleCriterion = (critId: string) => {
    if (!currentQuestion) return;
    const next = checkedCriteria.includes(critId)
      ? checkedCriteria.filter((id) => id !== critId)
      : [...checkedCriteria, critId];
    setCheckedCriteria(next);
    const nextScore = currentQuestion.rubricCriteria
      .filter((c) => next.includes(c.id))
      .reduce((acc, c) => acc + c.maxPoints, 0);
    onSaveAttempt({
      questionId: currentQuestion.id,
      text: draft,
      checkedCriteriaIds: next,
      score: Number(nextScore.toFixed(1)),
      updatedAt: Date.now(),
    });
  };

  const handleSaveDraft = (newText: string) => {
    setDraft(newText);
    if (!currentQuestion) return;
    onSaveAttempt({
      questionId: currentQuestion.id,
      text: newText,
      checkedCriteriaIds: checkedCriteria,
      score: Number(currentScore.toFixed(1)),
      updatedAt: Date.now(),
    });
  };

  const practicedCount = Object.values(attempts).filter((a) => a.text.trim().length > 10 || a.checkedCriteriaIds.length > 0).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
            <FileEdit className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            Laboratório de Questões Discursivas
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Treine com o limite real de 15 linhas do INEP, compare com o Padrão de Resposta Oficial e calcule sua nota na rubrica.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
          <Award className="w-4 h-4 text-emerald-500" />
          <span>
            Praticadas: <strong className="text-slate-900 dark:text-white">{practicedCount}</strong> / {questions.length}
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        {['all', 'enade-2023', 'enade-2019', 'enade-2017', 'inedita'].map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => setSourceFilter(src)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              sourceFilter === src
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {src === 'all' ? 'Todas as Provas' : SOURCE_LABELS[src]}
          </button>
        ))}
        <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block" />
        {(['all', 'CE', 'FG'] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCompFilter(c)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              compFilter === c
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {c === 'all' ? 'FG + CE' : c === 'FG' ? 'Formação Geral' : 'Componente Específico'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List */}
        <div className="lg:col-span-4 space-y-2 max-h-[75vh] overflow-y-auto pr-1">
          {filteredQuestions.map((q) => {
            const att = attempts[q.id];
            const isSelected = currentQuestion?.id === q.id;
            const disc = DISCIPLINE_MAP[q.discipline];
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setSelectedId(q.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/50 border-indigo-400 dark:border-indigo-500 ring-1 ring-indigo-500/30'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
                    {SOURCE_LABELS[q.source]} • D{String(q.number).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        q.component === 'FG'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                      }`}
                    >
                      {q.component}
                    </span>
                    {att && (att.checkedCriteriaIds.length > 0 || att.text.trim().length > 10) && (
                      <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold">
                        {att.score.toFixed(1)}/10
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">{q.subtopic}</p>
                <div className="mt-1.5 flex items-center gap-2 text-[11px] text-slate-500">
                  <span style={{ color: disc.color }} className="font-medium">
                    {disc.shortName}
                  </span>
                  {q.isCodeQuestion && (
                    <span className="inline-flex items-center gap-0.5 text-slate-500">
                      <Code2 className="w-3 h-3" /> Código C
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Workspace */}
        {currentQuestion && (
          <div className="lg:col-span-8 space-y-5">
            {/* Prompt Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {SOURCE_LABELS[currentQuestion.source]} — Questão Discursiva {String(currentQuestion.number).padStart(2, '0')}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    {currentQuestion.subtopic}
                  </h2>
                </div>
                <span className="px-3 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
                  Valor: 10,0 pontos • Máx. {currentQuestion.maxLines} linhas
                </span>
              </div>

              <div className="p-6 space-y-4">
                <RichText content={currentQuestion.context} className="text-[15px]" />

                {currentQuestion.images && currentQuestion.images.length > 0 && (
                  <div className="space-y-3 my-3">
                    {currentQuestion.images.map((img, i) => (
                      <figure key={i} className="question-figure relative group">
                        <div className="flex justify-center">
                          <img
                            src={assetUrl(img.src)}
                            alt={img.alt}
                            onClick={() => setLightboxSrc({ ...img, src: assetUrl(img.src) })}
                            className="max-h-[420px] w-auto object-contain cursor-zoom-in"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => setLightboxSrc({ ...img, src: assetUrl(img.src) })}
                          className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900/75 text-white text-xs flex items-center gap-1 cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5" /> Ampliar
                        </button>
                      </figure>
                    ))}
                  </div>
                )}

                {currentQuestion.reference && (
                  <p className="text-xs text-slate-500 text-right italic">{currentQuestion.reference}</p>
                )}

                {/* Prompts a, b, c... */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    O que a questão exige:
                  </p>
                  {currentQuestion.prompts.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/70 dark:border-indigo-800/50 flex items-start justify-between gap-3"
                    >
                      <div className="text-sm text-slate-800 dark:text-slate-200">
                        <strong className="text-indigo-700 dark:text-indigo-300 mr-1.5">{p.label}</strong>
                        <InlineRichText content={p.text} />
                      </div>
                      <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-700 text-[11px] font-bold text-indigo-700 dark:text-indigo-300 shrink-0">
                        {p.points.toFixed(1)} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Editor (15-line ENADE sheet simulator) */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 space-y-3 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    Sua Folha de Resposta (Simulador 15 Linhas)
                  </h3>
                  {currentQuestion.isCodeQuestion && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                      Modo Código C
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 ${
                      estimatedLines > currentQuestion.maxLines
                        ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                        : estimatedLines >= currentQuestion.maxLines - 2
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                        : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                    }`}
                  >
                    {estimatedLines > currentQuestion.maxLines && <AlertTriangle className="w-3.5 h-3.5" />}
                    {estimatedLines} / {currentQuestion.maxLines} linhas estimadas
                  </span>
                  {draft && (
                    <button
                      type="button"
                      onClick={() => handleSaveDraft('')}
                      className="text-xs text-slate-400 hover:text-rose-500 flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Limpar
                    </button>
                  )}
                </div>
              </div>

              <textarea
                value={draft}
                onChange={(e) => handleSaveDraft(e.target.value)}
                rows={12}
                placeholder={
                  currentQuestion.isCodeQuestion
                    ? 'Escreva seu código em C ou solução aqui... (Fique atento ao limite de 15 linhas da folha oficial!)'
                    : 'Redija sua resposta objetiva cobrindo cada item (a, b...) dentro do limite de 15 linhas...'
                }
                className={`w-full rounded-xl p-4 bg-slate-50 dark:bg-slate-950 border text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  currentQuestion.isCodeQuestion ? 'font-mono text-[13px]' : ''
                } ${
                  estimatedLines > currentQuestion.maxLines
                    ? 'border-rose-400 dark:border-rose-600'
                    : 'border-slate-200 dark:border-slate-700'
                }`}
              />

              {estimatedLines > currentQuestion.maxLines && (
                <p className="text-xs text-rose-600 dark:text-rose-400 font-medium flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  Atenção: no ENADE real, qualquer texto que ultrapasse a 15ª linha do cartão-resposta é rigorosamente desconsiderado! Tente sintetizar.
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <span className="text-xs text-slate-400">Salvo automaticamente no seu navegador.</span>
                <button
                  type="button"
                  onClick={() => setShowOfficial((v) => !v)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition flex items-center gap-2 cursor-pointer"
                >
                  {showOfficial ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showOfficial ? 'Ocultar Padrão de Resposta' : 'Revelar Padrão Oficial & Autoavaliar'}
                </button>
              </div>
            </div>

            {/* Official Answer + Interactive Rubric */}
            {showOfficial && (
              <div className="space-y-5">
                {/* Official Answer */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-emerald-200 dark:border-emerald-800/70 overflow-hidden shadow-sm">
                  <div className="px-5 py-3.5 bg-emerald-50 dark:bg-emerald-950/40 border-b border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                    <h3 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Padrão de Resposta Oficial {currentQuestion.source === 'inedita' ? '(Modelo Banca INEP)' : '(INEP)'}
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <RichText content={currentQuestion.officialAnswer} className="text-sm" />
                    {currentQuestion.officialAnswerImages && currentQuestion.officialAnswerImages.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {currentQuestion.officialAnswerImages.map((img, i) => (
                          <figure key={i} className="question-figure">
                            <img
                              src={assetUrl(img.src)}
                              alt={img.alt}
                              onClick={() => setLightboxSrc({ ...img, src: assetUrl(img.src) })}
                              className="max-h-64 w-auto mx-auto object-contain cursor-zoom-in"
                            />
                            {img.caption && (
                              <figcaption className="text-center text-xs text-slate-600 mt-1.5">
                                {img.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                    )}

                    {/* Study tips */}
                    <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300 mb-1.5">
                        <Sparkles className="w-4 h-4" /> Dicas Estratégicas para Nota 10
                      </div>
                      <RichText content={currentQuestion.studyTips} className="text-sm text-amber-950 dark:text-amber-100" />
                    </div>
                  </div>
                </div>

                {/* Rubric Self-Assessment */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-indigo-200 dark:border-indigo-800 p-5 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                        Autoavaliação Guiada por Rubrica
                      </h3>
                      <p className="text-xs text-slate-500">
                        Marque os critérios que sua resposta contemplou corretamente:
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">Sua Nota</span>
                      <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                        {currentScore.toFixed(1)} <span className="text-sm font-medium text-slate-400">/ 10,0</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {currentQuestion.rubricCriteria.map((crit) => {
                      const checked = checkedCriteria.includes(crit.id);
                      return (
                        <label
                          key={crit.id}
                          className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${
                            checked
                              ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-700'
                              : 'bg-slate-50/50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleToggleCriterion(crit.id)}
                            className="mt-1 w-4 h-4 accent-emerald-600 rounded"
                          />
                          <div className="flex-1 text-sm">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-slate-900 dark:text-white">{crit.label}</span>
                              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 shrink-0">
                                +{crit.maxPoints.toFixed(1)} pts
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{crit.description}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <div className="relative max-w-5xl max-h-[92vh] bg-white rounded-2xl p-4" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-slate-900 text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={lightboxSrc.src} alt={lightboxSrc.alt} className="max-w-full max-h-[82vh] object-contain mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
};
