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

function isPalindrome(line) {
    let l = 0
    let r = line.length - 1

    while (l <= r) {
        const lchar = line[l]
        const lIsLetterOrCypher =
            lchar.toLowerCase() !== lchar.toUpperCase() ||
            (lchar >= "0" && lchar <= "9")
        if (!lIsLetterOrCypher) {
            l++
            continue
        }

        const rchar = line[r]
        const rIsLetterOrCypher =
            rchar.toLowerCase() !== rchar.toUpperCase() ||
            (rchar >= "0" && rchar <= "9")
        if (!rIsLetterOrCypher) {
            r--
            continue
        }

        if (line[l].toLowerCase() !== line[r].toLowerCase()) return false
        l++
        r--
    }

    return true
}

function solve() {
    const line = readLine()
    if (isPalindrome(line)) {
        console.log("True")
    } else {
        console.log("False")
    }
}

function readLine() {
    const line = _inputLines[_curLine]
    _curLine++
    return line
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

