import {expect, test} from 'vitest';

import {random, range} from '../source/index.js';

test('returns a valid string given only an upper bound', () => {
	const validLetters = range('AAA');

	for (let i = 0; i < 100_000; ++i) {
		expect(validLetters.includes(random('ZZ'))).toBe(true);
	}
});

test('returns a valid string given both upper and lower bounds', () => {
	const validLetters = range('AA', 'AAA');

	for (let i = 0; i < 100_000; ++i) {
		expect(validLetters.includes(random('AA', 'ZZ'))).toBe(true);
	}
});

test('throws TypeError for non-string input', () => {
	expect(() => {
		// @ts-expect-error test
		random(1);
	}).toThrow(TypeError);

	expect(() => {
		// @ts-expect-error test
		random('A', 1);
	}).toThrow(TypeError);
});

test('throws RangeError for invalid bijective base-26 strings', () => {
	expect(() => random('')).toThrow(RangeError);
	expect(() => random('a')).toThrow(RangeError);
	expect(() => random('A1')).toThrow(RangeError);
	expect(() => random('A', '')).toThrow(RangeError);
	expect(() => random('A', 'a')).toThrow(RangeError);
	expect(() => random('A', 'A1')).toThrow(RangeError);
});
