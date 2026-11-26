export type DisciplineId =
  | 'algoritmos-ed'
  | 'sistemas-digitais'
  | 'arquitetura-embarcados'
  | 'sistemas-operacionais'
  | 'redes-seguranca'
  | 'banco-dados'
  | 'engenharia-software'
  | 'teoria-compiladores'
  | 'ia-dados'
  | 'circuitos-eletronica'
  | 'sinais-controle-cg'
  | 'matematica-otimizacao'
  | 'probabilidade-estatistica'
  | 'fisica-materiais-gestao'
  | 'formacao-geral';

export type QuestionSource =
  | 'enade-2017'
  | 'enade-2019'
  | 'enade-2023'
  | 'inedita-1'
  | 'inedita-2';

export type OptionLetter = 'A' | 'B' | 'C' | 'D' | 'E';

export type QuestionStyle =
  | 'multipla-simples'
  | 'afirmativas'
  | 'assercao-razao'
  | 'interpretacao-codigo'
  | 'interpretacao-grafico-circuito';

export type Difficulty = 'facil' | 'medio' | 'dificil';

export interface QuestionImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface QuestionOption {
  letter: OptionLetter;
  text: string;
  image?: string;
}

export interface ObjectiveQuestion {
  id: string;
  source: QuestionSource;
  year: number;
  number: number;
  component: 'FG' | 'CE';
  discipline: DisciplineId;
  subtopic: string;
  questionStyle: QuestionStyle;
  difficulty: Difficulty;
  annulled?: boolean;
  annulledNote?: string;
  context: string;
  images?: QuestionImage[];
  command: string;
  options: QuestionOption[];
  correctOption: OptionLetter | null;
  explanation: string;
  optionAnalysis?: Partial<Record<OptionLetter, string>>;
  keyConcept: string;
  reference?: string;
}

export interface DiscursivePromptItem {
  label: string;
  text: string;
  points: number;
}

export interface RubricCriterion {
  id: string;
  label: string;
  description: string;
  maxPoints: number;
}

export interface DiscursiveQuestion {
  id: string;
  source: 'enade-2017' | 'enade-2019' | 'enade-2023' | 'inedita';
  year: number;
  number: number;
  component: 'FG' | 'CE';
  discipline: DisciplineId;
  subtopic: string;
  difficulty: Difficulty;
  maxLines: number;
  isCodeQuestion?: boolean;
  context: string;
  images?: QuestionImage[];
  prompts: DiscursivePromptItem[];
  officialAnswer: string;
  officialAnswerImages?: QuestionImage[];
  rubricCriteria: RubricCriterion[];
  studyTips: string;
  reference?: string;
}

export interface DisciplineInfo {
  id: DisciplineId;
  name: string;
  shortName: string;
  component: 'FG' | 'CE';
  color: string;
  description: string;
  icon: string;
  priority: 'alta' | 'media' | 'complementar';
}

export interface StudySection {
  id: string;
  title: string;
  content: string; // Markdown + KaTeX + code blocks
  keyFormulas?: { label: string; latex: string; note?: string }[];
  codeExample?: { language: string; title: string; code: string };
}

export interface StudyModule {
  id: DisciplineId;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  overview: string;
  enadeWeightNote: string;
  sections: StudySection[];
  inepTraps: string[];
  quickChecklist: string[];
}

export interface Flashcard {
  id: string;
  discipline: DisciplineId;
  front: string;
  back: string;
  hint?: string;
  tag: string;
}

export interface FlashcardProgress {
  cardId: string;
  interval: number; // days
  repetition: number;
  easeFactor: number;
  nextReview: number; // timestamp ms
  lastReviewed?: number;
}

export interface FormulaItem {
  id: string;
  discipline: DisciplineId;
  title: string;
  latex: string;
  variables: string;
  whenToUse: string;
  example?: string;
}

export interface SimuladoResult {
  id: string;
  title: string;
  mode: 'prova' | 'treino';
  sourceFilter: string;
  date: number;
  durationSeconds: number;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  fgCorrect: number;
  fgTotal: number;
  ceCorrect: number;
  ceTotal: number;
  weightedScore: number; // 0-100 (25% FG + 75% CE when both exist)
  answers: Record<string, OptionLetter | null>;
  byDiscipline: Record<string, { correct: number; total: number }>;
}

export interface DiscursiveAttempt {
  questionId: string;
  text: string;
  checkedCriteriaIds: string[];
  score: number;
  updatedAt: number;
}

export interface StudyPlanConfig {
  examDate: string; // YYYY-MM-DD
  hoursPerDay: number;
  daysPerWeek: number;
  completedTasks: string[];
}

export interface UserProgress {
  answeredQuestions: Record<
    string,
    {
      selected: OptionLetter;
      correct: boolean;
      attempts: number;
      lastAnsweredAt: number;
    }
  >;
  bookmarkedQuestions: string[];
  errorNotebookResolved: string[];
  completedModules: DisciplineId[];
  simuladoHistory: SimuladoResult[];
  discursiveAttempts: Record<string, DiscursiveAttempt>;
  flashcardProgress: Record<string, FlashcardProgress>;
  studyPlan: StudyPlanConfig;
  streakDays: number;
  lastActiveDate: string;
}
