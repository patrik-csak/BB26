import assert from 'node:assert/strict';
import {suite, test} from 'node:test';
import {toBb26} from '../source/index.ts';

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

void suite('toBb26', () => {
	for (const {from, to} of testCases) {
		void test(`converts ${from} to ${to}`, () => {
			assert.equal(toBb26(from), to);
		});
	}

	void test('throws TypeError for non-number input', () => {
		assert.throws(() => {
			// @ts-expect-error test
			toBb26('1');
		}, TypeError);
	});

	void test('throws RangeError for invalid numbers', () => {
		assert.throws(() => toBb26(-1), RangeError);
		assert.throws(() => toBb26(0), RangeError);
		assert.throws(() => toBb26(NaN), RangeError);
		assert.throws(() => toBb26(1.5), RangeError);
		assert.throws(() => toBb26(Number.MAX_SAFE_INTEGER + 1), RangeError);
	});
});
