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

function getBinaryNumber(number) {
    if (number === 0) return "0"

    const res = []

    let q = number

    while (q !== 0) {
        const r = q % 2
        q = Math.floor(q / 2)

        res.unshift(r)
    }

    return res.join("")
}

function solve() {
    const n = readInt()
    process.stdout.write(`${getBinaryNumber(n)}`)
}

function readInt() {
    const n = Number(_inputLines[_curLine])
    _curLine++
    return n
}

function readLine() {
    const line = _inputLines[_curLine]
    _curLine++
    return line
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num))
    _curLine++
    return arr
}

