// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSorted
description: >
  %TypedArray%.prototype.toSorted doesn't call copmareFn if there is an error
info: |
  %TypedArray%.prototype.toSorted ( compareFn )

  ...
  9. Sort items using an implementation-defined sequence of
     calls to SortCompare. If any such call returns an abrupt
     completion, stop before performing any further calls to
     SortCompare or steps in this algorithm and return that completion.
  ...
includes: [testTypedArray.js]
features: [TypedArray, change-array-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var calls = 0;
  var ta = new TA([3, 1, 2]);
  try {
    ta.toSorted(() => {
      if (calls === 0) {
        calls++;
        throw new Test262Error();
      }
      calls++;
    });
  } catch (e) {}
  assert.sameValue(calls, 1, "compareFn is not called after an error");
});
