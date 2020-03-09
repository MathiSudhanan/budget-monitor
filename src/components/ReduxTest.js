/** @format */

import React from 'react'
import {createstore} from 'redux'
var defaultState = 0
function amount(state = defaultState, action) {
  return state + 1
}

var store = createstore(amount)

store.dispatch({})
