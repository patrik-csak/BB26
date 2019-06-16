import decimalToBb26 from './decimal-to-bb26'
import bb26ToDecimal from './bb26-to-decimal'

/**
 * Increments a bijective base-26 string by one numeral.
 *
 * ```
 * import { bb26Increment } from 'bb26'
 *
 * bb26Increment('A')  // 'B'
 * bb26Increment('Z')  // 'AA'
 * bb26Increment('AA') // 'AB'
 * ```
 *
 * @param string - String to increment
 * @return Incremented string
 */
export default function bb26Increment (string: string) {
  return decimalToBb26(bb26ToDecimal(string) + 1)
}
