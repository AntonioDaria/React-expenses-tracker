import React from 'react';
import { render } from '@testing-library/react';
import Transaction from './Transaction.js'

const MOCK_TRANSACTIONS = 
    [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]


describe('Transaction component', () => {
    let container;


    beforeEach(() => {
        ({ container} = renderTransaction());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});

const renderTransaction = (mockTransactions = MOCK_TRANSACTIONS) => {
    return render(
        <Transaction transaction={mockTransactions} />
    );
};
