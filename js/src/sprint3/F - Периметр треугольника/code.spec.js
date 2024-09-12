import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';
import { it } from '@fast-check/vitest';
import fc from 'fast-check';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

import { solveUnlined } from './code';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const case1 = [
    `4
6 3 3 2`,
    `8`,
];

const case2 = [
    `6
5 3 7 2 8 3`,
    `20`,
];

describe('Спринт 3. F. Периметр треугольника', () => {
    it('Тест №1', () => {
        expect(solveUnlined(case1[0])).toEqual(case1[1]);
    });

    it('Тест №2', () => {
        expect(solveUnlined(case2[0])).toEqual(case2[1]);
    });
});
