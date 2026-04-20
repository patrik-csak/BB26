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
