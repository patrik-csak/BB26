/** @internal */
export default function checkNumber(input: unknown): asserts input is number {
	if (typeof input !== 'number') {
		throw new TypeError(`Expected number, got \`${String(input)}\``);
	}

	if (!Number.isInteger(input) || input < 1) {
		throw new RangeError(
			`Expected number to be a positive integer, got \`${input}\``,
		);
	}
}
