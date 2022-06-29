# random-zipcode

> Generate a random (U.S.) zip code.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-zipcode/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-zipcode/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-zipcode)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-zipcode/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-zipcode)


## Install

```
$ npm install --save random-zipcode 
```

## Usage

```js
var randomZip = require('random-zipcode');

// API
// - randomZip();
// - randomZip(plusFour);

randomZip();
// => '90210'
```

Can optionally specify that it ought to return a [Zip+4](http://vq.io/19rzsve):

```js
randomZip(true);
// => '01035-1838'
```

## Related

- [random-areacode](https://github.com/mock-end/random-areacode) - Generate a random (U.S.) area code.
- [random-mobile](https://github.com/mock-end/random-mobile) - Generate a random (U.S.) mobile phone number.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-zipcode/issues/new).

