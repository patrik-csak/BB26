import randomItem from 'random-item';
import range from './range.js';

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
	const start = upper ? lower : 'A';
	const end = upper ?? lower;

	return randomItem(range(start, end));
}
