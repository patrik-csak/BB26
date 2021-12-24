import test from 'ava';
import increment from '../source/increment';

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
	{from: 'AAB', to: 'AAC'}
];

for (const {from, to} of testCases) {
	test(`increments ${from} to ${to}`, (t) => {
		t.is(increment(from), to);
	});
}

test('throws if passed non-bijective base-26 string', (t) => {
	t.throws(() => increment('abc123'));
});
