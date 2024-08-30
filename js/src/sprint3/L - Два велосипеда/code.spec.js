import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { findHappyDay } from './code';

describe('L. Два велосипеда', () => {
    it('Проходит фиксированный тест №1', () => {
        const observations = [1, 2, 4, 4, 6, 8];
        const amount = 3;

        expect(findHappyDay(observations, amount)).toEqual(3);
        expect(findHappyDay(observations, amount * 2)).toEqual(5);
    });

    it('Проходит фиксированный тест №2', () => {
        const observations = [1, 2, 4, 4, 4, 4];
        const amount = 3;

        expect(findHappyDay(observations, amount)).toEqual(3);
        expect(findHappyDay(observations, amount * 2)).toEqual(-1);
    });
});
