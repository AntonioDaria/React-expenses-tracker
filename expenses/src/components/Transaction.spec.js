import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Transaction from './Transaction.js'
import {GlobalContext} from '../context/GlobalState'


const MOCK_TRANSACTIONS =
    [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]


jest.mock('../context/GlobalState');
const deleteTransaction = jest.fn();





describe('Transaction component', () => {
    let container;


    beforeEach(() => {
        ({ container } = renderTransactionWithContext());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });

    describe('the deleteTransaction action', () => {
        it('should call delete transaction when clicking the X button.', () => {
            let getAllByText;
            ({ getAllByText } = renderTransactionWithContext());
            const button = getAllByText("x");
            fireEvent.click(button[0]);
            expect(deleteTransaction).toHaveBeenCalled();
        });
    });
});


const renderTransactionWithContext = (mockTransactions = MOCK_TRANSACTIONS) => {
    return render(

      <GlobalContext.Provider
      value={{
        transactions: mockTransactions,
        deleteTransaction: deleteTransaction
      }}
      >
          <Transaction transaction={mockTransactions} />
      </GlobalContext.Provider>
    );
  };