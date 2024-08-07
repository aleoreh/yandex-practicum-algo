import { expect, describe } from "vitest";
import { it } from "@fast-check/vitest";
import fc from "fast-check";

import { h } from "./h";

const natArb = fc.integer({ min: 0 });

describe("h.js", () => {
  it.prop([natArb, natArb])("Складывает двоичные числа", (a, b) => {
    const expected = h.sumOfBinaries(a.toString(2), b.toString(2));

    expect(expected).toEqual((a + b).toString(2));
  });
});
