import React, { useState, useEffect, useRef } from 'react';
import {
  LayoutDashboard,
  FileCheck2,
  Database,
  FileEdit,
  BookOpen,
  Layers,
  Sigma,
  AlertOctagon,
  Calendar,
  Moon,
  Sun,
  Menu,
  X,
  Download,
  Upload,
  Cpu,
  RotateCcw,
} from 'lucide-react';
import type { DisciplineId } from './types/enade';
import { ALL_OBJECTIVE_QUESTIONS, ALL_DISCURSIVE_QUESTIONS } from './data/allExams';
import { STUDY_MODULES } from './data/studyModules';
import { FLASHCARDS } from './data/flashcards';
import { useUserProgress } from './hooks/useUserProgress';
import { DashboardPage } from './pages/DashboardPage';
import { SimuladoPage, type SimuladoLaunchRequest } from './pages/SimuladoPage';
import { QuestionBankPage } from './pages/QuestionBankPage';
import { DiscursiveLabPage } from './pages/DiscursiveLabPage';
import { StudyGuidesPage } from './pages/StudyGuidesPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { FormulasPage } from './pages/FormulasPage';
import { ErrorNotebookPage } from './pages/ErrorNotebookPage';
import { StudyPlanPage } from './pages/StudyPlanPage';

type NavTab =
  | 'dashboard'
  | 'simulados'
  | 'questoes'
  | 'discursivas'
  | 'guias'
  | 'flashcards'
  | 'formulas'
  | 'erros'
  | 'plano';

