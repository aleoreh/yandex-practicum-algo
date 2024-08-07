import { expect, describe } from "vitest";
import { it } from "@fast-check/vitest";
import fc from "fast-check";

import { i } from "./i";

const E = 0.0001;
const natArb = fc.integer({ min: 1, max: 10000 });

describe("i.js", () => {
  it.prop([natArb])(
    "Определяет, является ли положительное целое число степенью четырёх",
    (a) => {
      const expected = i.isPowerOfFour(a);

      const answer =
        Math.abs(
          Math.round(Math.log(a) / Math.log(4)) - Math.log(a) / Math.log(4)
        ) < E;

      expect(expected).toEqual(answer);
    }
  );
});
