import { it } from '@fast-check/vitest';
import { describe, expect } from 'vitest';
import fc from 'fast-check';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

import { solveUnlined, findStart, ringSearch } from './code';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

const testCases = [
    [
        `9
5
19 21 100 101 1 4 5 7 12
`,
        `6`,
    ],
    [
        `2
1
5 1
`,
        `1`,
    ],
];

const arrayWithValueToSearch = fc
    .uniqueArray(fc.integer(), { minLength: 1, maxLength: 10000 })
    .map((arr) => [
        arr,
        Math.floor(Math.random() * arr.length),
        Math.floor(Math.random() * arr.length),
    ]);

function shiftArray(arr, offset) {
    const res = [];
    for (let i = arr.length - offset; i < arr.length; i++) {
        res.push(arr[i]);
    }
    for (let i = 0; i < arr.length - offset; i++) {
        res.push(arr[i]);
    }
    return res;
}

describe('Спринт 3. A. Поиск в сломанном массиве', () => {
    it.prop([arrayWithValueToSearch])(
        'Находит начало массива',
        ([correctArr, searchIndex, offset]) => {
            correctArr.sort((x, y) => x - y);
            const offsetArr = shiftArray(correctArr, offset);
            const foundStart = findStart(offsetArr);
            expect(foundStart).toEqual(offset);
        },
    );

    it.skip.prop([arrayWithValueToSearch])(
        'Производит поиск в смещённом массиве',
        ([correctArr, searchIndex, offset]) => {
            correctArr.sort((x, y) => x - y);
            const offsetArr = shiftArray(correctArr, offset);
            const searchValue = correctArr[searchIndex];
            const foundIndex = ringSearch(offsetArr, offset, searchValue);
            expect(offsetArr[foundIndex]).toEqual(searchValue);
        },
    );

    testCases.forEach(([input, expected], i) => {
        it(`Тест №${i}`, () => {
            expect(solveUnlined(input)).toEqual(expected);
        });
    });
});
