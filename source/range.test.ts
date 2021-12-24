import range from './range';

describe('range', () => {
	test('Should work with end', () => {
		expect(range('A')).toEqual([]);
		expect(range('B')).toEqual(['A']);
		expect(range('C')).toEqual(['A', 'B']);
		expect(range('AB')).toContain('AA');
	});

	test('Should work with start and end', () => {
		expect(range('B', 'C')).toEqual(['B']);
		expect(range('B', 'D')).toEqual(['B', 'C']);
		expect(range('ZZ', 'AAC')).toEqual(['ZZ', 'AAA', 'AAB']);
	});

	test('Should throw if given a string with a non-upper-case letter', () => {
		expect(() => range('a')).toThrow();
	});
});
