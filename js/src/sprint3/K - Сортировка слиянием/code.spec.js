import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';

import { merge, merge_sort } from './code';

describe.only('3. K. Сортировка слиянием', () => {
    it('Проходит фиксированный тест №1', () => {
        const input = [1, 4, 9, 2, 10, 11];
        const expected = [1, 2, 4, 9, 10, 11];

        const res = merge(input, 0, 3, 6);

        expect(res).toEqual(expected);
    });

    it('Проходит фиксированный тест №2', () => {
        const input = [1, 4, 2, 10, 1, 2];
        const expected = [1, 1, 2, 2, 4, 10];

        merge_sort(input, 0, 6);

        expect(input).toEqual(expected);
    });
});
