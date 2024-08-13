import { expect, describe, it, beforeEach } from 'vitest';

import { moduleC } from './code';

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

let node0;
let node1;
let node2;
let node3;

beforeEach(() => {
    node3 = new Node('node3');
    node2 = new Node('node2', node3);
    node1 = new Node('node1', node2);
    node0 = new Node('node0', node1);
});

describe('C. Нелюбимое дело', () => {
    it('Удаляет узел 1 из списка', () => {
        const res = moduleC.solution(node0, 1);

        expect(res.value).toEqual(node0.value);
        expect(res.next.value).toEqual(node2.value);
        expect(res.next.next.value).toEqual(node3.value);
    });

    it('Удаляет узел 2 из списка', () => {
        const res = moduleC.solution(node0, 2);

        expect(res.value).toEqual(node0.value);
        expect(res.next.value).toEqual(node1.value);
        expect(res.next.next.value).toEqual(node3.value);
    });

    it('Удаляет узел 3 из списка', () => {
        const res = moduleC.solution(node0, 3);

        expect(res.value).toEqual(node0.value);
        expect(res.next.value).toEqual(node1.value);
        expect(res.next.next.value).toEqual(node2.value);
        expect(res.next.next.next).toEqual(new Node());
    });
});
