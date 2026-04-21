import {expect, test} from 'vitest';

import {toDecimal} from '../source/index.js';

type TestCase = {
	from: string;
	to: number;
};

const testCases: TestCase[] = [
	{from: 'A', to: 1},
	{from: 'B', to: 2},
	{from: 'Z', to: 26},
	{from: 'AA', to: 27},
	{from: 'AB', to: 28},
	{from: 'AC', to: 29},
];

for (const {from, to} of testCases) {
	test(`converts ${from} to ${to}`, () => {
		expect(toDecimal(from)).toBe(to);
	});
}

test('throws for non-upper-case character', () => {
	expect(() => toDecimal('a')).toThrow();
});
