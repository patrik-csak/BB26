import toBb26 from './to-bb26';

describe('toBb26', () => {
	test('Should convert 1 to A', () => {
		expect(toBb26(1)).toBe('A');
	});

	test('Should convert 2 to B', () => {
		expect(toBb26(2)).toBe('B');
	});

	test('Should convert 26 to Z', () => {
		expect(toBb26(26)).toBe('Z');
	});

	test('Should convert 27 to AA', () => {
		expect(toBb26(27)).toBe('AA');
	});

	test('Should convert 28 to AB', () => {
		expect(toBb26(28)).toBe('AB');
	});

	test('Should convert 29 to AC', () => {
		expect(toBb26(29)).toBe('AC');
	});
});
