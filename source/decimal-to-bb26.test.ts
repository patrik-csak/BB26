import decimalToBb26 from './decimal-to-bb26'

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
})
