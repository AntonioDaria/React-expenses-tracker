import React, { createContext, useReducer } from 'react'
import appContextReducer from './AppReducer'

// 1 Initial State

export const INITIAL_TRANSACTION_CONTEXT_STATE = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// 2 Create Context

export const GlobalContext = createContext(INITIAL_TRANSACTION_CONTEXT_STATE);



//  3 In order for our components to have access to our global state we need a Provider

//Provider Component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appContextReducer, INITIAL_TRANSACTION_CONTEXT_STATE);

    return (
        <GlobalContext.Provider
            value={{ transactions: state.transactions, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )

}