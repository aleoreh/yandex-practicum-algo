const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines: string[] = [];
let _curLine = 0;

_reader.on('line', (line: string) => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

const NUMBER_OF_PLAYERS = 2;

function maxPoints(numberOfPlayers: number, k: number, arr: string[]): number {
    // проходим по массиву два раза;
    // в первый раз заполняем словарь, который будет состоять из клавиш,
    // не равных "." и количества каждой из них;
    // во второй - идём только по оригинальным ключам
    // и подсчитываем количество клавиш, не больших k * numberOfPlayers

    // в принципе можно подсчитать за один проход:
    // для этого мы бы увеличивали счётчик при увеличении значения ключа аккумулятора,
    // если бы оно выполняло соответствующее условие (<= k * numberOfPlayers);
    // однако в этом случае получили бы два разных действия в одном блоке,
    // что усложнило бы код

    let res = 0;
    const acc: Record<string, number> = {};

    for (const elem of arr) {
        if (elem === '.') continue;
        acc[elem] = (acc[elem] || 0) + 1;
    }

    // имеем словарь acc: {key: count}

    for (let key in acc) {
        res += acc[key] <= k * numberOfPlayers ? 1 : 0;
    }

    return res;
}

function maxPoints_Onm(
    numberOfPlayers: number,
    k: number,
    arr: string[],
): number {
    // считаем, сколько элементов каждого достоинства есть в массиве;
    // если их больше нуля и меньше допустимого количества нажатий на обоих
    // игроков, то прибавляем одно очко
    return [...Array(9).keys()]
        .map((x) => x + 1)
        .reduce((acc, nominal) => {
            const sameNominalCount = arr.filter(
                (key) => key === `${nominal}`,
            ).length;
            const curPoints =
                sameNominalCount > 0 && sameNominalCount <= k * numberOfPlayers
                    ? 1
                    : 0;
            return acc + curPoints;
        }, 0);
}

function solve() {
    const n = readInt();
    const inputs = [] as string[][];
    for (let i = 0; i < 4; i++) {
        const input = readArray();
        inputs.push(input);
    }
    process.stdout.write(
        `${maxPoints(NUMBER_OF_PLAYERS, n, inputs.join('').split(''))}`,
    );
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim().split(' ');
    _curLine++;
    return arr;
}

export const moduleB = {
    NUMBER_OF_PLAYERS,
    maxPoints,
};
