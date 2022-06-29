# random-country

> Return a random country.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-country/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-country/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-country)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-country/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-country)


## Install

```
$ npm install --save random-country 
```

## Usage

```js
var randomCountry = require('random-country');

// API
// - randomCountry([options]);

// options
// - full
```

By default, returns only the 2 letter ISO 3166-1 code for the country:

```js
randomCountry();
// => 'LT'
```

Optionally specify that it ought to return a full country name:

```js
randomCountry({ full: true });
// => 'Venezuela'
```

## Related

- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.
- [random-altitude](https://github.com/mock-end/random-altitude) - Generate a random altitude, in meters.
- [random-depth](https://github.com/mock-end/random-depth) - Generate a random depth, in meters. Depths are always negative.
- [random-coordinates](https://github.com/mock-end/random-coordinates) - Generate a random coordinates, which are latitude and longitude, comma separated.
- [random-latitude](https://github.com/mock-end/random-latitude) - Generate a random latitude.
- [random-longitude](https://github.com/mock-end/random-longitude) - Generate a random longitude.
- [random-geohash](https://github.com/mock-end/random-geohash) - Generate a random geohash.
- [random-geojson](https://github.com/mock-end/random-geojson) - Generate a random geojson.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-country/issues/new).
