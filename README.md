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
$ mkdir -p tddjs/sample
$ cd tddjs/sample
$ mkdir src test
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
