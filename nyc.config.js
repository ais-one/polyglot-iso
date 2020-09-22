'use strict';

module.exports = {
  "all": true,
  // "check-coverage": true,
  "require": ["esm"],
  "include": [
    "lib/index.js",
    // "test/*.js",
  ],
  "exclude": [],
  "reporter": [
    "html",
    "text"
    // "text-summary"
  ],
  // "watermarks": {
  //   "lines": [80, 95],
  //   "functions": [80, 95],
  //   "branches": [80, 95],
  //   "statements": [80, 95]
  // },
  "branches": 80,
  "lines": 80,
  "functions": 80,
  "statements": 80,
  // "cache": true
};
