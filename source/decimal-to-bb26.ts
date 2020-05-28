/** @ignore */
function toChar (number: number) {
  return String.fromCharCode('A'.charCodeAt(0) - 1 + number)
}

/**
 * Converts a decimal number to a bijective base-26 string.
 *
 * ```
 * import { decimalToBb26 } from 'bb26'
 *
 * decimalToBb26(1)  // 'A'
 * decimalToBb26(2)  // 'B'
 * decimalToBb26(26) // 'Z'
 * decimalToBb26(27) // 'AA'
 * decimalToBb26(28) // 'AB'
 * ```
 *
 * @param number
 */
export default function decimalToBb26 (number: number): string {
  let string = ''
  let _number = number

  while (_number > 0) {
    string = toChar(_number % 26 || 26) + string
    _number = Math.floor((_number - 1) / 26)
  }

  return string
}
