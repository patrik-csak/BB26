const letterToDecimal = (letter: string) =>
  letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1

export default function bb26ToDecimal (string: string): number {
  if (!/[A-Z]/.test(string))
    throw new Error('String must contain only upper-case characters')

  let number: number = 0

  for (let i = string.length - 1; i >= 0; i--) {
    const letter = string[i]

    number += Math.pow(26, i) * letterToDecimal(letter)
  }

  return number
}
