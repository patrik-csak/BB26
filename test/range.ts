import {expect, test} from 'vitest';
import {range} from '../source/index.js';

test('works with end', () => {
	expect(range('A')).toEqual([]);
	expect(range('B')).toEqual(['A']);
	expect(range('C')).toEqual(['A', 'B']);
	expect(range('AB').includes('AA')).toBe(true);
});

test('works with start and end', () => {
	expect(range('B', 'C')).toEqual(['B']);
	expect(range('B', 'D')).toEqual(['B', 'C']);
	expect(range('ZZ', 'AAC')).toEqual(['ZZ', 'AAA', 'AAB']);
});

test('throws if given a string with a non-upper-case letter', () => {
	expect(() => range('a')).toThrow();
});
