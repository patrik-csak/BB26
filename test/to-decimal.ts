import assert from 'node:assert/strict';
import {suite, test} from 'node:test';

import {toDecimal} from '../source/index.ts';

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

void suite('toDecimal', () => {
	for (const {from, to} of testCases) {
		void test(`converts ${from} to ${to}`, () => {
			assert.equal(toDecimal(from), to);
		});
	}

	void test('throws TypeError for non-string input', () => {
		assert.throws(() => {
			// @ts-expect-error test
			toDecimal(1);
		}, TypeError);
	});

	void test('throws RangeError for invalid bijective base-26 strings', () => {
		assert.throws(() => toDecimal(''), RangeError);
		assert.throws(() => toDecimal('a'), RangeError);
		assert.throws(() => toDecimal('A1'), RangeError);
	});
});
