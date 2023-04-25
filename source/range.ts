import {toDecimal, increment} from './index.js';

export default function range(end: string): string[];
export default function range(start: string, end: string): string[];

/**
 * Creates an array of bijective base-26 numerals progressing from `start` up
 * to, but not including, `end`.
 *
 * If `end` is not specified, it's set to `start` with `start` then set to `'A'`.
 *
 * ```
 * import { range } from 'bb26'
 *
 * range('B')       // ['A']
 * range('C')       // ['A', 'B']
 * range('B', 'C')  // ['B']
 * range('B', 'D')  // ['B', 'C']
 * range('Z', 'AC') // ['Z', 'AA', 'AB']
 * ```
 *
 * @param start - The start of the range
 * @param end - The end of the range
 */
export default function range(start: string, end?: string): string[] {
	const _range: string[] = [];
	const _end = end ?? start;
	const _start = end ? start : 'A';

	for (let i = _start; toDecimal(i) < toDecimal(_end); i = increment(i)) {
		_range.push(i);
	}

	return _range;
}
