import validateString from './validate-string.ts';

/**
Converts a bijective base-26 string to a decimal number.

@param string - Bijective base-26 string
*/
export default function toDecimal(string: string): number {
	validateString(string);

	let number = 0;

	for (let index = 0; index < string.length; index++) {
		const char = string[string.length - index - 1]!;

		number += (26 ** index) * characterToDecimal(char);
	}

	return number;
}

function characterToDecimal(letter: string) {
	return letter.codePointAt(0)! - 'A'.codePointAt(0)! + 1;
}
