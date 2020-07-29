import React from 'react';
import { render } from '@testing-library/react';
import AddTransaction from './AddTransaction';



describe('TransactionList component', () => {
    let container;

    beforeEach(() => {
      ({ container} = renderAddTransaction());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});

const renderAddTransaction= () => {
    return render(
      <AddTransaction/>
    );
  };