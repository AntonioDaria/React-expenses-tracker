import React, { createContext, useReducer } from 'react'
import appContextReducer from './AppReducer'

// 1 Initial State

export const INITIAL_TRANSACTION_CONTEXT_STATE = {
    transactions: [ 
       
    ]
}

// 2 Create Context

export const GlobalContext = createContext(INITIAL_TRANSACTION_CONTEXT_STATE);



//  3 In order for our components to have access to our global state we need a Provider

//Provider Component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appContextReducer, INITIAL_TRANSACTION_CONTEXT_STATE);

//Actions to make calls to reducer

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider
            value={{ transactions: state.transactions,
            deleteTransaction,
            addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )

}

