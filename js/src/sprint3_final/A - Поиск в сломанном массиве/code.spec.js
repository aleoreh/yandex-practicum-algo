import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';
import fc from 'fast-check';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

import { solveUnlined, findStart } from './code';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const testCases = [
    [
        `9
5
19 21 100 101 1 4 5 7 12
`,
        `6`,
    ],
    [
        `2
1
5 1
`,
        `1`,
    ],
];

const arrArb = fc.array(fc.integer(), { maxLength: 10000 });

describe('Спринт 3. A. Поиск в сломанном массиве', () => {
    it.prop([arrArb])('Находит начало массива', (values) => {
        values.sort((x, y) => x - y);
        const foundStart = findStart(values);
        const realStart = values.findIndex((x) => Math.min(...values) === x) ?? -1;
        expect(foundStart).toEqual(realStart);
    });

    testCases.forEach(([input, expected], i) => {
        it.skip(`Тест №${i}`, () => {
            expect(solveUnlined(input)).toEqual(expected);
        });
    });
});
