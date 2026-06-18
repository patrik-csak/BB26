import checkNumber from './check-number.ts';

/**
 Converts a decimal number to a bijective base-26 string.

 @param number - Decimal number
 */
export default function toBb26(number: number): string {
	checkNumber(number);

	let string = '';

	while (number > 0) {
		let digit = number % 26;
		if (digit === 0) {
			digit = 26;
		}

		string = decimalToCharacter(digit) + string;
		number = Math.floor((number - 1) / 26);
	}

	return string;
}

function decimalToCharacter(number: number) {
	return String.fromCodePoint('A'.codePointAt(0)! - 1 + number);
}
