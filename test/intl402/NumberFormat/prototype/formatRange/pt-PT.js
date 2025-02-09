// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat-formatRange
description: Basic tests for the pt-PT output of formatRange()
locale: [pt-PT]
features: [Intl.NumberFormat-v3]
---*/

// Basic example test pt-PT
const nf = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

assert.sameValue(nf.formatRange(3, 5), "3 - 5 €");
assert.sameValue(nf.formatRange(2.9, 3.1), "~3 €");


// Basic example test pt-PT using signDisplay to always
const nf2 = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  signDisplay: "always",
});

assert.sameValue(nf2.formatRange(2.9, 3.1), "+2,90 - 3,10 €");

// Basic example test pt-PT string formatting
const nf3 = new Intl.NumberFormat("pt-PT");
const string1 = "987654321987654321";
const string2 = "987654321987654322";

assert.sameValue(nf3.formatRange(string1, string2), "987 654 321 987 654 321 - 987 654 321 987 654 322");

