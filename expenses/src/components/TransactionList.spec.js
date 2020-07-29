import React from 'react';
import { render } from '@testing-library/react';
import TransactionList from './TransactionList';



describe('TransactionList component', () => {
    let container;

    beforeEach(() => {
      ({ container} = renderTransactionList());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});

const renderTransactionList= () => {
    return render(
      <TransactionList/>
    );
  };
  