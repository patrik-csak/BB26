function charToDecimal(letter: string) {
	return letter.codePointAt(0)! - 'A'.codePointAt(0)! + 1;
}

/**
 * Converts a bijective base-26 string to a decimal number.
 *
 * @param string
 */
export default function toDecimal(string: string): number {
	if (typeof string !== 'string' || !/^[A-Z]+$/v.test(string)) {
		throw new TypeError(
			`Expected string to only contain upper-case letters, got \`${string}\``,
		);
	}

	let number = 0;

	for (let i = 0; i < string.length; i++) {
		const char = string[string.length - i - 1]!;

		number += 26 ** i * charToDecimal(char);
	}

	return number;
}
