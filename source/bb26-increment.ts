import toBb26 from './decimal-to-bb26'
import toDecimal from './bb26-to-decimal'

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
  return toBb26(toDecimal(string) + 1)
}