export function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('enade-theme') === 'dark';
    } catch {
      return false;
    }
  });

  // Cross-tab navigation states
  const [selectedGuideDisc, setSelectedGuideDisc] = useState<DisciplineId | null>(null);
  const [selectedBankDisc, setSelectedBankDisc] = useState<DisciplineId | 'all'>('all');
  const [selectedFlashDisc, setSelectedFlashDisc] = useState<DisciplineId | 'all'>('all');
  const [pendingSimulado, setPendingSimulado] = useState<SimuladoLaunchRequest | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    progress,
    recordAnswer,
    toggleBookmark,
    toggleModuleCompleted,
    saveSimuladoResult,
    saveDiscursiveAttempt,
    reviewFlashcard,
    updateStudyPlan,
    toggleStudyTask,
    exportProgress,
    importProgress,
    resetProgress,
  } = useUserProgress();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('enade-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('enade-theme', 'light');
    }
  }, [darkMode]);

  const pendingErrorsCount = ALL_OBJECTIVE_QUESTIONS.filter((q) => {
    if (q.annulled) return false;
    const ans = progress.answeredQuestions[q.id];
    return ans && !ans.correct && !progress.errorNotebookResolved.includes(q.id);
  }).length;

  const dueFlashcardsCount = FLASHCARDS.filter((c) => {
    const fp = progress.flashcardProgress[c.id];
    return !fp || fp.nextReview <= Date.now();
  }).length;

  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: number; badgeColor?: string }[] = [
    { id: 'dashboard', label: 'Visão Geral & Raio-X', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'simulados', label: 'Simulados', icon: <FileCheck2 className="w-4 h-4" /> },
    { id: 'questoes', label: 'Banco de Questões', icon: <Database className="w-4 h-4" /> },
    { id: 'discursivas', label: 'Lab. Discursivas', icon: <FileEdit className="w-4 h-4" /> },
    { id: 'guias', label: 'Enciclopédia Teórica', icon: <BookOpen className="w-4 h-4" /> },
    {
      id: 'flashcards',
      label: 'Flashcards SM-2',
      icon: <Layers className="w-4 h-4" />,
      badge: dueFlashcardsCount,
      badgeColor: 'bg-amber-500 text-white',
    },
    { id: 'formulas', label: 'Folha de Fórmulas', icon: <Sigma className="w-4 h-4" /> },
    {
      id: 'erros',
      label: 'Caderno de Erros',
      icon: <AlertOctagon className="w-4 h-4" />,
      badge: pendingErrorsCount,
      badgeColor: 'bg-rose-500 text-white',
    },
    { id: 'plano', label: 'Plano de Estudos', icon: <Calendar className="w-4 h-4" /> },
  ];

  const handleOpenModule = (disc: DisciplineId) => {
    setSelectedGuideDisc(disc);
    setActiveTab('guias');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePracticeDiscipline = (disc: DisciplineId) => {
    setSelectedBankDisc(disc);
    setActiveTab('questoes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFlashcardsDiscipline = (disc: DisciplineId) => {
    setSelectedFlashDisc(disc);
    setActiveTab('flashcards');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchExamBySource = (source: string) => {
    const qs = ALL_OBJECTIVE_QUESTIONS.filter((q) => q.source === source).sort((a, b) => a.number - b.number);
    if (qs.length === 0) {
      setActiveTab('simulados');
      return;
    }
    const labels: Record<string, string> = {
      'enade-2023': 'ENADE 2023 (Formato Atual)',
      'enade-2019': 'ENADE 2019 (Oficial Completo)',
      'enade-2017': 'ENADE 2017 (Oficial Completo)',
      'inedita-1': 'Simulado Inédito #1 — Formato 2023+',
      'inedita-2': 'Simulado Inédito #2 — Reta Final',
    };
    setPendingSimulado({
      title: labels[source] || source,
      questionIds: qs.map((q) => q.id),
      mode: 'prova',
      sourceFilter: source,
      durationMinutes: qs.length >= 38 ? 210 : 195,
    });
    setActiveTab('simulados');
  };

  const handleLaunchCustomSimulado = (questionIds: string[], title: string) => {
    setPendingSimulado({
      title,
      questionIds,
      mode: 'treino',
      sourceFilter: 'custom',
      durationMinutes: Math.max(15, Math.round(questionIds.length * 4.5)),
    });
    setActiveTab('simulados');
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const ok = importProgress(String(reader.result || ''));
      alert(ok ? 'Progresso importado com sucesso!' : 'Arquivo de backup inválido.');
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800/80 z-30">
        {/* Brand */}
        <div className="px-5 py-5 border-b border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="font-black text-base tracking-tight leading-tight text-slate-900 dark:text-white">
              ENADE Comp
            </div>
            <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
              Eng. da Computação
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer ${
                  active
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2.5 truncate">
                  {item.icon}
                  <span className="truncate">{item.label}</span>
                </span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      active ? 'bg-white/25 text-white' : item.badgeColor
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Controls */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
          <button
            type="button"
            onClick={() => setDarkMode((d) => !d)}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <span className="flex items-center gap-2">
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
              {darkMode ? 'Modo Claro' : 'Modo Escuro'}
            </span>
          </button>

          <div className="grid grid-cols-3 gap-1.5">
            <button
              type="button"
              onClick={exportProgress}
              title="Exportar backup JSON"
              className="flex items-center justify-center gap-1 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Backup
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              title="Restaurar backup JSON"
              className="flex items-center justify-center gap-1 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" /> Abrir
            </button>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Deseja zerar todo o seu histórico de estudos?')) resetProgress();
              }}
              title="Zerar progresso"
              className="flex items-center justify-center gap-1 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Zerar
            </button>
          </div>
          <input ref={fileInputRef} type="file" accept=".json" onChange={handleImportFile} className="hidden" />
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 inset-x-0 h-14 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 z-30 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="font-black text-sm">ENADE Comp Master</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDarkMode((d) => !d)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-72 h-full bg-white dark:bg-slate-950 p-4 space-y-1 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="font-black text-base">Navegação</span>
              <button type="button" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
                  activeTab === item.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  {item.icon}
                  {item.label}
                </span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 pt-14 lg:pt-0 min-w-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {activeTab === 'dashboard' && (
            <DashboardPage
              allQuestions={ALL_OBJECTIVE_QUESTIONS}
              allDiscursive={ALL_DISCURSIVE_QUESTIONS}
              progress={progress}
              onNavigate={(t) => setActiveTab(t as NavTab)}
              onOpenModule={handleOpenModule}
              onLaunchExam={handleLaunchExamBySource}
            />
          )}

          {activeTab === 'simulados' && (
            <SimuladoPage
              allQuestions={ALL_OBJECTIVE_QUESTIONS}
              progress={progress}
              onFinishSimulado={saveSimuladoResult}
              onToggleBookmark={toggleBookmark}
              onOpenModule={handleOpenModule}
              pendingLaunch={pendingSimulado}
              onClearPendingLaunch={() => setPendingSimulado(null)}
            />
          )}

          {activeTab === 'questoes' && (
            <QuestionBankPage
              allQuestions={ALL_OBJECTIVE_QUESTIONS}
              progress={progress}
              onRecordAnswer={recordAnswer}
              onToggleBookmark={toggleBookmark}
              onOpenModule={handleOpenModule}
              onLaunchCustomSimulado={handleLaunchCustomSimulado}
              initialDiscipline={selectedBankDisc}
            />
          )}

          {activeTab === 'discursivas' && (
            <DiscursiveLabPage
              questions={ALL_DISCURSIVE_QUESTIONS}
              attempts={progress.discursiveAttempts}
              onSaveAttempt={saveDiscursiveAttempt}
            />
          )}

          {activeTab === 'guias' && (
            <StudyGuidesPage
              modules={STUDY_MODULES}
              allQuestions={ALL_OBJECTIVE_QUESTIONS}
              completedModules={progress.completedModules}
              onToggleModuleCompleted={toggleModuleCompleted}
              onPracticeDiscipline={handlePracticeDiscipline}
              onFlashcardsDiscipline={handleFlashcardsDiscipline}
              initialDiscipline={selectedGuideDisc}
            />
          )}

          {activeTab === 'flashcards' && (
            <FlashcardsPage
              flashcardProgress={progress.flashcardProgress}
              onReview={reviewFlashcard}
              initialDiscipline={selectedFlashDisc}
            />
          )}

          {activeTab === 'formulas' && <FormulasPage />}

          {activeTab === 'erros' && (
            <ErrorNotebookPage
              allQuestions={ALL_OBJECTIVE_QUESTIONS}
              progress={progress}
              onRecordAnswer={recordAnswer}
              onToggleBookmark={toggleBookmark}
              onOpenModule={handleOpenModule}
              onStartRecoverySimulado={handleLaunchCustomSimulado}
            />
          )}

          {activeTab === 'plano' && (
            <StudyPlanPage
              allQuestions={ALL_OBJECTIVE_QUESTIONS}
              progress={progress}
              onUpdatePlan={updateStudyPlan}
              onToggleTask={toggleStudyTask}
              onNavigateModule={handleOpenModule}
              onStartOfficialSimulado={handleLaunchExamBySource}
              onOpenDiscursive={() => setActiveTab('discursivas')}
              onOpenFlashcards={() => setActiveTab('flashcards')}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
