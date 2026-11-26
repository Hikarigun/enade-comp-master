import type { ObjectiveQuestion } from '../../types/enade';
import { SIMULADO_INEDITO_1_PART_1 } from './simuladoInedito1Part1';
import { SIMULADO_INEDITO_1_PART_2 } from './simuladoInedito1Part2';

export const SIMULADO_INEDITO_1_OBJECTIVE: ObjectiveQuestion[] = [
  ...SIMULADO_INEDITO_1_PART_1,
  ...SIMULADO_INEDITO_1_PART_2,
];

export type { ObjectiveQuestion };
