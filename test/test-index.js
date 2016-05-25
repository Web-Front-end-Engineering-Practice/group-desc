var groupDesc = require('../group-desc').groupDesc;
var assert = require('assert');

function g(len) {
    var arr = [];
    for (var i = 0; i < len; ++i) {
        arr[arr.length] = i;
    }
    return arr;
}

describe('groupDesc', function () {
    describe('normal', function () {
        it('1 way to split [1] to 1 group', function () {
            assert.deepEqual(groupDesc(g(1), 1).length, 1);
        });
        it('1 way to split [1,2] to 2 groups', function () {
            assert.deepEqual(groupDesc(g(2), 2).length, 1);
        });
        it('8 ways to split [1,2...10] to 3 groups', function () {
            assert.deepEqual(groupDesc(g(10), 3).length, 8);
        });
        it('7129 ways to split [1,2...100] to 4 groups', function () {
            assert.deepEqual(groupDesc(g(100), 4).length, 7129);
        });
    });
    describe('fatal', function () {
        it('should return empty array if not array passed in', function () {
            assert.deepEqual(groupDesc({}), []);
        });
        it('should return empty array if "size" is not positive', function () {
            assert.deepEqual(groupDesc([1, 2], -1), []);
        });
    });
});