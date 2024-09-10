import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';

import { solveUnlined } from './code';

describe.only('C. Подпоследовательность', () => {
    it('Проходит фиксированный тест №1', () => {
        const input = `abc
ahbgdcu`;
        const output = `True`;

        const res = solveUnlined(input);

        expect(res).toEqual(output);
    });

    it('Проходит фиксированный тест №2', () => {
        const input = `abcp
ahpc`;
        const output = `False`;

        const res = solveUnlined(input);

        expect(res).toEqual(output);
    });
});
