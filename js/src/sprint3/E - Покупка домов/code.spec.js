import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';

import { solveUnlined } from './code';

describe('Спринт 3. E. Покупка домов', () => {
    it('Проходит фиксированный тест №1', () => {
        const input = `3 300
999 999 999`;

        const expected = `0`;

        expect(solveUnlined(input)).toEqual(expected);
    });

    it('Проходит фиксированный тест №2', () => {
        const input = `3 1000
350 999 200`;

        const expected = `2`;

        expect(solveUnlined(input)).toEqual(expected);
    });
});
