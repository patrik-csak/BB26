import {toBb26, toDecimal} from './index.js';

/**
 * Increments a bijective base-26 string by one numeral.
 * @param string - String to increment
 * @return Incremented string
 */
export default function increment(string: string): string {
	return toBb26(toDecimal(string) + 1);
}
