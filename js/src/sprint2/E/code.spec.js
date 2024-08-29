import { expect, describe, it, beforeEach } from 'vitest';

import { solution, cons, reverse } from './code';

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function print(head) {
    let res = [];
    let node = head;
    while (node) {
        res.push(node.value);
        node = node.next;
    }
    return `[ ${res.join(', ')} ]`;
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
    it('Помещает элемент в голову списка', () => {
        const res = cons('newValue', node0);
        expect(print(res)).toEqual('[ newValue, node0, node1, node2, node3 ]');
    });

    it('Реверс списка из одного элемента не меняет его', () => {
        const init = cons(0, null);
        const res = reverse(init);
        expect(print(res)).toEqual(print(init));
    });

    it('Переворачивает список', () => {
        const res = solution(node0);

        expect(res.value).toEqual(node3.value);
        expect(res.next?.value).toEqual(node2.value);
        expect(res.next.prev.value).toEqual(node3.value);
    });
});
