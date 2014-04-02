Conway's Game of life
======

Originally a boilerplate project for learning Jasmine with JavaScript or
TypeScript, through a TDD exercise of Game of Life (GOL).

Visual Studio: Download the typescript plugin and open the jasmine html runner
in your favourite browser (running the tests from within visual studio doesn't
seem to work perfectly).

Grunt: Make sure to have node.js installed (```brew install npm```), and
grunt-cli (```npm install -g grunt-cli```). The configured grunt targets are
```ts:build``` which compiles the TypeScript files, ```jasmine``` which runs
the jasmine tests in phantomjs, and ```watch``` which does both whenever a .js
or .ts file changes (default).

Example: ```grunt``` will compile and test each time a file is changed and
```grunt jasmine``` will just run the tests.
