class Node {
    constructor(value = null, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

// E. Всё наоборот

if (process.env.REMOTE_JUDGE !== 'true') {
    class Node {
        constructor(value = null, next = null, prev = null) {
            this.value = value;
            this.next = next;
            this.prev = prev;
        }
    }
}

function isEnd(node) {
    return node === null || (node.value === null && node.next === null);
}

function cons(value, node) {
    const newNode = new Node(value, node);
    node.prev = newNode;
    return newNode;
}

function reverse(node) {
    let acc = new Node(node.value);
    let curNode = node;
    while (!isEnd(curNode)) {
        acc = cons(curNode.value, acc);
        curNode = curNode.next;
    }
    return acc;
}

function solution(node) {
    return reverse(node);
}

function test() {
    var node3 = new Node('node3');
    var node2 = new Node('node2', node3);
    var node1 = new Node('node1', node2);
    var node0 = new Node('node0', node1);
    node1.prev = node0;
    node2.prev = node1;
    node3.prev = node2;
    var newHead = solution(node0);
    /*
    result is newHead === node3
    node0.prev === node1
    node1.next === node0
    node1.prev === node2
    node2.next === node1
    node2.prev === node3
    node3.next === node2
    */
}

module.exports = {
    solution,
};
