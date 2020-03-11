/** @format */

import React, {useContext, useState} from 'react'
import {GlobalContext} from '../../Context/GlobalContext'
import TransactionsGrid from './TransactionsGrid'
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';

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
    // alert(isShow)

    setShowTransaction(!isShow)
    // alert(isShow)
  }
  
  // const FirstChild = (props) =>{
  //   const childrenArray = React.Children.toArray(props.children);
  //   return childrenArray[0] || null;
  // }

  const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


  return (
    <div>
      <div className="collapsible" onClick={handleTransationList}>
        Balance:{' '}
        {balance.toLocaleString('en-IN', {
          maximumSignificantDigits: 3,
          minimumFractionDigits: 2,
        })}
      </div>

      <CSSTransition
      
        in={isShow}
        timeout={300}
        classNames="my-node"
        unmountOnExit
        onEnter={() => setShowTransaction(true)}
        onExited={() => setShowTransaction(false)}
      >
      <TransactionsGrid isShow={isShow}/>
      </CSSTransition>
    </div>
  )
}
