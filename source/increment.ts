import toBb26 from './to-bb26.js';
import toDecimal from './to-decimal.js';

/**
 * Increments a bijective base-26 string by one numeral.
 * @param string - String to increment
 * @return Incremented string
 */
export default function increment(string: string): string {
	return toBb26(toDecimal(string) + 1);
}
