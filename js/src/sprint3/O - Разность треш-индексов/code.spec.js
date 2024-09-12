import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';
import { it } from '@fast-check/vitest';
import fc from 'fast-check';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

import { solveUnlined } from './code';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const testCases = [
    [
        `3
2 3 4
2`,
        `1`,
    ],
    [
        `3
1 3 1
1`,
        `0`,
    ],
    [
        `3
1 3 5
3`,
        `4`,
    ]
];

describe('Спринт 3. O. Разность треш-индексов', () => {
    testCases.forEach(([input, expected], i) => {
        it(`Тест №${i}`, () => {
            expect(solveUnlined(input)).toEqual(expected);
        });
    });
});
