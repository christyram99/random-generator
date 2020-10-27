# random-generator: random data generator

Generate random values, includes intenegers, floats and boolean values.

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
    const Random = require('./generate-random')

    // int related
    Random.int() // 57
    Random.int(5, 600) // 430

    // float related
    Random.float() // 43.2
    Random.float(5, 600) // 292.4
    Random.float(5, 600, 4) // 438.9023

    // boolean related
    Random.boolean() // false
```
