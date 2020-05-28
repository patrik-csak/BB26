import toDecimal from './to-decimal'

describe('toDecimal', () => {
  test('Should convert A to 1', () => {
    expect(toDecimal('A')).toBe(1)
  })

  test('Should convert B to 2', () => {
    expect(toDecimal('B')).toBe(2)
  })

  test('Should convert Z to 26', () => {
    expect(toDecimal('Z')).toBe(26)
  })

  test('Should convert AA to 27', () => {
    expect(toDecimal('AA')).toBe(27)
  })

  test('Should convert AB to 28', () => {
    expect(toDecimal('AB')).toBe(28)
  })

  test('Should convert AC to 29', () => {
    expect(toDecimal('AC')).toBe(29)
  })

  test('Should throw if given a non-upper-case character', () => {
    expect(() => {
      toDecimal('a')
    }).toThrow()
  })
})
