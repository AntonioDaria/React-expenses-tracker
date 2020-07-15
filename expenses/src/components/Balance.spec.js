import React from 'react';
import { render } from '@testing-library/react';
import Balance from './Balance.js'

describe('Balance component', () => {
    let container;

    beforeEach(() => {
      ({ container} = renderBalance());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});

const renderBalance = () => {
    return render(
        <Balance/>
    );
  };
  
  