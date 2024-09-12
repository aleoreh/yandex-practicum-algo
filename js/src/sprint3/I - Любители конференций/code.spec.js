import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';
import { it } from '@fast-check/vitest';
import fc from 'fast-check';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

import { solveUnlined } from './code';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const testCases = [
    [
        `7
1 2 3 1 2 3 4
3`,
        `1 2 3`,
    ],
    [
        `6
1 1 1 2 2 3
1`,
        `1`,
    ],
];

describe('Спринт 3. I. Любители конференций', () => {
    testCases.forEach(([input, expected], i) => {
        it(`Тест №${i}`, () => {
            expect(solveUnlined(input)).toEqual(expected);
        });
    });
});
