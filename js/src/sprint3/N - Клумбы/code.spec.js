import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';

import { solveUnlined } from './code';

describe.only('N. Клумбы', () => {
    it('Проходит фиксированный тест №1', () => {
        const input = `4
7 8
7 8
2 3
6 10
`;
        const output = `2 3
6 10
`;

        const res = solveUnlined(input);

        expect(res).toEqual(output);
    });
});
