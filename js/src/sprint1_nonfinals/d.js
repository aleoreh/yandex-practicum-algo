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

function getWeatherRandomness(temperatures) {
    let res = 0

    for (let i = 0; i < temperatures.length; i++) {
        const cur = temperatures[i]
        const prev = i === 0 ? Number.NEGATIVE_INFINITY : temperatures[i - 1]
        const next =
            i === temperatures.length - 1
                ? Number.NEGATIVE_INFINITY
                : temperatures[i + 1]

        if (cur > prev && cur > next) {
            res++
        }
    }

    return res
}

function solve() {
    const n = readInt()
    const temperatures = readArray()
    process.stdout.write(`${getWeatherRandomness(temperatures)}`)
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

