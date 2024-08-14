import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { StackMaxEffective, createCommand } from './code';

let stack;

beforeEach(() => {
    stack = new StackMaxEffective();
});

describe('F. Стек - Max', () => {
    it('Проходит фиксированные тесты', () => {
        const commands = [
            'pop',
            'pop',
            'top',
            'push 4',
            'push -5',
            'top',
            'push 7',
            'pop',
            'pop',
            'get_max',
            'top',
            'pop',
            'get_max',
        ];
        const res = commands
            .map(createCommand)
            .map((command) => command(stack));
        expect(res).toEqual([
            'error',
            'error',
            'error',
            null,
            null,
            '-5',
            null,
            null,
            null,
            '4',
            '4',
            null,
            'None',
        ]);
    });
});
