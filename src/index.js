/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-05-25[15:49:58]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';

export const groupDesc = (arr, size, ret = [], pre = []) => {
    const last = pre[pre.length - 1];

    if (!Array.isArray(arr) || arr.length < size || size < 1) {
        return [];
    }

    if (1 === size) {
        pre.push(arr);
        ret.push(pre);
        return ret;
    }

    const MIN = (arr.length % size) + Math.floor(arr.length / size);
    let MAX = arr.length - size + 1;
    MAX = last ? Math.min(MAX, last.length) : MAX;

    for (let i = MIN; i <= MAX; ++i) {
        let newPre = pre.slice();
        newPre.push(arr.slice(0, i));
        groupDesc(arr.slice(i), size - 1, ret, newPre);
    }
    return ret;
};