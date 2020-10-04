//  4 We need a Reducer to specify the application state changes to our store(context) in response to certain actions

export const appContextReducer = (state, action) => {

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    };
}

export default appContextReducer