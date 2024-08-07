import { expect, describe } from "vitest";
import { it } from "@fast-check/vitest";
import fc from "fast-check";

import { moduleB } from "./b";

const kArb = fc.integer({ min: 1, max: 5 });
const arrArb = fc.array(
    fc.integer({ min: 0, max: 9 }).map((x) => (x === 0 ? "." : x.toString())),
    { minLength: 12, maxLength: 12 }
);

describe("B. Ловкость рук", () => {
    it("Проходит тесты на конкретных значениях", () => {
        expect(2).toEqual(
            moduleB.maxPoints(moduleB.NUMBER_OF_PLAYERS, 3, [
                "1",
                "2",
                "3",
                "1",
                "2",
                ".",
                ".",
                "2",
                "2",
                ".",
                ".",
                "2",
                "2",
                ".",
                ".",
                "2",
            ])
        );

        expect(1).toEqual(
            moduleB.maxPoints(moduleB.NUMBER_OF_PLAYERS, 4, [
                "1",
                "1",
                "1",
                "1",
                "9",
                "9",
                "9",
                "9",
                "1",
                "1",
                "1",
                "1",
                "9",
                "9",
                "1",
                "1",
            ])
        );

        expect(0).toEqual(
            moduleB.maxPoints(moduleB.NUMBER_OF_PLAYERS, 4, [
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
                "1",
            ])
        );
    });

    it.prop([kArb, arrArb])("0 <= количество очков <= 9", (k, arr) => {
        const res = moduleB.maxPoints(moduleB.NUMBER_OF_PLAYERS, k, arr);

        expect(res).toBeGreaterThanOrEqual(0);
        expect(res).toBeLessThanOrEqual(9);
    });
});
