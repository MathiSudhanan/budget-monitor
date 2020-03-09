/** @format */

import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../Context/GlobalContext'
import {TransactionsGrid} from './TransactionsGrid'
import './Transaction.css'

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const [isShow, setShowTransaction] = useState(false)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)
  const balance = (income - expense).toFixed(2)
  const handleTransationList = () => {
    setShowTransaction(!isShow)
  }
  return (
    <div>
      <div className="collapsible" onClick={handleTransationList}>
        Balance:{' '}
        {balance.toLocaleString('en-IN', {
          maximumSignificantDigits: 3,
          minimumFractionDigits: 2,
        })}
      </div>
      <TransactionsGrid isShow={isShow}></TransactionsGrid>
    </div>
  )
}
