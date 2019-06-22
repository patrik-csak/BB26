import sample from 'lodash.sample'

import bb26Range from './bb26-range'

function bb26Random (upper: string): string
function bb26Random (lower: string, upper: string): string

/**
 * Produces a random string between the inclusive `lower` and `upper` bounds. If
 * only one argument is provided, a string between `'A'` and the given string is
 * returned.
 *
 * ```
 * import { bb26Random } from 'bb26'
 *
 * bb26Random('AAA')         // 'NE'
 * bb26Random('AAA', 'AAAA') // 'KXZ'
 * ```
 *
 * @param lower
 * @param upper
 * @returns Random string
 */
function bb26Random (lower: string, upper?: string): string {
  const start = upper ? lower : 'A'
  const end = upper || lower

  return <string>sample(bb26Range(start, end))
}

export default bb26Random
