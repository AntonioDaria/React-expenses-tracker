import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header.js'

describe('Header component', () => {
    let container;

    beforeEach(() => {
      ({ container} = renderHeader());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});

const renderHeader= () => {
    return render(
      <Header>
        Expense Tracker
      </Header>
    );
  };
  