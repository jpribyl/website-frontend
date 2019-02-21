import React from 'react';

export const Helpers = {
    compareObjArray(a, b, key) {
      if (a[key] > b[key]) return -1;
      if (a[key] < b[key]) return 1;
      return 0;
    },

    handleExpand(_this, row, statename) {
      var expanded = {..._this.state[statename]};
        console.log(expanded, row, statename);
      if (expanded[row.viewIndex]) {
        expanded[row.viewIndex] = !expanded[row.viewIndex];
      } else {
        expanded[row.viewIndex] = true;
      }

        let newState = {}
        newState[statename] = expanded

      _this.setState({
          ...newState
      });
    }
}
