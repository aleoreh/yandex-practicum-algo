import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

import { solveUnlined } from './code';

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

describe('Спринт 3. A. Поиск в сломанном массиве', () => {
    testCases.forEach(([input, expected], i) => {
        it(`Тест №${i}`, () => {
            expect(solveUnlined(input)).toEqual(expected);
        });
    });
});
