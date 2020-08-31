import React from 'react';
import { render, wait } from '@testing-library/react';
import Balance from './Balance.js'
import { GlobalContext, INITIAL_TRANSACTION_CONTEXT_STATE} from '../context/GlobalState'


let dispatch = jest.fn();
describe('Balance component', () => {
    let container;

    it('should match the snapshot', async () => {
      const renderBalance = () => {
        return render(
            <Balance/>
        );
      };
      ({ container } = renderBalance());
      expect(container).toMatchSnapshot();
    });
    

    it('should display the right balance', async () => {
      ({ container } = renderBalanceWithContext());
      await wait();
      expect(container).toMatchSnapshot();
    });

     
});
  

const renderBalanceWithContext = () => {
  let mockTransactions = INITIAL_TRANSACTION_CONTEXT_STATE.transactions
  return render(
    
    <GlobalContext.Provider
    value={{
      dispatch,
      transactions: mockTransactions
    }}
    >
       <Balance/>
    </GlobalContext.Provider>
  );
};
