import test from 'ava';
import range from '../source/range';

test('works with end', (t) => {
	t.deepEqual(range('A'), []);
	t.deepEqual(range('B'), ['A']);
	t.deepEqual(range('C'), ['A', 'B']);
	t.assert(range('AB').includes('AA'));
});

test('works with start and end', (t) => {
	t.deepEqual(range('B', 'C'), ['B']);
	t.deepEqual(range('B', 'D'), ['B', 'C']);
	t.deepEqual(range('ZZ', 'AAC'), ['ZZ', 'AAA', 'AAB']);
});

test('throws if given a string with a non-upper-case letter', (t) => {
	t.throws(() => range('a'));
});
