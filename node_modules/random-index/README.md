# random-index

> Return a random array-like index.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-index/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-index/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-index)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-index/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-index)


## Install

```
$ npm install --save random-index 
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-index/blob/master/test/spec/index.js)

```js
var randomIndex = require('random-index');

// API:
// - randomIndex([options]);

// options
// - min
// - max


randomIndex();     
// => 3561           

randomIndex({ max: 1 });    
// => 1

randomIndex({ min:10, max: 100 });
// => 64   
```

**Note**: these `min` and `max` are **inclusive**, so they are included in the range. 

This means `randomIndex({max: 2})` would return either `0`, `1`, or `2`.


## Related

- [random-integral](https://github.com/mock-end/random-integral) - Return a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Return a random natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Return a random decimal.
- [random-floating](https://github.com/mock-end/random-floating) - Return a random floating point number.
- [random-binary](https://github.com/mock-end/random-binary) - Return a random binary number.
- [random-octal](https://github.com/mock-end/random-octal) - Return a random octal number.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Return a random hexadecimal number.
- [random-unicode](https://github.com/mock-end/random-unicode) - Return a random unicode. 
- [random-bool](https://github.com/mock-end/random-bool) - Return a random boolean (true/false).
- [random-char](https://github.com/mock-end/random-char) - Return a random char.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-index/issues/new).
