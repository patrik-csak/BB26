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

test('throws TypeError for non-string input', () => {
	expect(() => {
		// @ts-expect-error test
		toDecimal(1);
	}).toThrow(TypeError);
});

test('throws RangeError for invalid bijective base-26 strings', () => {
	expect(() => toDecimal('')).toThrow(RangeError);
	expect(() => toDecimal('a')).toThrow(RangeError);
	expect(() => toDecimal('A1')).toThrow(RangeError);
});
