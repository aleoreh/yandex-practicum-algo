import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';

import { solveUnlined } from './code';

describe('Спринт 3. D. Печеньки', () => {
    it('Проходит фиксированный тест №1', () => {
        const input = `2
1 2
3
2 1 3`;

        const expected = `2`;

        expect(solveUnlined(input)).toEqual(expected);
    });

    it('Проходит фиксированный тест №2', () => {
        const input = `3
2 1 3
2
1 1`;

        const expected = `1`;

        expect(solveUnlined(input)).toEqual(expected);
    });

    it('Проходит фиксированный тест №3', () => {
        const input = `10
5 10 1 5 4 4 10 1 5 10
9
4 4 8 5 9 6 1 7 4`;

        const expected = `7`;

        expect(solveUnlined(input)).toEqual(expected);
    });
});
