import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { combine } from './code';

describe('B. Комбинации', () => {
    it('Проходит фиксированный тест №1', () => {
        const buttons = [2, 3];
        expect(combine(buttons)).toEqual([
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
        const buttons = [9, 2];
        expect(combine(buttons)).toEqual([
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
