/**
 * @Nofinite/Markon
 * Licensed under MIT
 * 
 * Copyright (c) Nofinite Technologies Private Limited 
 * 
 * LICENSE file in the root directory of this source tree.
 */
let ReactMarkon, JSMarkon;

if (process.env.NODE_ENV === 'production') {
  // When in production
  ReactMarkon = require('./ReactMarkon.min.js').default;
  JSMarkon = require('./JSMarkon.min.js').default;
} else {
  // When in development
  ReactMarkon = require('./ReactMarkon.js').default;
  JSMarkon = require('./JSMarkon.js').default;
}

export { ReactMarkon, JSMarkon };
