import randomInteger from 'random-int';
import toBb26 from './to-bb26.js';
import toDecimal from './to-decimal.js';

export default function random(upper: string): string;
export default function random(lower: string, upper: string): string;

/**
 * Produces a random string between the inclusive `lower` and `upper` bounds. If
 * only one argument is provided, a string between `'A'` and the given string is
 * returned.
 *
 * @param lower
 * @param upper
 * @returns Random string
 */
export default function random(lower: string, upper?: string): string {
	const lowerDecimal = upper === undefined ? 1 : toDecimal(lower);
	const upperDecimal =
		upper === undefined ? toDecimal(lower) : toDecimal(upper);

	const integer = randomInteger(lowerDecimal, upperDecimal);

	return toBb26(integer);
}
