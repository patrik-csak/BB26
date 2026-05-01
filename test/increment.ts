import {expect, test} from 'vitest';

import {increment} from '../source/index.js';

type TestCase = {
	from: string;
	to: string;
};

const testCases: TestCase[] = [
	{from: 'A', to: 'B'},
	{from: 'Z', to: 'AA'},
	{from: 'ZZ', to: 'AAA'},
	{from: 'AA', to: 'AB'},
	{from: 'AB', to: 'AC'},
	{from: 'AAA', to: 'AAB'},
	{from: 'AAB', to: 'AAC'},
];

for (const {from, to} of testCases) {
	test(`increments ${from} to ${to}`, () => {
		expect(increment(from)).toBe(to);
	});
}

test('throws TypeError for non-string input', () => {
	expect(() => {
		// @ts-expect-error test
		increment(1);
	}).toThrow(TypeError);
});

test('throws RangeError for invalid bijective base-26 strings', () => {
	expect(() => increment('')).toThrow(RangeError);
	expect(() => increment('a')).toThrow(RangeError);
	expect(() => increment('A1')).toThrow(RangeError);
});
