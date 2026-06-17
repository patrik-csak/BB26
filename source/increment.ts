import checkString from './check-string.ts';
import toBb26 from './to-bb26.ts';
import toDecimal from './to-decimal.ts';

/**
 * Increments a bijective base-26 string by one numeral.
 * @param string - String to increment
 * @return Incremented string
 */
export default function increment(string: string): string {
	checkString(string);

	return toBb26(toDecimal(string) + 1);
}
