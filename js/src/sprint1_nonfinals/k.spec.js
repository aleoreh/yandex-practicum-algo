import { expect, describe } from "vitest";
import { it } from "@fast-check/vitest";
import fc from "fast-check";

const moduleK = require("./k.js");

const arrArb = fc.array(fc.integer({ min: 0, max: 9 }), {
  minLength: 1,
  maxLength: 1000,
});
const kArb = fc.integer({ min: 0, max: 10000 });
const constArb = fc.constant(10e9);

describe("k.js", () => {
  it("Простой тест", () => {
    const res = moduleK.getSum([1, 1, 0, 0], 9900);
    expect([1, 1, 0, 0, 0]).toEqual(res);
  });
  it.prop([arrArb, kArb])("Сложение списочной формы с числом", (a, k) => {
    const res = moduleK.getSum(a, k);

    const expected = BigInt(a.join("")) + BigInt(k);

    expect(expected).toEqual(BigInt(res.join("")));
  });
});
