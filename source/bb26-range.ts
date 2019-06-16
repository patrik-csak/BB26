import bb26ToDecimal from './bb26-to-decimal'
import decimalToBb26 from './decimal-to-bb26'

/**
 * @ignore
 */
const increment = (string: string) => decimalToBb26(bb26ToDecimal(string) + 1)

/**
 * @ignore
 */
const lessThan = (a: string, b: string) => bb26ToDecimal(a) < bb26ToDecimal(b)

function bb26Range (end: string): string[]
function bb26Range (start: string, end: string): string[]

/**
 * Creates an array of bijective base-26 numerals progressing from `start` up
 * to, but not including, `end`.
 *
 * If `end` is not specified, it's set to `start` with `start` then set to `'A'`.
 *
 * ```
 * import { bb26Range } from 'bb26'
 *
 * bb26Range('B')       // ['A']
 * bb26Range('C')       // ['A', 'B']
 * bb26Range('B', 'C')  // ['B']
 * bb26Range('B', 'D')  // ['B', 'C']
 * bb26Range('Z', 'AC') // ['Z', 'AA', 'AB']
 * ```
 *
 * @param start - The start of the range
 * @param end - The end of the range
 */
function bb26Range (start: string, end?: string): string[] {
  let array: string[] = []
  const _end = end || start
  const _start = end ? start : 'A'

  for (
    let i = _start;
    lessThan(i, _end);
    i = increment(i)
  ) array.push(i)

  return array
}

export default bb26Range
