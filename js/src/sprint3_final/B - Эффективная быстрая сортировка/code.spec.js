import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';
import fc from 'fast-check';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

import { solveUnlined, quickSortInPlace } from './code';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const testCases = [
    [
        `5
alla 4 100
gena 6 1000
gosha 2 90
rita 2 90
timofey 4 80`,
        `gena
timofey
alla
gosha
rita`,
    ],
    [
        `5
alla 0 0
gena 0 0
gosha 0 0
rita 0 0
timofey 0 0`,
        `alla
gena
gosha
rita
timofey`,
    ],
];

const arrArb = fc.array(fc.integer(), { maxLength: 100000 });

describe('Спринт 3, финал. B. Эффективная быстрая сортировка', () => {
    it.prop([arrArb])('Быстрая сортировка на месте', (arr) => {
        const sorted = arr.slice().sort();
        quickSortInPlace(arr, 0, arr.length - 1, (x, y) => x - y);
        expect(arr).toEqual(sorted);
    });
    testCases.forEach(([input, expected], i) => {
        it(`Тест №${i}`, () => {
            expect(solveUnlined(input)).toEqual(expected);
        });
    });
});
