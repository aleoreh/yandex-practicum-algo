import { expect, describe } from "vitest";
import { it } from "@fast-check/vitest";
import fc from "fast-check";

import { moduleA } from "./a";

const arb = fc
    .array(fc.integer({ min: 0, max: 10e9 }), { maxLength: 10e6 })
    .filter((arr) => arr.filter((x) => x === 0).length > 0);

describe("A. Ближайший ноль", () => {
    it("Проходит тесты на конкретных значениях", () => {
        expect([0, 1, 2, 1, 0]).toEqual(
            moduleA.getNearestZero([0, 1, 4, 9, 0])
        );
        expect([0, 1, 2, 3, 4, 5]).toEqual(
            moduleA.getNearestZero([0, 7, 9, 4, 8, 20])
        );
        expect([0]).toEqual(moduleA.getNearestZero([0]));
        expect([0, 0]).toEqual(moduleA.getNearestZero([0, 0]));
        expect([0, 1, 0]).toEqual(moduleA.getNearestZero([0, 1, 0]));
        expect([2, 1, 0]).toEqual(moduleA.getNearestZero([1, 2, 0]));
        expect([0, 1, 1, 0]).toEqual(moduleA.getNearestZero([0, 1, 2, 0]));
        expect([2, 1, 0, 0, 1, 2, 3]).toEqual(
            moduleA.getNearestZero([1, 2, 0, 0, 3, 4, 5])
        );
        expect([2, 1, 0, 1, 1, 0]).toEqual(
            moduleA.getNearestZero([1, 2, 0, 3, 4, 0])
        );
        expect([0, 1, 1, 0, 1, 2]).toEqual(
            moduleA.getNearestZero([0, 1, 2, 0, 3, 4])
        );
    });

    it.prop([arb])("Длина исходного массива равна длине результата", (arr) => {
        const res = moduleA.getNearestZero(arr);

        expect(arr.length).toEqual(res.length);
    });

    it.prop([arb])("Нулевые расстояния находятся на пустых местах", (arr) => {
        const res = moduleA.getNearestZero(arr);

        for (let i = 0; i < arr.length; i++) {
            if (res[i] !== 0) continue;

            expect(arr[i]).toEqual(res[i]);
        }
    });

    it.prop([arb])(
        "Количество нулевых расстояний равно количеству пустых участков",
        (arr) => {
            const res = moduleA.getNearestZero(arr);

            expect(arr.filter((x) => x === 0).length).toEqual(
                res.filter((x) => x === 0).length
            );
        }
    );

    it.prop([arb])(
        "Расстояния в соседних клетках отличаются не более, чем на единицу",
        (arr) => {
            const res = moduleA.getNearestZero(arr);

            for (let i = 1; i < arr.length - 1; i++) {
                expect(1).toBeGreaterThanOrEqual(Math.abs(res[i] - res[i - 1]));
                expect(1).toBeGreaterThanOrEqual(Math.abs(res[i] - res[i + 1]));
            }
        }
    );

    it.prop([arb])("Не должно остаться незаполненных значений", (arr) => {
        const res = moduleA.getNearestZero(arr);

        expect(res.every((x) => !isNaN(x) && isFinite(x))).toEqual(true);
    });
});
