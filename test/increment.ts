import {expect, test} from 'vitest';
import {increment} from '../source/index.js';

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

for (const {from, to} of testCases) {
	test(`increments ${from} to ${to}`, () => {
		expect(increment(from)).toBe(to);
	});
}
