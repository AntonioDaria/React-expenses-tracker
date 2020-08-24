//  4 We need a Reducer to specify the application state changes to our store(context) in response to certain actions

export const appContextReducer = (state, action) => {

    switch (action.type) {
        default:
            return {
                ...state,
                transactions: state.transactions
            }

    };
}

export default appContextReducer