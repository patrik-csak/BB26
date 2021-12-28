# BB26

[![BB26 minified and gzipped size](https://badgen.net/bundlephobia/minzip/bb26)](https://bundlephobia.com/result?p=bb26) [![BB26 downloads per month on npm](https://badgen.net/npm/dw/bb26)](https://www.npmjs.com/package/bb26) [![Test Coverage](https://api.codeclimate.com/v1/badges/c56701b3968f3de65188/test_coverage)](https://codeclimate.com/github/ptrkcsk/BB26/test_coverage)

BB26 is a JavaScript library for working with [bijective base-26](https://en.wikipedia.org/wiki/Bijective_numeration#The_bijective_base-26_system) (BB26) numbers

## What is bijective base-26 numeration?

You're probably familiar with BB26 numeration. It's used for spreadsheet columns, license plate serials, and (probably?) more.

Here's an example of decimal (base-10) numbers (the numbers you use every day to count things) compared to their corresponding BB26 numbers:

```
Decimal: | 1 | 2 | 3 | ... | 24 | 25 | 26 | 27 | 28 | 29 | ...
   BB26: | A | B | C | ... |  X |  Y |  Z | AA | AB | AC | ...
```

## Installation

```sh
npm install bb26
```

## Usage

### Increment

```
increment(string: string): string
```

Increments a bijective base-26 string by one numeral.

```js
import { increment } from 'bb26'

increment('A')  // 'B'
increment('Z')  // 'AA'
increment('AA') // 'AB'
```

### Random

```
random(upper: string): string
random(lower: string, upper: string): string
```

Produces a random string between the inclusive `lower` and `upper` bounds. If only one argument is provided, a string between `'A'` and the given string is returned.

```js
import { random } from 'bb26'

random('AAA')         // 'NE'
random('AAA', 'AAAA') // 'KXZ'
```

### Range

```
range(end: string): string[]
range(start: string, end: string): string[]
```

Creates an array of bijective base-26 numerals progressing from `start` up to, but not including, `end`. If `end` is not specified, it's set to `start` with `start` then set to `'A'`.

```js
import { range } from 'bb26'

range('B')       // ['A']
range('C')       // ['A', 'B']
range('B', 'C')  // ['B']
range('B', 'D')  // ['B', 'C']
range('Z', 'AC') // ['Z', 'AA', 'AB']
```

### Convert from decimal to BB26

```
toBb26(number: number): string
```

Converts a decimal number to a bijective base-26 string.

```js
import { toBb26 } from 'bb26'

toBb26(1)  // 'A'
toBb26(2)  // 'B'
toBb26(26) // 'Z'
toBb26(27) // 'AA'
toBb26(28) // 'AB'
```

### Convert from BB26 to decimal

```
toDecimal(string: string): number
```

Converts a bijective base-26 string to a decimal number.

```js
import { toDecimal } from 'bb26'

toDecimal('A')  // 1
toDecimal('B')  // 2
toDecimal('Z')  // 26
toDecimal('AA') // 27
toDecimal('AB') // 28
```
