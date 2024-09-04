import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { generate, LETTERS } from './code';

describe.only('B. Комбинации', () => {
    it('Проходит фиксированный тест №1', () => {
        const buttons = [LETTERS[2], LETTERS[3]];
        expect(generate(buttons)).toEqual([
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
        const buttons = [LETTERS[9], LETTERS[2]];
        expect(generate(buttons)).toEqual([
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
