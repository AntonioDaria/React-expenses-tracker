import { INITIAL_TRANSACTION_CONTEXT_STATE } from './GlobalState';
import { appContextReducer } from './AppReducer';
import {EXAMPLE_TRANSACTION_ARRAY} from '../sampleData/transactionsArray';


describe('the Global state component', () => {
    const initState = INITIAL_TRANSACTION_CONTEXT_STATE;
    let newState;

    beforeEach(() => {
      newState = appContextReducer(initState, {});
    });  
    
    it('should add the transactions array to the global state', () => {
       expect(newState.transactions).toEqual(EXAMPLE_TRANSACTION_ARRAY);
    });
    
});
