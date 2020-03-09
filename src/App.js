/** @format */

import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {IncomeExpenses} from './components/IncomeExpenses/IncomeExpenses'
import {AddTransaction} from './components/Transaction/AddTransaction'
import {TransactionList} from './components/Transaction/TransactionList'
import {GlobalProvider} from './Context/GlobalContext'

function App() {
  return (
    <div className="centerScreen">
      <Header></Header>
      <GlobalProvider>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </GlobalProvider>
    </div>
  )
}

export default App
