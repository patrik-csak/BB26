import checkString from './check-string.js';
import toBb26 from './to-bb26.js';
import toDecimal from './to-decimal.js';

/**
 * Produces a random string between the inclusive `lower` and `upper` bounds. If
 * only one argument is provided, a string between `'A'` and the given string is
 * returned.
 *
 * @param lower
 * @param upper
 * @returns Random string
 */
export default function random(upper: string): string;
export default function random(lower: string, upper: string): string;
export default function random(lower: string, upper?: string): string {
	if (upper === undefined) {
		upper = lower;
		lower = 'A';
	}

	for (const string of [lower, upper]) checkString(string);

	const randomInteger = getRandomInteger(toDecimal(lower), toDecimal(upper));

	return toBb26(randomInteger);
}

function getRandomInteger(minimum: number, maximum: number): number {
	return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}
