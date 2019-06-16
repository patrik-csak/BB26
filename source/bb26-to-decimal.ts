/** @ignore */
const letterToDecimal = (letter: string) =>
  letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1

/**
 * Converts a bijective base-26 string to a decimal number.
 *
 * ```
 * import { bb26ToDecimal } from 'bb26'
 *
 * bb26ToDecimal('A')  // 1
 * bb26ToDecimal('B')  // 2
 * bb26ToDecimal('Z')  // 26
 * bb26ToDecimal('AA') // 27
 * bb26ToDecimal('AB') // 28
 * ```
 *
 * @param string
 */
export default function bb26ToDecimal (string: string): number {
  if (!/[A-Z]/.test(string))
    throw new Error('String must contain only upper-case characters')

  let number: number = 0

  for (let i = 0; i < string.length; i++) {
    const letter = string[string.length - i - 1]

    number += Math.pow(26, i) * letterToDecimal(letter)
  }

  return number
}
