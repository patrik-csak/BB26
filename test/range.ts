import assert from 'node:assert/strict';
import {suite, test} from 'node:test';
import {range} from '../source/index.ts';

void suite('range', () => {
	void test('works with end', () => {
		assert.deepEqual(range('A'), []);
		assert.deepEqual(range('B'), ['A']);
		assert.deepEqual(range('C'), ['A', 'B']);
		assert.equal(range('AB').includes('AA'), true);
	});

	void test('works with start and end', () => {
		assert.deepEqual(range('B', 'C'), ['B']);
		assert.deepEqual(range('B', 'D'), ['B', 'C']);
		assert.deepEqual(range('ZZ', 'AAC'), ['ZZ', 'AAA', 'AAB']);
	});

	void test('throws TypeError for non-string input', () => {
		assert.throws(() => {
			// @ts-expect-error test
			range(1);
		}, TypeError);

		assert.throws(() => {
			// @ts-expect-error test
			range('A', 1);
		}, TypeError);
	});

	void test('throws RangeError for invalid bijective base-26 strings', () => {
		assert.throws(() => range(''), RangeError);
		assert.throws(() => range('a'), RangeError);
		assert.throws(() => range('A1'), RangeError);
		assert.throws(() => range('A', ''), RangeError);
		assert.throws(() => range('A', 'a'), RangeError);
		assert.throws(() => range('A', 'A1'), RangeError);
	});
});
