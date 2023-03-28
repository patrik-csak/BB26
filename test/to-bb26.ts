import test from 'ava';
import {toBb26} from '../source/index.js';

type TestCase = {
	from: number;
	to: string;
};

const testCases: TestCase[] = [
	{from: 1, to: 'A'},
	{from: 2, to: 'B'},
	{from: 26, to: 'Z'},
	{from: 27, to: 'AA'},
	{from: 28, to: 'AB'},
	{from: 29, to: 'AC'},
];

for (const {from, to} of testCases) {
	test(`converts ${from} to ${to}`, (t) => {
		t.is(toBb26(from), to);
	});
}
