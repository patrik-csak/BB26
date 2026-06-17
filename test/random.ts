import assert from 'node:assert/strict';
import {suite, test} from 'node:test';
import {random, range} from '../source/index.ts';

void suite('random', () => {
	void test('returns a valid string given only an upper bound', () => {
		const validLetters = range('AAA');

		for (let i = 0; i < 100_000; ++i) {
			assert.equal(validLetters.includes(random('ZZ')), true);
		}
	});

	void test('returns a valid string given both upper and lower bounds', () => {
		const validLetters = range('AA', 'AAA');

		for (let i = 0; i < 100_000; ++i) {
			assert.equal(validLetters.includes(random('AA', 'ZZ')), true);
		}
	});

	void test('throws TypeError for non-string input', () => {
		assert.throws(() => {
			// @ts-expect-error test
			random(1);
		}, TypeError);

		assert.throws(() => {
			// @ts-expect-error test
			random('A', 1);
		}, TypeError);
	});

	void test('throws RangeError for invalid bijective base-26 strings', () => {
		assert.throws(() => random(''), RangeError);
		assert.throws(() => random('a'), RangeError);
		assert.throws(() => random('A1'), RangeError);
		assert.throws(() => random('A', ''), RangeError);
		assert.throws(() => random('A', 'a'), RangeError);
		assert.throws(() => random('A', 'A1'), RangeError);
	});
});
