import type { ObjectiveQuestion, DiscursiveQuestion } from '../types/enade';
import { ENADE_2017_OBJECTIVE, ENADE_2017_DISCURSIVE } from './exams/enade2017';
import { ENADE_2019_OBJECTIVE, ENADE_2019_DISCURSIVE } from './exams/enade2019';
import { ENADE_2023_OBJECTIVE, ENADE_2023_DISCURSIVE } from './exams/enade2023';
import { SIMULADO_INEDITO_1_OBJECTIVE } from './exams/simuladoInedito1';
import { SIMULADO_INEDITO_2_OBJECTIVE, INEDITA_DISCURSIVE } from './exams/simuladoInedito2';

export const ALL_OBJECTIVE_QUESTIONS: ObjectiveQuestion[] = [
  ...ENADE_2023_OBJECTIVE,
  ...ENADE_2019_OBJECTIVE,
  ...ENADE_2017_OBJECTIVE,
  ...SIMULADO_INEDITO_1_OBJECTIVE,
  ...SIMULADO_INEDITO_2_OBJECTIVE,
];

export const ALL_DISCURSIVE_QUESTIONS: DiscursiveQuestion[] = [
  ...ENADE_2023_DISCURSIVE,
  ...ENADE_2019_DISCURSIVE,
  ...ENADE_2017_DISCURSIVE,
  ...INEDITA_DISCURSIVE,
];
