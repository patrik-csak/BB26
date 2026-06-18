import checkString from './check-string.ts';
import toBb26 from './to-bb26.ts';
import toDecimal from './to-decimal.ts';

/**
 Creates an array of bijective base-26 numerals progressing from `'A'` up
 to, but not including, `end`

 @param end - The exclusive end of the range
 */
export default function range(end: string): string[];

/**
 Creates an array of bijective base-26 numerals progressing from `start` up
 to, but not including, `end`

 @param start - The inclusive start of the range
 @param end - The exclusive end of the range
 */
export default function range(start: string, end: string): string[];

export default function range(start: string, end?: string): string[] {
	if (end === undefined) {
		end = start;
		start = 'A';
	}

	for (const string of [start, end]) {
		checkString(string);
	}

	const array: string[] = [];
	const startDecimal = toDecimal(start);
	const endDecimal = toDecimal(end);

	for (let decimal = startDecimal; decimal < endDecimal; decimal++) {
		array.push(toBb26(decimal));
	}

	return array;
}
