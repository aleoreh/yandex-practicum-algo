import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';

import { solveUnlined } from './code';

describe.only('N. Клумбы', () => {
    it('Проходит фиксированный тест №1', () => {
        const input = `4
7 8
7 8
2 3
6 10`;
        const output = `2 3
6 10`;

        const res = solveUnlined(input);

        expect(res).toEqual(output);
    });

    it('Проходит фиксированный тест №2', () => {
        const input = `4
2 3
5 6
3 4
3 4`;
        const output = `2 4
5 6`;

        const res = solveUnlined(input);

        expect(res).toEqual(output);
    });

    it('Проходит фиксированный тест №3', () => {
        const input = `6
1 3
3 5
4 6
5 6
2 4
7 10`;
        const output = `1 6
7 10`;

        const res = solveUnlined(input);

        expect(res).toEqual(output);
    });
});
