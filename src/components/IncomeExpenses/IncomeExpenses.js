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
  var date = new Date()

  const fromDate = new Date(date.getFullYear(), date.getMonth(), 0)
  const toDate = date

  return (
    <div>
      <div id="amount">
        <h3>Opening Balance: {income.toLocaleString('en-IN', {maximumSignificantDigits: 3})}</h3>
        <span>Date: {fromDate.toLocaleDateString('en-IN')}</span>
      </div>
      <div id="balance">
        <h3>Total Expense: {expense.toLocaleString('en-IN')}</h3>
        <span>Date: {toDate.toLocaleDateString('en-IN')}</span>
      </div>
    </div>
  )
}
