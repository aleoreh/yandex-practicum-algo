if (process.env.REMOTE_JUDGE !== 'true') {
    class Node {
        constructor(value = null, next = null) {
            this.value = value;
            this.next = next;
        }
    }
}

function calculate(node) {
    let res = [];

    let currentNode = node;

    while (currentNode) {
        res.push(currentNode.value);
        currentNode = currentNode.next;
    }

    return res;
}

function solution(node) {
    const res = calculate(node);
    res.forEach((value) => {
        console.log(value);
    });
}

function test() {
    var node3 = new Node('node3');
    var node2 = new Node('node2', node3);
    var node1 = new Node('node1', node2);
    var node0 = new Node('node0', node1);
    solution(node0);
    /*
    Output is:
    node0
    node1
    node2
    node3
    */
}

export const moduleB = {
    calculate,
};
