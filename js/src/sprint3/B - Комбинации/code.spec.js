import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { lettersComb, LETTERS } from './code';

describe.only('B. Комбинации', () => {
    it('Проходит фиксированный тест №1', () => {
        const buttons = [2, 3].map((btn) => LETTERS[btn].split(''));
        expect(lettersComb(buttons)).toEqual([
            'ad',
            'ae',
            'af',
            'bd',
            'be',
            'bf',
            'cd',
            'ce',
            'cf',
        ]);
    });

    it('Проходит фиксированный тест №2', () => {
        const buttons = [9, 2].map((btn) => LETTERS[btn].split(''));
        expect(lettersComb(buttons)).toEqual([
            'wa',
            'wb',
            'wc',
            'xa',
            'xb',
            'xc',
            'ya',
            'yb',
            'yc',
            'za',
            'zb',
            'zc',
        ]);
    });
});
