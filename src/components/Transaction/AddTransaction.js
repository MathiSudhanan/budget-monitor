/** @format */

import React, {useState, useContext} from 'react'
import {GlobalContext} from '../../Context/GlobalContext'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import './Transaction.css'
export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date())
  const {addTransaction} = useContext(GlobalContext)
  const handleClick = e => {
    const newTransaction = {
      id: -Math.floor(Math.random(1 * 1000000) * 10),
      date,
      text,
      amount: +amount,
    }
    addTransaction(newTransaction)
    setAmount(0)
    setText('')
  }

  const handleChange = date => {
    setDate(date)
  }
  return (
    <div className="row1">
      <div className="inner-row">
        <div className="label">
          <label>Date:</label>
        </div>
        <DatePicker selected={date} onChange={handleChange} />
      </div>
      <div className="inner-row">
        <div className="label">
          <label>Name:</label>
        </div>
        <div className="text1">
          <input className="transaction-text" type="text" onChange={e => setText(e.target.value)} value={text}></input>
        </div>
      </div>
      <div className="inner-row">
        <div className="label">
          <label>Amount:</label>
        </div>
        <div className="text1">
          <input
            className="transaction-text"
            type="text"
            onChange={e => setAmount(e.target.value)}
            value={amount}></input>
        </div>
      </div>

      <div>
        <div className="label"></div>
        <button className="transaction-btn" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  )
}
