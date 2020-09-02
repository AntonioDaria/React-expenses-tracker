const { calculateExpense, calculateIncome} = require("./utils");

describe('Utils.spec', () => {
    
    let amounts = [12, 32, -42];
  
    beforeEach(() => {
        amounts
    });

    describe('the calculate Income function', () => {
        it('return the right total income', () => {
        
            expect(parseInt(calculateIncome(amounts))).toEqual(44)
        });
    });

    describe('the calculate Expense function', () => {
        it('should return the right total expense ', () => {
        
            expect(parseInt(calculateExpense(amounts))).toEqual(42)    
        });
    });
    
});
