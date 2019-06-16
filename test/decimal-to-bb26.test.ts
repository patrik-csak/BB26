import decimalToBb26 from '../source/decimal-to-bb26'

describe('decimalToBb26', () => {
  test('Should convert 1 to A', () => {
    expect(decimalToBb26(1)).toBe('A')
  })

  test('Should convert 2 to B', () => {
    expect(decimalToBb26(2)).toBe('B')
  })

  test('Should convert 26 to Z', () => {
    expect(decimalToBb26(26)).toBe('Z')
  })

  test('Should convert 27 to AA', () => {
    expect(decimalToBb26(27)).toBe('AA')
  })

  test('Should convert 28 to AB', () => {
    expect(decimalToBb26(28)).toBe('AB')
  })

  test('Should convert 29 to AC', () => {
    expect(decimalToBb26(29)).toBe('AC')
  })
})
