import type { ComponentType } from 'react';
import type { Box, LessonSection, Question } from './types';

/** Helpers for the full-English pages (chNN/en/page.tsx): the Uzbek title fields are not shown there. */
export const sec = (id: string, code: string, titleEn: string, Body: ComponentType, check?: Question): LessonSection => ({ id, code, titleEn, titleUz: titleEn, Body, check });

export const box = (id: string, kind: Box['kind'], titleEn: string, Body: ComponentType): Box => ({ id, kind, titleEn, titleUz: titleEn, Body });
