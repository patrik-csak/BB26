/**
 Validate number input
 @internal
 */
export default function validateNumber(input: unknown): asserts input is number {
	if (typeof input !== 'number') {
		throw new TypeError(`Expected number, got \`${String(input)}\``);
	}

	if (!Number.isSafeInteger(input) || input < 1) {
		throw new RangeError(`Expected number to be a positive safe integer, got \`${input}\``);
	}
}
