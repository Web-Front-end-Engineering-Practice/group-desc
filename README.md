# group-desc

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Split a sequence into N groups, each is not longer than the previous

# usage

    $ npm install group-desc --save

```js
var groupDesc = require('group-desc').groupDesc;
groupDesc([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
//[
  //[ [ 0, 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
  //[ [ 0, 1, 2, 3 ], [ 4, 5, 6, 7 ], [ 8, 9 ] ],
  //[ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7 ], [ 8, 9 ] ],
  //[ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9 ] ],
  //[ [ 0, 1, 2, 3, 4, 5 ], [ 6, 7 ], [ 8, 9 ] ],
  //[ [ 0, 1, 2, 3, 4, 5 ], [ 6, 7, 8 ], [ 9 ] ],
  //[ [ 0, 1, 2, 3, 4, 5, 6 ], [ 7, 8 ], [ 9 ] ],
  //[ [ 0, 1, 2, 3, 4, 5, 6, 7 ], [ 8 ], [ 9 ] ]
//]
```

# author
 - yanni4night@gmail.com

# license
Apache License Version 2.0

[npm-url]: https://npmjs.org/package/group-desc
[downloads-image]: http://img.shields.io/npm/dm/group-desc.svg
[npm-image]: http://img.shields.io/npm/v/group-desc.svg
[travis-url]: https://travis-ci.org/Web-Front-end-Engineering-Practice/group-desc
[travis-image]: http://img.shields.io/travis/Web-Front-end-Engineering-Practice/group-desc.svg
[david-dm-url]:https://david-dm.org/Web-Front-end-Engineering-Practice/group-desc
[david-dm-image]:https://david-dm.org/Web-Front-end-Engineering-Practice/group-desc.svg
[david-dm-dev-url]:https://david-dm.org/Web-Front-end-Engineering-Practice/group-desc#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/Web-Front-end-Engineering-Practice/group-desc/dev-status.svg