import increment from './increment'

describe('increment', () => {
  it('Should increment A to B', () => {
    expect(increment('A')).toBe('B')
  })

  it('Should increment Z to AA', () => {
    expect(increment('Z')).toBe('AA')
  })

  it('Should increment ZZ to AAA', () => {
    expect(increment('ZZ')).toBe('AAA')
  })

  it('Should increment AA to AB', () => {
    expect(increment('AA')).toBe('AB')
  })

  it('Should increment AB to AC', () => {
    expect(increment('AB')).toBe('AC')
  })

  it('Should increment AAA to AAB', () => {
    expect(increment('AAA')).toBe('AAB')
  })

  it('Should increment AAB to AAC', () => {
    expect(increment('AAB')).toBe('AAC')
  })

  it('Should throw if passed non-bijective base-26 string', () => {
    expect(() => increment('abc123')).toThrow()
  })
})
