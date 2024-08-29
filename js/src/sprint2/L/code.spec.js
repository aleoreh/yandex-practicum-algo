import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { fibLastN } from './code';

describe('L. Фибоначчи по модулю', () => {
    it('Фиксированный тест', () => {
        expect(fibLastN(3, 1)).toEqual(3);
        expect(fibLastN(0, 1)).toEqual(1);
        expect(fibLastN(10, 2)).toEqual(89);
        expect(fibLastN(25, 6)).toEqual(121393);
        expect(fibLastN(1000000, 8)).toEqual(26937501);
    });
});
