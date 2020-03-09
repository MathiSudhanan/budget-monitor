/** @format */

import React, {useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalContext'

export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)

  return (
    <tr key={transaction.id}>
      <td className="td-left">{transaction.date.toLocaleDateString('en-IN')}</td>
      <td className="td-left">{transaction.text} </td>

      <td className="td-right">
        {transaction.amount > 0 ? <span className="rs-span">₹ </span> : <span className="rs-span">₹ (-)</span>}
        {Math.abs(transaction.amount).toFixed(2)}
      </td>
      <td className="td-center">
        <button className="btn-delete" onClick={() => deleteTransaction(transaction.id)}>
          <b>x</b>
        </button>
      </td>
    </tr>
  )
}
