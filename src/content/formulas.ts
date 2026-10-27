import { chapters } from '../chapterRegistry';
import type { Formula } from './types';

/** All formulas of the site, in chapter order. */
export const getAllFormulas = (): Formula[] => chapters.flatMap((c) => c.data?.formulas ?? []);
