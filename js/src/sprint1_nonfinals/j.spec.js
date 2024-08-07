import { expect, describe } from "vitest";
import { it } from "@fast-check/vitest";
import fc from "fast-check";

const j = require("./j.js");

const natArb = fc.integer({ min: 2, max: 1000000000 });
const constArb = fc.constant(10e9)

describe("j.js", () => {
  it.skip.prop([natArb])("Выполняет факторизацию числа", (a) => {
    const factors = j.factorize(a);

    const expected = factors.reduce((acc, x) => {
      return acc * x;
    }, 1);

    expect(expected).toEqual(a);
  });
});
