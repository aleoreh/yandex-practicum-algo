// C. Нелюбимое дело

let Node;

if (process.env.REMOTE_JUDGE !== 'true') {
    class Node_ {
        constructor(value = null, next = null) {
            this.value = value;
            this.next = next;
        }
    }
    Node = Node_;
}

function getIdx(node, index) {
    while (index) {
        node = node.next;
        index -= 1;
    }
    return node;
}

function cons(node, newNode) {
    return node === null ? newNode : new Node(node.value, newNode);
}

function deleteIdx(node, idx) {
    let acc = null;
    let i = 0;
    let currentNode = node;
    while (currentNode) {
        break;
    }
}

function solution(node, idx) {
    return deleteIdx(node, idx);
}

function test() {
    var node3 = new Node('node3');
    var node2 = new Node('node2', node3);
    var node1 = new Node('node1', node2);
    var node0 = new Node('node0', node1);
    var newHead = solution(node0, 1);
    // result is node0 -> node2 -> node3
}

export const moduleC = {
    solution,
};
