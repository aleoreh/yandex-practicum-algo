if (process.env.REMOTE_JUDGE !== 'true') {
    class Node {
        constructor(value = null, next = null) {
            this.value = value;
            this.next = next;
        }
    }
}

function isEnd(node) {
    return node === null || (node.value === null && node.next === null);
}

function find(node, elem) {
    let res = -1;
    let current = node;
    let i = 0;
    while (!isEnd(current)) {
        if (current.value === elem) {
            res = i;
            break;
        }
        current = current.next;
        i++;
    }
    return res;
}

function solution(node, elem) {
    return find(node, elem);
}

function test() {
    var node3 = new Node('node3');
    var node2 = new Node('node2', node3);
    var node1 = new Node('node1', node2);
    var node0 = new Node('node0', node1);
    var idx = solution(node0, 'node2');
    // result is idx === 2
}

export const moduleD = {
    solution,
};
