import bb26ToDecimal from '../source/bb26-to-decimal'

describe('bb26ToDecimal', () => {
  test('Should convert A to 1', () => {
    expect(bb26ToDecimal('A')).toBe(1)
  })

  test('Should convert B to 2', () => {
    expect(bb26ToDecimal('B')).toBe(2)
  })

  test('Should convert Z to 26', () => {
    expect(bb26ToDecimal('Z')).toBe(26)
  })

  test('Should convert AA to 27', () => {
    expect(bb26ToDecimal('AA')).toBe(27)
  })

  test('Should throw if given a non-upper-case character', () => {
    expect(() => {
      bb26ToDecimal('a')
    }).toThrow()
  })
})
