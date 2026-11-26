import type { ObjectiveQuestion, DiscursiveQuestion } from '../../types/enade';
import { ENADE_2017_FG, ENADE_2017_DISCURSIVE } from './enade2017FgDisc';
import { ENADE_2017_CE_1 } from './enade2017Ce1';
import { ENADE_2017_CE_2 } from './enade2017Ce2';

export const ENADE_2017_OBJECTIVE: ObjectiveQuestion[] = [
  ...ENADE_2017_FG,
  ...ENADE_2017_CE_1,
  ...ENADE_2017_CE_2,
];

export { ENADE_2017_DISCURSIVE };
export type { ObjectiveQuestion, DiscursiveQuestion };
