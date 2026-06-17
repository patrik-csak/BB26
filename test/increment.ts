import assert from 'node:assert/strict';
import {suite, test} from 'node:test';
import {increment} from '../source/index.ts';

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

void suite('increment', () => {
	for (const {from, to} of testCases) {
		void test(`increments ${from} to ${to}`, () => {
			assert.equal(increment(from), to);
		});
	}

	void test('throws TypeError for non-string input', () => {
		assert.throws(() => {
			// @ts-expect-error test
			increment(1);
		}, TypeError);
	});

	void test('throws RangeError for invalid bijective base-26 strings', () => {
		assert.throws(() => increment(''), RangeError);
		assert.throws(() => increment('a'), RangeError);
		assert.throws(() => increment('A1'), RangeError);
	});
});
