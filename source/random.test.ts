import { random, range } from './index'

describe('random', () => {
  describe('Given an upper bound', () => {
    test('Should return a valid random string', () => {
      const validLetters = range('AAA')
      const results = []

      for (let i = 0; i < 1000; ++i) results.push(random('ZZ'))

      for (const result of results) expect(validLetters).toContain(result)
    })
  })

  describe('Given an upper and lower bound', () => {
    test('Should return a valid random string', () => {
      const validLetters = range('AA', 'AAA')
      const results = []

      for (let i = 0; i < 1000; ++i) results.push(random('AA', 'ZZ'))

      for (const result of results) expect(validLetters).toContain(result)
    })
  })
})
