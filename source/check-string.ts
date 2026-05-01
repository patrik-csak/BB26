const allowedStringPattern = /^[A-Z]+$/v;

/** @internal */
export default function checkString(input: unknown): asserts input is string {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected string, got \`${String(input)}\``);
	}

	if (!allowedStringPattern.test(input)) {
		throw new RangeError(
			`Expected non-empty uppercase-only string, got \`${input}\``,
		);
	}
}
