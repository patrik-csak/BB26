import validateString from './validate-string.ts';

/**
 Converts a bijective base-26 string to a decimal number.

 @param string - Bijective base-26 string
 */
export default function toDecimal(string: string): number {
	validateString(string);

	let number = 0;

	for (let i = 0; i < string.length; i++) {
		const char = string[string.length - i - 1]!;

		number += (26 ** i) * characterToDecimal(char);
	}

	return number;
}

function characterToDecimal(letter: string) {
	return letter.codePointAt(0)! - 'A'.codePointAt(0)! + 1;
}
