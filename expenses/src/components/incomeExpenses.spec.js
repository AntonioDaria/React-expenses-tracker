import React from 'react';
import { render } from '@testing-library/react';
import {IncomeExpenses}  from './IncomeExpenses';



describe('IncomeExpenses component', () => {
    let container;

    beforeEach(() => {
      ({ container} = renderIncomeExpenses());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });

    it.todo('should display the right amount for income');
    it.todo('should display the right amount for expense');
});

const renderIncomeExpenses= () => {
    return render(
      <IncomeExpenses/>
    );
  };
  