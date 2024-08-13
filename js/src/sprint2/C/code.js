// C. Нелюбимое дело

if (process.env.REMOTE_JUDGE !== 'true') {
    class Node {
        constructor(value = null, next = null) {
            this.value = value;
            this.next = next;
        }
    }
}

function drop(idx, node) {
    if (node.value === null) return node;

    let curNode = node;
    let i = 0;
    while (i < idx) {
        curNode = curNode.next ?? new Node();
        i++;
    }
    return curNode;
}

function cons(value, node) {
    return new Node(value, node);
}

function reverse(node) {
    let acc = new Node();
    let curNode = node;
    while (curNode?.value) {
        acc = new Node(curNode.value, acc);
        curNode = curNode.next;
    }
    return acc;
}

function deleteAt(node, idx) {
    let acc = new Node();
    let i = 0;
    let curNode = node;
    while (curNode?.value) {
        acc = i === idx ? acc : cons(curNode.value, acc);
        curNode = curNode.next;
        i++;
    }
    return reverse(acc);
}

function deleteAtMut(node, idx) {
    if (idx === 0) return node.next;

    const res = drop(idx - 1, node);
    res.next = res?.next?.next || new Node();

    return node;
}

function solution(node, idx) {
    return deleteAt(node, idx);
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
