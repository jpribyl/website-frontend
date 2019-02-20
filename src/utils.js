import React from 'react';

export const Helpers = {
    compareObjArray(a, b, key) {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    }
}
