/**
 * @Nofinite/Markon
 * Licensed under MIT
 * 
 * Copyright (c) Nofinite Technologies Private Limited 
 * 
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactMarkon = exports.JSMarkon = void 0;
/**
 * @Nofinite/Markon
 * Licensed under MIT
 * 
 * Copyright (c) Nofinite Technologies Private Limited 
 * 
 * LICENSE file in the root directory of this source tree.
 */
var ReactMarkon, JSMarkon;
if (process.env.NODE_ENV === 'production') {
  // When in production
  exports.ReactMarkon = ReactMarkon = require('./ReactMarkon.min.js')["default"];
  exports.JSMarkon = JSMarkon = require('./JSMarkon.min.js')["default"];
} else {
  // When in development
  exports.ReactMarkon = ReactMarkon = require('./ReactMarkon.js')["default"];
  exports.JSMarkon = JSMarkon = require('./JSMarkon.js')["default"];
}