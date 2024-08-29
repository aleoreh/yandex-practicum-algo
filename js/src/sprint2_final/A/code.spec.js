import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { Dequeue, createCommand } from './code';

describe('A. Дек', () => {
    it('Проходит фиксированный тест №1', () => {
        const deque = new Dequeue(4);
        const commands = [
            'push_front 861',
            'push_front -819',
            'pop_back',
            'pop_back',
        ];
        const res = commands
            .map(createCommand)
            .map((command) => command(deque));
        expect(res).toEqual([null, null, 861, -819]);
    });

    it('Проходит фиксированный тест №2', () => {
        const deque = new Dequeue(10);
        const commands = [
            'push_front -855',
            'push_front 0',
            'pop_back',
            'pop_back',
            'push_back 844',
            'pop_back',
            'push_back 823',
        ];
        const res = commands
            .map(createCommand)
            .map((command) => command(deque));
        expect(res).toEqual([null, null, -855, 0, null, 844, null]);
    });
});
