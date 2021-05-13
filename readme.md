# BB26

[![Test Coverage](https://api.codeclimate.com/v1/badges/c56701b3968f3de65188/test_coverage)](https://codeclimate.com/github/ptrkcsk/BB26/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/c56701b3968f3de65188/maintainability)](https://codeclimate.com/github/ptrkcsk/BB26/maintainability) [![BB26 minified and gzipped size](https://badgen.net/bundlephobia/minzip/bb26)](https://bundlephobia.com/result?p=bb26)

JavaScript [bijective base-26](https://en.wikipedia.org/wiki/Bijective_numeration#The_bijective_base-26_system) utility functions for converting numbers to/from spreadsheet column letters

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

Produces a random string between the inclusive lower and upper bounds. If only one argument is provided, a string between 'A' and the given string is returned.

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

Creates an array of bijective base-26 numerals progressing from start up to, but not including, end.

If end is not specified, it's set to start with start then set to 'A'.

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
