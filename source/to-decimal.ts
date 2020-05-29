function charToDecimal (letter: string) {
  return letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1
}

/**
 * Converts a bijective base-26 string to a decimal number.
 *
 * ```
 * import { toDecimal } from 'bb26'
 *
 * toDecimal('A')  // 1
 * toDecimal('B')  // 2
 * toDecimal('Z')  // 26
 * toDecimal('AA') // 27
 * toDecimal('AB') // 28
 * ```
 *
 * @param string
 */
export default function toDecimal (string: string): number {
  if (!/[A-Z]/.test(string)) {
    throw new Error('String must contain only upper-case characters')
  }

  let number = 0

  for (let i = 0; i < string.length; i++) {
    const char = string[string.length - i - 1]

    number += Math.pow(26, i) * charToDecimal(char)
  }

  return number
}
