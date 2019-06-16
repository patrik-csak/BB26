import bb26Increment from '../source/bb26-increment'

describe('bb26Increment', () => {
  it('Should increment A to B', () => {
    expect(bb26Increment('A')).toBe('B')
  })

  it('Should increment Z to AA', () => {
    expect(bb26Increment('Z')).toBe('AA')
  })

  it('Should increment ZZ to AAA', () => {
    expect(bb26Increment('ZZ')).toBe('AAA')
  })

  it('Should increment AA to AB', () => {
    expect(bb26Increment('AA')).toBe('AB')
  })

  it('Should increment AB to AC', () => {
    expect(bb26Increment('AB')).toBe('AC')
  })

  it('Should increment AAA to AAB', () => {
    expect(bb26Increment('AAA')).toBe('AAB')
  })

  it('Should increment AAB to AAC', () => {
    expect(bb26Increment('AAB')).toBe('AAC')
  })

  it('Should throw if passed non-bijective base-26 string', () => {
    expect(() => bb26Increment('abc123')).toThrow()
  })
})
