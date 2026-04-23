/**
 * Converts a decimal number to a bijective base-26 string.
 *
 * @param number
 */
export default function toBb26(number: number): string {
	if (typeof number !== 'number') {
		throw new TypeError(`Expected number, got \`${String(number)}\``);
	}

	if (!Number.isInteger(number) || number < 1) {
		throw new RangeError(
			`Expected number to be a positive integer, got \`${number}\``,
		);
	}

	let string = '';

	while (number > 0) {
		string = toChar(number % 26 || 26) + string;
		number = Math.floor((number - 1) / 26);
	}

	return string;
}

function toChar(number: number) {
	return String.fromCodePoint('A'.codePointAt(0)! - 1 + number);
}
