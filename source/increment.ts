import toBb26 from './to-bb26'
import toDecimal from './to-decimal'

/**
 * Increments a bijective base-26 string by one numeral.
 *
 * ```
 * import { increment } from 'bb26'
 *
 * increment('A')  // 'B'
 * increment('Z')  // 'AA'
 * increment('AA') // 'AB'
 * ```
 *
 * @param string - String to increment
 * @return Incremented string
 */
export default function increment (string: string): string {
  return toBb26(toDecimal(string) + 1)
}
