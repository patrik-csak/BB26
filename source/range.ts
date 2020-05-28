import toDecimal from './to-decimal'
import increment from './increment'

function range (end: string): string[]
function range (start: string, end: string): string[]

/**
 * Creates an array of bijective base-26 numerals progressing from `start` up
 * to, but not including, `end`.
 *
 * If `end` is not specified, it's set to `start` with `start` then set to `'A'`.
 *
 * ```
 * import { range } from 'bb26'
 *
 * range('B')       // ['A']
 * range('C')       // ['A', 'B']
 * range('B', 'C')  // ['B']
 * range('B', 'D')  // ['B', 'C']
 * range('Z', 'AC') // ['Z', 'AA', 'AB']
 * ```
 *
 * @param start - The start of the range
 * @param end - The end of the range
 */
function range (start: string, end?: string): string[] {
  const range: string[] = []
  const _end = end || start
  const _start = end ? start : 'A'

  for (let i = _start; toDecimal(i) < toDecimal(_end); i = increment(i)) {
    range.push(i)
  }

  return range
}

export default range
