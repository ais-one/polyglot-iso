polyglot-iso
============

Updated: 2020-09-16 1300+8GMT

This is an isomorphic(used in NodeJS, browser and possibly Deno), zero-dependency version of [node-polyglot](https://github.com/airbnb/polyglot.js)@2.4.0, a tiny I18n helper library written in JavaScript. ES Module, CommonJS, and standalone JS are supported.

Please refer to the original project for documentation on usage.

I will attempt to keep this library in lock step with the original library until they progress to an ES Module version.

The [jwt-decode](https://github.com/auth0/jwt-decode) **feature/esm branch** was used as a reference to build to multiple targets using rollup.

## Installation

install with [npm](https://npmjs.org):

    $ npm install polyglot-iso

## Running the tests

Clone the repo, run `npm i`, and `npm test`.

## Usage - ES Modules

```js
import Polyglot from 'polyglot-iso'
```
