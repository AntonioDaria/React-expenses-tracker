import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AddTransaction from './AddTransaction';
import {GlobalContext} from '../context/GlobalState'

jest.mock('../context/GlobalState');
const addTransaction = jest.fn();

describe('TransactionList component', () => {
    let container;

    beforeEach(() => {
      ({ container} = renderAddTransactionWithContext());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });

    describe('the addTransaction action', () => {
      it('should call add transaction when clicking the add transaction button.', () => {
          let getAllByText;
          ({ getAllByText } = renderAddTransactionWithContext());
          const button = getAllByText("Add transaction");
          fireEvent.click(button[0]);
          expect(addTransaction).toHaveBeenCalled();
      });
  });
});


  const renderAddTransactionWithContext = () => {
    return render(

      <GlobalContext.Provider
      value={{
        transactions: "mockTransaction",
        deleteTransaction: "deleteTransaction",
        addTransaction: addTransaction
      }}
      >
          <AddTransaction />
      </GlobalContext.Provider>
    );
  };