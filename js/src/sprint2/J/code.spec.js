import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { ListQueue, Vertex } from './code';

let queue;

beforeEach(() => {
    queue = new ListQueue();
});

describe('J. Списочная очередь', () => {
    it('Фиксированный тест 1', () => {
        queue.put(-34);
        queue.put(-23);

        expect(queue.get()).toEqual(-34);

        expect(queue.size()).toEqual(1);

        expect(queue.get()).toEqual(-23);

        expect(queue.size()).toEqual(0);

        expect(queue.get()).toBeInstanceOf(Error);

        expect(queue.get()).toBeInstanceOf(Error);

        queue.put(80);

        expect(queue.size()).toEqual(1);
    });
});
