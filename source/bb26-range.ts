import bb26ToDecimal from './bb26-to-decimal'
import decimalToBb26 from './decimal-to-bb26'

const increment = (string: string) => decimalToBb26(bb26ToDecimal(string) + 1)

const lessThan = (a: string, b: string) => bb26ToDecimal(a) < bb26ToDecimal(b)

function bb26Range (end: string): string[]
function bb26Range (start: string, end: string): string[]
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
