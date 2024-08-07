const _readline = require("readline")

const _reader = _readline.createInterface({
    input: process.stdin,
})

const _inputLines = []
let _curLine = 0

_reader.on("line", (line) => {
    _inputLines.push(line)
})

process.stdin.on("end", solve)

function checkParity(a, b, c) {
    const aIsEven = a % 2 === 0 ? 1 : 0
    const bIsEven = b % 2 === 0 ? 1 : 0
    const cIsEven = c % 2 === 0 ? 1 : 0

    const res = aIsEven + bIsEven + cIsEven

    return res === 0 || res === 3
}

function solve() {
    const inputNumbers = readArray()
    const a = inputNumbers[0]
    const b = inputNumbers[1]
    const c = inputNumbers[2]
    if (checkParity(a, b, c)) {
        process.stdout.write("WIN")
    } else {
        process.stdout.write("FAIL")
    }
}

function readInt() {
    const n = Number(_inputLines[_curLine])
    _curLine++
    return n
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num))
    _curLine++
    return arr
}

