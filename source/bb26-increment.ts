import decimalToBb26 from './decimal-to-bb26'
import bb26ToDecimal from './bb26-to-decimal'

/**
 * @ignore
 */
export default function bb26Increment (string: string) {
  return decimalToBb26(bb26ToDecimal(string) + 1)
}
