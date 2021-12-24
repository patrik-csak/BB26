import test from 'ava';
import {random, range} from '../source';

test('returns a valid string given only an upper bound', (t) => {
	const validLetters = range('AAA');

	for (let i = 0; i < 1000; ++i) {
		t.assert(validLetters.includes(random('ZZ')));
	}
});

test('returns a valid string given both upper and lower bounds', (t) => {
	const validLetters = range('AA', 'AAA');

	for (let i = 0; i < 1000; ++i) {
		t.assert(validLetters.includes(random('AA', 'ZZ')));
	}
});
