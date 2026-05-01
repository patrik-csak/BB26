import checkNumber from './check-number.js';

/**
 * Converts a decimal number to a bijective base-26 string.
 *
 * @param number
 */
export default function toBb26(number: number): string {
	checkNumber(number);

	let string = '';

	while (number > 0) {
		string = decimalToCharacter(number % 26 || 26) + string;
		number = Math.floor((number - 1) / 26);
	}

	return string;
}

function decimalToCharacter(number: number) {
	return String.fromCodePoint('A'.codePointAt(0)! - 1 + number);
}
