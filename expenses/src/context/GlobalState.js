import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// 1 Initial State

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// 2 Create Context

export const GlobalContext = createContext(initialState);



//  3 In order for our components to have access to our global state we need a Provider

//Provider Component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider
            value={{ transactions: state.transactions }}>
            {children}
        </GlobalContext.Provider>
    )

}