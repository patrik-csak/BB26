const decimalToLetter = (number: number) =>
  String.fromCharCode('A'.charCodeAt(0) - 1 + number)

export default function decimalToBb26 (number: number) {
  let string = ''

  while (true) {
    string = decimalToLetter(number % 26 || 26) + string
    number = Math.floor((number - 1) / 26)

    if (number === 0) break
  }

  return string
}
