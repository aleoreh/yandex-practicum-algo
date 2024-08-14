import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { StackMax, createCommand } from './code';

let stack;

beforeEach(() => {
    stack = new StackMax();
});

describe('F. Стек - Max', () => {
    it('Проходит фиксированные тесты', () => {
        const commands =
            'get_max,push 7,pop,push -2,push -1,pop,get_max,get_max'.split(',');
        const res = commands
            .map(createCommand)
            .map((command) => command(stack));
        expect(res).toEqual(['None', null, '7', null, null, '-1', '-2', '-2']);
    });
});
