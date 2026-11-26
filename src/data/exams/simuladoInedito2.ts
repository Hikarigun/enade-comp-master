import type { DiscursiveQuestion, ObjectiveQuestion } from '../../types/enade';
import { INEDITA_DISCURSIVE } from './simuladoInedito2Disc';
import { SIMULADO_INEDITO_2_PART_1 } from './simuladoInedito2Part1';
import { SIMULADO_INEDITO_2_PART_2 } from './simuladoInedito2Part2';

export const SIMULADO_INEDITO_2_OBJECTIVE: ObjectiveQuestion[] = [
  ...SIMULADO_INEDITO_2_PART_1,
  ...SIMULADO_INEDITO_2_PART_2,
];

export { INEDITA_DISCURSIVE };
export type { DiscursiveQuestion, ObjectiveQuestion };
