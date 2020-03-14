/** @format */

import React, {createContext, useReducer, Dispatch} from 'react'
import AppReducer from './AppReducer'
const initialState = {
  transactions: [
    // {id: 1, text: 'Salary', amount: 100000, date: new Date(2020, 1, 1)},
    // {id: 2, text: 'Washing Machine', amount: -40000, date: new Date(2020, 1, 4)},
    // {id: 3, text: 'Hospital', amount: -4000, date: new Date(2020, 1, 12)},
    // {id: 4, text: 'Swiggy', amount: -1000, date: new Date(2020, 1, 15)},
    // {id: 5, text: 'Hotel', amount: -2000, date: new Date(2020, 1, 16)},
    // {id: 6, text: 'DMART', amount: -5000, date: new Date(2020, 1, 20)},
  ],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  function deleteTransaction(id) {
    dispatch({type: 'DELETE_TRANSACTION', payload: id})
  }

  function addTransaction(transaction) {
    dispatch({type: 'ADD_TRANSACTION', payload: transaction})
  }
  return (
    <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
      {children}
    </GlobalContext.Provider>
  )
}
