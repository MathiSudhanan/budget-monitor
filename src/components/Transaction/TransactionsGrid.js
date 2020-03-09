/** @format */
import React, {useContext} from 'react'
import {Transaction} from './Transaction'
import {GlobalContext} from '../../Context/GlobalContext'

import './Transaction.css'

export const TransactionsGrid = ({isShow}) => {
  const {transactions} = useContext(GlobalContext)

  return isShow ? (
    <div className="collapsible-item">
      <h4 className="text">Transaction List</h4>
      <table className="table">
        <thead>
          <tr className="table-row-head">
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction}></Transaction>
          ))}
        </tbody>
      </table>
    </div>
  ) : null
}
