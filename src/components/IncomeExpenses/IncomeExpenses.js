/** @format */

import React, {useContext} from 'react'
import './IncomeExpenses.css'
import {GlobalContext} from '../../Context/GlobalContext'

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)
  return (
    <div>
      <div className="amount">
        <h3>Opening Balance: {income.toLocaleString('en-IN', {maximumSignificantDigits: 3})}</h3>
        Date: 31-Jan-2020
      </div>
      <div className="balance">
        <h3>Total Expense: {expense.toLocaleString('en-IN')}</h3>
        Date: 27-Feb-2020
      </div>
    </div> 
  )
}
