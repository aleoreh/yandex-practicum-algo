import { expect, describe, it } from 'vitest';

import { moduleB } from './code';

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

describe('B. Список дел', () => {
    it('Получает список значений узлов', () => {
        const node3 = new Node('node3');
        const node2 = new Node('node2', node3);
        const node1 = new Node('node1', node2);
        const node0 = new Node('node0', node1);
        const res = moduleB.calculate(node0);

        expect(res).toEqual([
            node0.value,
            node1.value,
            node2.value,
            node3.value,
        ]);
    });
});
