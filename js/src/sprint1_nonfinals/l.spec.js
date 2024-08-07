import { expect, describe } from "vitest";
import { it } from "@fast-check/vitest";
import fc from "fast-check";

const moduleL = require("./l.js");

/**
 * https://stackoverflow.com/a/37580979
 */
function permute(permutation) {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const fac10 = 3628800;

const arb = fc
  .tuple(
    fc.string({ minLength: 1, maxLength: 10 }),
    fc.integer({ min: 1, max: fac10 }),
    fc.char(),
    fc.integer({ min: 1, max: 10 })
  )
  .map(([str, n, c, posValue]) => {
    const permutatedArr = permute(str.split(""));
    const permutatedItemArr =
      permutatedArr[Math.ceil((permutatedArr.length / fac10) * n) - 1];
    const pos = Math.ceil((permutatedArr.length / 10) * posValue) - 1;
    const permStrWithChar = permutatedItemArr.toSpliced(pos, 0, c).join("");
    return [str, permStrWithChar, c];
  });

describe("L. Лишняя буква", () => {
  it.prop([arb])("Находит лишнюю букву в изменённой строке", ([s, t, c]) => {
    const res = moduleL.getExcessiveLetter(s, t);

    expect(res).toEqual(c);
  });
});
