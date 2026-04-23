import toBb26 from './to-bb26.js';
import toDecimal from './to-decimal.js';

/**
 * Creates an array of bijective base-26 numerals progressing from `start` up
 * to, but not including, `end`.
 *
 * If `end` is not specified, it's set to `start` with `start` then set to `'A'`.
 *
 * @param start - The start of the range
 * @param end - The end of the range
 */
export default function range(end: string): string[];
export default function range(start: string, end: string): string[];
export default function range(start: string, end?: string): string[] {
	if (!end) {
		end = start;
		start = 'A';
	}

	const range: string[] = [];
	const startDecimal = toDecimal(start);
	const endDecimal = toDecimal(end);

	for (let decimal = startDecimal; decimal < endDecimal; decimal++) {
		range.push(toBb26(decimal));
	}

	return range;
}
