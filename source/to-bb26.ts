function toChar(number: number) {
	return String.fromCodePoint('A'.codePointAt(0)! - 1 + number);
}

/**
 * Converts a decimal number to a bijective base-26 string.
 *
 * @param number
 */
export default function toBb26(number: number): string {
	let string = '';
	let _number = number;

	while (_number > 0) {
		string = toChar(_number % 26 || 26) + string;
		_number = Math.floor((_number - 1) / 26);
	}

	return string;
}
