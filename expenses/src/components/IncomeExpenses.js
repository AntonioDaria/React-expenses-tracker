import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import {calculateIncome, calculateExpense} from "../utils/utils"

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => { return transaction.amount })

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+{calculateIncome(amounts)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${calculateExpense(amounts)}</p>
            </div>
        </div>
    )
}



export default IncomeExpenses
