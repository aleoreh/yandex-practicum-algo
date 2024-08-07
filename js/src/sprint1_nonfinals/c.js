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

function getNeighbours(matrix, row, col) {
    const res = []

    const rowInc = row + 1
    const rowDec = row - 1
    const colInc = col + 1
    const colDec = col - 1
    const hSize = matrix.length
    const vSize = matrix[0].length

    rowInc < hSize && res.push(matrix[rowInc][col])
    colDec > -1 && res.push(matrix[row][colDec])
    rowDec > -1 && res.push(matrix[rowDec][col])
    colInc < vSize && res.push(matrix[row][colInc])

    res.sort((x, y) => x - y)

    return res
}

function solve() {
    const rows = readInt()
    const cols = readInt()
    const matrix = readMatrix(rows)
    const rowId = readInt()
    const colId = readInt()

    process.stdout.write(`${getNeighbours(matrix, rowId, colId).join(" ")}`)
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

function readMatrix(rowsCount) {
    var arr = []
    for (let i = 0; i !== rowsCount; i++) {
        arr.push(readArray())
    }
    return arr
}

