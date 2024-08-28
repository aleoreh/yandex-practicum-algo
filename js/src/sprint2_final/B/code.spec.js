import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { RPNOperations, RPNCalculator } from './code';

describe('B. Калькулятор', () => {
    it('Проходит фиксированный тест №1', () => {
        const calc = new RPNCalculator(RPNOperations);

        const commands = ['2', '1', '+', '3', '*'];

        calc.execute(commands);

        expect(calc.result).toEqual(9);
    });
});
