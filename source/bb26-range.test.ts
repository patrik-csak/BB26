import bb26Range from './bb26-range'

describe('bb26Range', () => {
  test('Should work with end', () => {
    expect(bb26Range('B')).toEqual(['A'])
    expect(bb26Range('C')).toEqual(['A', 'B'])
    expect(bb26Range('AB')).toContain('AA')
  })

  test('Should work with start and end', () => {
    expect(bb26Range('B', 'C')).toEqual(['B'])
    expect(bb26Range('B', 'D')).toEqual(['B', 'C'])
    expect(bb26Range('AA', 'AAA')).not.toContain('Z')
  })

  test('Should throw if given a string with a non-upper-case letter', () => {
    expect(() => bb26Range('a')).toThrow()
  })
})
