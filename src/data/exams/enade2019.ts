import type { DiscursiveQuestion, ObjectiveQuestion } from '../../types/enade';
import { ENADE_2019_CE_1 } from './enade2019Ce1';
import { ENADE_2019_CE_2 } from './enade2019Ce2';
import { ENADE_2019_DISCURSIVE, ENADE_2019_FG } from './enade2019FgDisc';

export const ENADE_2019_OBJECTIVE: ObjectiveQuestion[] = [
  ...ENADE_2019_FG,
  ...ENADE_2019_CE_1,
  ...ENADE_2019_CE_2,
];

export { ENADE_2019_CE_1, ENADE_2019_CE_2, ENADE_2019_DISCURSIVE, ENADE_2019_FG };
export type { DiscursiveQuestion, ObjectiveQuestion };
