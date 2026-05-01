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

test('throws TypeError for non-string input', () => {
	expect(() => {
		// @ts-expect-error test
		range(1);
	}).toThrow(TypeError);

	expect(() => {
		// @ts-expect-error test
		range('A', 1);
	}).toThrow(TypeError);
});

test('throws RangeError for invalid bijective base-26 strings', () => {
	expect(() => range('')).toThrow(RangeError);
	expect(() => range('a')).toThrow(RangeError);
	expect(() => range('A1')).toThrow(RangeError);
	expect(() => range('A', '')).toThrow(RangeError);
	expect(() => range('A', 'a')).toThrow(RangeError);
	expect(() => range('A', 'A1')).toThrow(RangeError);
});
