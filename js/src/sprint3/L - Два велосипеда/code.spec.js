import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { findHappyDay } from './code';

describe('L. Два велосипеда', () => {
    it('Проходит фиксированный тест №1', () => {
        const observations = [1, 2, 4, 4, 6, 8];
        const amount = 3;

        expect(findHappyDay(observations, amount), 'Один велосипед').toEqual(3);
        expect(
            findHappyDay(observations, amount * 2),
            'Два велосипеда',
        ).toEqual(5);
    });

    it('Проходит фиксированный тест №2', () => {
        const observations = [1, 2, 4, 4, 4, 4];
        const amount = 3;

        expect(findHappyDay(observations, amount), 'Один велосипед').toEqual(3);
        expect(
            findHappyDay(observations, amount * 2),
            'Два велосипеда',
        ).toEqual(-1);
    });

    it('Проходит фиксированный тест №3', () => {
        const observations = [1, 1, 4, 4, 4, 4];
        const amount = 1;

        expect(findHappyDay(observations, amount), 'Один велосипед').toEqual(1);
        expect(
            findHappyDay(observations, amount * 2),
            'Два велосипеда',
        ).toEqual(3);
    });

    it('Проходит фиксированный тест №4', () => {
        const observations = [1, 1, 4, 4, 4, 4];
        const amount = 4;

        expect(findHappyDay(observations, amount), 'Один велосипед').toEqual(3);
        expect(
            findHappyDay(observations, amount * 2),
            'Два велосипеда',
        ).toEqual(-1);
    });

    it('Проходит фиксированный тест №5', () => {
        const observations = [1, 1, 4, 4, 4, 4, 8];
        const amount = 4;

        expect(findHappyDay(observations, amount), 'Один велосипед').toEqual(3);
        expect(
            findHappyDay(observations, amount * 2),
            'Два велосипеда',
        ).toEqual(7);
    });
});
