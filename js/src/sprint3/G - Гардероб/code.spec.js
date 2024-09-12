import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';

import { solveUnlined } from './code';

describe('Спринт 3 - G. Гардероб', () => {
    it('Проходит фиксированный тест №1', () => {
        const input = `7
0 2 1 2 0 0 1`;

        const expected = `0 0 0 1 1 2 2`;

        expect(solveUnlined(input)).toEqual(expected);
    });

    it('Проходит фиксированный тест №2', () => {
        const input = `5
2 1 2 0 1`;

        const expected = `0 1 1 2 2`;

        expect(solveUnlined(input)).toEqual(expected);
    });

    it('Проходит фиксированный тест №3', () => {
        const input = `6
2 1 1 2 0 2`;

        const expected = `0 1 1 2 2 2`;

        expect(solveUnlined(input)).toEqual(expected);
    });

    it('Проходит фиксированный тест №4', () => {
        const input = `0

`;

        const expected = ``;

        expect(solveUnlined(input)).toEqual(expected);
    });
});
