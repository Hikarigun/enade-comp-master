import type { DiscursiveQuestion, ObjectiveQuestion } from '../../types/enade';
import { ENADE_2023_CE_1 } from './enade2023Ce1';
import { ENADE_2023_CE_2 } from './enade2023Ce2';
import { ENADE_2023_DISCURSIVE, ENADE_2023_FG } from './enade2023FgDisc';

export const ENADE_2023_OBJECTIVE: ObjectiveQuestion[] = [
  ...ENADE_2023_FG,
  ...ENADE_2023_CE_1,
  ...ENADE_2023_CE_2,
];

export { ENADE_2023_DISCURSIVE };
export type { DiscursiveQuestion, ObjectiveQuestion };
