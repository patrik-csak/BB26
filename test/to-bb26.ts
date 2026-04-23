import {expect, test} from 'vitest';

import {toBb26} from '../source/index.js';

type TestCase = {
	from: number;
	to: string;
};

const testCases: TestCase[] = [
	{from: 1, to: 'A'},
	{from: 2, to: 'B'},
	{from: 26, to: 'Z'},
	{from: 27, to: 'AA'},
	{from: 28, to: 'AB'},
	{from: 29, to: 'AC'},
];

for (const {from, to} of testCases) {
	test(`converts ${from} to ${to}`, () => {
		expect(toBb26(from)).toBe(to);
	});
}

test('throws TypeError for non-number input', () => {
	expect(() => {
		// @ts-expect-error test
		toBb26('1');
	}).toThrow(TypeError);
});

test('throws RangeError for invalid numbers', () => {
	expect(() => toBb26(-1)).toThrow(RangeError);
	expect(() => toBb26(0)).toThrow(RangeError);
	expect(() => toBb26(Number.NaN)).toThrow(RangeError);
	expect(() => toBb26(1.5)).toThrow(RangeError);
});
