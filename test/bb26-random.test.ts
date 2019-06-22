import { bb26Random, bb26Range } from '../source'

describe('bb26Random', () => {
  test('Should return a valid random random string', () => {
    const validLetters = bb26Range('C')

    expect(validLetters).toContain(bb26Random('A', 'B'))
  })
})
