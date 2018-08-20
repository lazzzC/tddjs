# Test Driven Design
Check status of npm and Node.js
```shell
$ node --version
v8.11.1
$ npm --version
5.8.0
```
Create sample project
```shell
$ cd tddjs/sample
```

Initial project
```shell
$ npm init
use default, unless 'test command' enter 'mocha'
$ npm install mocha chai --save-dev
$ cat package.json
{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "dependencies": {},
  "devDependencies": {
    "chai": "^4.1.2",
    "mocha": "^5.2.0"
  },
  "scripts": {
    "test": "mocha"
  },
  "author": "",
  "license": "ISC"
}
```
Canary test
```javascript
// tdd/sample/test/util_test.js
var expect = require('chai').expect;

describe('util tests', function() {
  it("should pass this canary test", function() {
    expect(true).to.eql(true);
  });
});
```
```shell
$ npm test
> sample@1.0.0 test /Users/charlotte/VersionControls/tddjs/sample
> mocha



  util tests
    ✓ should pass this canary test


  1 passing (8ms)
  ```
  Further Test...
