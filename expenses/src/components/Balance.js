import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)


  const arrayBalance = transactions.map(transaction => { return transaction.amount })
  const total = arrayBalance.reduce((acc, item) => {
    return (acc += item)
  }, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance