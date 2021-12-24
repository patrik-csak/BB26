import range from './range';
import sample from './sample';

/**
 * Produces a random string between the inclusive `lower` and `upper` bounds. If
 * only one argument is provided, a string between `'A'` and the given string is
 * returned.
 *
 * ```
 * import { random } from 'bb26'
 *
 * random('AAA')         // 'NE'
 * random('AAA', 'AAAA') // 'KXZ'
 * ```
 *
 * @param lower
 * @param upper
 * @returns Random string
 */
export default function random(lower: string, upper?: string): string {
	const start = upper ? lower : 'A';
	const end = upper ?? lower;

	return sample(range(start, end));
}
