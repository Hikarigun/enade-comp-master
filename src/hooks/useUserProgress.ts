import { useState, useEffect, useCallback } from 'react';
import type {
  DisciplineId,
  DiscursiveAttempt,
  FlashcardProgress,
  OptionLetter,
  SimuladoResult,
  StudyPlanConfig,
  UserProgress,
} from '../types/enade';

const STORAGE_KEY = 'enade-comp-master-progress-v1';

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function defaultExamDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 56); // 8 weeks default
  return d.toISOString().slice(0, 10);
}

const DEFAULT_PROGRESS: UserProgress = {
  answeredQuestions: {},
  bookmarkedQuestions: [],
  errorNotebookResolved: [],
  completedModules: [],
  simuladoHistory: [],
  discursiveAttempts: {},
  flashcardProgress: {},
  studyPlan: {
    examDate: defaultExamDate(),
    hoursPerDay: 2,
    daysPerWeek: 5,
    completedTasks: [],
  },
  streakDays: 1,
  lastActiveDate: todayStr(),
};

function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    const merged: UserProgress = {
      ...DEFAULT_PROGRESS,
      ...parsed,
      studyPlan: {
        ...DEFAULT_PROGRESS.studyPlan,
        ...(parsed.studyPlan || {}),
      },
    };
    // Update streak
    const today = todayStr();
    if (merged.lastActiveDate !== today) {
      const last = new Date(merged.lastActiveDate + 'T00:00:00');
      const now = new Date(today + 'T00:00:00');
      const diffDays = Math.round((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
      merged.streakDays = diffDays === 1 ? merged.streakDays + 1 : 1;
      merged.lastActiveDate = today;
    }
    return merged;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => loadProgress());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore quota error
    }
  }, [progress]);

  const recordAnswer = useCallback((questionId: string, selected: OptionLetter, correct: boolean) => {
    setProgress((prev) => {
      const existing = prev.answeredQuestions[questionId];
      const nextResolved = correct
        ? prev.errorNotebookResolved.includes(questionId)
          ? prev.errorNotebookResolved
          : [...prev.errorNotebookResolved, questionId]
        : prev.errorNotebookResolved.filter((id) => id !== questionId);

      return {
        ...prev,
        answeredQuestions: {
          ...prev.answeredQuestions,
          [questionId]: {
            selected,
            correct,
            attempts: (existing?.attempts ?? 0) + 1,
            lastAnsweredAt: Date.now(),
          },
        },
        errorNotebookResolved: nextResolved,
        lastActiveDate: todayStr(),
      };
    });
  }, []);

  const toggleBookmark = useCallback((questionId: string) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedQuestions.includes(questionId);
      return {
        ...prev,
        bookmarkedQuestions: exists
          ? prev.bookmarkedQuestions.filter((id) => id !== questionId)
          : [...prev.bookmarkedQuestions, questionId],
      };
    });
  }, []);

  const toggleModuleCompleted = useCallback((disciplineId: DisciplineId) => {
    setProgress((prev) => {
      const exists = prev.completedModules.includes(disciplineId);
      return {
        ...prev,
        completedModules: exists
          ? prev.completedModules.filter((id) => id !== disciplineId)
          : [...prev.completedModules, disciplineId],
      };
    });
  }, []);

  const saveSimuladoResult = useCallback(
    (result: SimuladoResult, questionCorrectMap: Record<string, { selected: OptionLetter; correct: boolean }>) => {
      setProgress((prev) => {
        const nextAnswered = { ...prev.answeredQuestions };
        const nextResolved = new Set(prev.errorNotebookResolved);

        for (const [qId, info] of Object.entries(questionCorrectMap)) {
          const existing = nextAnswered[qId];
          nextAnswered[qId] = {
            selected: info.selected,
            correct: info.correct,
            attempts: (existing?.attempts ?? 0) + 1,
            lastAnsweredAt: Date.now(),
          };
          if (info.correct) {
            nextResolved.add(qId);
          } else {
            nextResolved.delete(qId);
          }
        }

        return {
          ...prev,
          answeredQuestions: nextAnswered,
          errorNotebookResolved: Array.from(nextResolved),
          simuladoHistory: [result, ...prev.simuladoHistory],
          lastActiveDate: todayStr(),
        };
      });
    },
    []
  );

  const saveDiscursiveAttempt = useCallback((attempt: DiscursiveAttempt) => {
    setProgress((prev) => ({
      ...prev,
      discursiveAttempts: {
        ...prev.discursiveAttempts,
        [attempt.questionId]: attempt,
      },
      lastActiveDate: todayStr(),
    }));
  }, []);

  // SM-2 Spaced Repetition algorithm: quality in [1 (again), 3 (hard), 4 (good), 5 (easy)]
  const reviewFlashcard = useCallback((cardId: string, quality: 1 | 3 | 4 | 5) => {
    setProgress((prev) => {
      const current: FlashcardProgress = prev.flashcardProgress[cardId] || {
        cardId,
        interval: 0,
        repetition: 0,
        easeFactor: 2.5,
        nextReview: Date.now(),
      };

      let { interval, repetition, easeFactor } = current;

      if (quality < 3) {
        repetition = 0;
        interval = 1;
      } else {
        if (repetition === 0) {
          interval = quality === 5 ? 3 : 1;
        } else if (repetition === 1) {
          interval = quality === 3 ? 3 : 6;
        } else {
          interval = Math.round(interval * easeFactor * (quality === 5 ? 1.25 : quality === 3 ? 0.85 : 1));
        }
        repetition += 1;
      }

      easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

      const nextReview =
        quality < 3
          ? Date.now() + 10 * 60 * 1000 // 10 min retry for "Errei"
          : Date.now() + interval * 24 * 60 * 60 * 1000;

      return {
        ...prev,
        flashcardProgress: {
          ...prev.flashcardProgress,
          [cardId]: {
            cardId,
            interval,
            repetition,
            easeFactor,
            nextReview,
            lastReviewed: Date.now(),
          },
        },
        lastActiveDate: todayStr(),
      };
    });
  }, []);

  const updateStudyPlan = useCallback((partial: Partial<StudyPlanConfig>) => {
    setProgress((prev) => ({
      ...prev,
      studyPlan: {
        ...prev.studyPlan,
        ...partial,
      },
    }));
  }, []);

  const toggleStudyTask = useCallback((taskId: string) => {
    setProgress((prev) => {
      const exists = prev.studyPlan.completedTasks.includes(taskId);
      return {
        ...prev,
        studyPlan: {
          ...prev.studyPlan,
          completedTasks: exists
            ? prev.studyPlan.completedTasks.filter((t) => t !== taskId)
            : [...prev.studyPlan.completedTasks, taskId],
        },
      };
    });
  }, []);

  const exportProgress = useCallback(() => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `enade-comp-master-backup-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [progress]);

  const importProgress = useCallback((jsonText: string): boolean => {
    try {
      const parsed = JSON.parse(jsonText) as Partial<UserProgress>;
      if (!parsed || typeof parsed !== 'object' || !parsed.answeredQuestions) return false;
      setProgress({
        ...DEFAULT_PROGRESS,
        ...parsed,
        studyPlan: {
          ...DEFAULT_PROGRESS.studyPlan,
          ...(parsed.studyPlan || {}),
        },
      });
      return true;
    } catch {
      return false;
    }
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({
      ...DEFAULT_PROGRESS,
      studyPlan: { ...DEFAULT_PROGRESS.studyPlan, examDate: defaultExamDate() },
      lastActiveDate: todayStr(),
    });
  }, []);

  return {
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
  };
}
