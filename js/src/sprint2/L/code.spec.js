import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { fib } from './code';

describe('L. Фибоначчи по модулю', () => {
    it('Фиксированный тест', () => {
        expect(fib(3)).toEqual(3);
        expect(fib(0)).toEqual(1);
        expect(fib(10)).toEqual(89);
        expect(fib(25)).toEqual(121393);
    });
});
