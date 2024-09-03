import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { generateBraces } from './code';

describe('A. Генератор скобок', () => {
    it('Проходит фиксированный тест №1', () => {
        const n = 3;

        expect(generateBraces(n)).toEqual([
            '((()))',
            '(()())',
            '(())()',
            '()(())',
            '()()()',
        ]);
    });

    it('Проходит фиксированный тест №2', () => {
        const n = 2;

        expect(generateBraces(n)).toEqual(['(())', '()()']);
    });
});
