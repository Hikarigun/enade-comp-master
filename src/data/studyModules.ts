import type { StudyModule } from '../types/enade';
import { STUDY_MODULES_PART_1 } from './studyModulesPart1';
import { STUDY_MODULES_PART_2 } from './studyModulesPart2';
import { STUDY_MODULES_PART_3 } from './studyModulesPart3';

export const STUDY_MODULES: StudyModule[] = [
  ...STUDY_MODULES_PART_1,
  ...STUDY_MODULES_PART_2,
  ...STUDY_MODULES_PART_3,
];
