# random-generator: random data generator

**Note:** This is module will work in both client side and server side

## Installing

```
npm i random-generate
```

## Dependencies

No dependencies

## Usage
### Generate random integer
```js
    const GenerateRandom = require('./generate-random')

    const number = GenerateRandom.int() // 57
    const numberBetweenTwoNumber = GenerateRandom.int(5, 600) // 430
```

### Generate random float
```js
    const GenerateRandom = require('./generate-random')

    const float = GenerateRandom.float() // 43.2
    const floatBetweenTwoNumber = GenerateRandom.float(5, 600) // 292.4
    const floatBetweenTwoNumber = GenerateRandom.float(5, 600, 4) // 438.9023
```

### Generate random float
```js
    const GenerateRandom = require('./generate-random')

    const float = GenerateRandom.float() // 43.2
    const floatBetweenTwoNumber = GenerateRandom.boolean() // false
```
