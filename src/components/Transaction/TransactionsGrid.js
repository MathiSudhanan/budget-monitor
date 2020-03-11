/** @format */
import React, {useContext} from 'react'
import {Transaction} from './Transaction'
import {GlobalContext} from '../../Context/GlobalContext'
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group';

import './Transaction.css'

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

export default ({isShow}) => {
  const {transactions} = useContext(GlobalContext)
  const componentClasses = ['row', 'collapsible-item'];
  // if (isShow) { componentClasses.push('show'); }
  return (
    
    // <TransitionGroup>
    // (<CSSTransition in={isShow} o timeout={500} classNames="my-node"
    // onEnter={() => setShowButton(false)}
    // onExited={() => setShowButton(true)}
    // >
    // {state =>( 
      <div>
        <div /*style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}*/className='row collapsible-item'>
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
      </div>
  //   )}
  // </CSSTransition>) 
          
  
    // <div className={componentClasses.join(' ')}>
    //   <h4 className="text">Transaction List</h4>
    //   <table className="table">
    //     <thead>
    //       <tr className="table-row-head">
    //         <th>Date</th>
    //         <th>Description</th>
    //         <th>Amount</th>
    //         <th> </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {transactions.map(transaction => (
    //         <Transaction key={transaction.id} transaction={transaction}></Transaction>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  )
}
