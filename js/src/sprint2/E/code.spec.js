import { expect, describe, it, beforeEach } from 'vitest';

import { solution } from './code';

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
    node1.prev = node0;
    node2.prev = node1;
    node3.prev = node2;
});

describe('E. Всё наоборот', () => {
    it('Переворачивает список', () => {
        const res = solution(node0);

        expect(res.value).toEqual(node3.value);
        expect(res.next?.value).toEqual(node2.value);
        expect(res.next.prev.value).toEqual(node3.value);
    });
});
