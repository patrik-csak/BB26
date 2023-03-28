import test from 'ava';
import {toDecimal} from '../source/index.js';

type TestCase = {
	from: string;
	to: number;
};

const testCases: TestCase[] = [
	{from: 'A', to: 1},
	{from: 'B', to: 2},
	{from: 'Z', to: 26},
	{from: 'AA', to: 27},
	{from: 'AB', to: 28},
	{from: 'AC', to: 29},
];

for (const {from, to} of testCases) {
	test(`converts ${from} to ${to}`, (t) => {
		t.is(toDecimal(from), to);
	});
}

test('throws for non-upper-case character', (t) => {
	t.throws(() => toDecimal('a'));
});
