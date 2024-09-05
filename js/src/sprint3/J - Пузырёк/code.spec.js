import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { bubbleSortInPlace } from './code';

describe.only('J. Пузырёк', () => {
    it('Проходит фиксированный тест №1', () => {
        const arr = [4, 3, 9, 2, 1];
        bubbleSortInPlace(arr);
        expect(arr).toEqual([1, 2, 3, 4, 9]);
    });

    it('Проходит фиксированный тест №2', () => {
        const arr = [12, 8, 9, 10, 11];
        bubbleSortInPlace(arr);
        expect(arr).toEqual([8, 9, 10, 11, 12]);
    });

    it('Проходит фиксированный тест №3', () => {
        const arr = [4, 5];
        bubbleSortInPlace(arr);
        expect(arr).toEqual([4, 5]);
    });
});
