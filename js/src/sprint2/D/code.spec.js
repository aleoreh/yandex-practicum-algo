import { expect, describe, it, beforeEach } from 'vitest';

import { moduleD } from './code';

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

describe('D. Заботливая мама', () => {
    it('Находит индекс элемента', () => {
        const res = moduleD.solution(node0, 'node2');

        expect(res).toEqual(2);
    });

    it('Не находит несуществующий элемент', () => {
        const res = moduleD.solution(node0, 'some value');

        expect(res).toEqual(-1);
    });
});
