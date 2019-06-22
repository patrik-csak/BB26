import { bb26Random, bb26Range } from '../source'

describe('bb26Random', () => {
  describe('Given an upper bound', () => {
    test('Should return a valid random string', () => {
      const validLetters = bb26Range('AAA')
      const results = []

      for (let i = 0; i < 1000; ++i) results.push(bb26Random('ZZ'))

      for (const result of results) expect(validLetters).toContain(result)
    })
  })

  describe('Given an upper and lower bound', () => {
    test('Should return a valid random string', () => {
      const validLetters = bb26Range('AA', 'AAA')
      const results = []

      for (let i = 0; i < 1000; ++i) results.push(bb26Random('AA', 'ZZ'))

      for (const result of results) expect(validLetters).toContain(result)
    })
  })
})
