import { expect, describe, beforeEach } from 'vitest';
import { it } from '@fast-check/vitest';

import { transpose } from './code';

describe('A. Мониторинг', () => {
    it('Фиксированный тест', () => {
        const res = transpose([
            [1, 2, 3],
            [0, 2, 6],
            [7, 4, 1],
            [2, 7, 0],
        ]);

        expect(res).toEqual([
            [1, 0, 7, 2],
            [2, 2, 4, 7],
            [3, 6, 1, 0],
        ]);
    });
});
