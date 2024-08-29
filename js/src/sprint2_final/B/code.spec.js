import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { RPNCalculator, createCommand } from './code';

describe('B. Калькулятор', () => {
    it('Проходит фиксированный тест №1', () => {
        const calc = new RPNCalculator();
        const commands = ['2', '1', '+', '3', '*'];
        commands.map(createCommand).forEach((command) => command(calc));
        expect(calc.result).toEqual(9);
    });
});
