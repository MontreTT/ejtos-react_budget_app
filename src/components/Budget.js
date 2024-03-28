// Budget.js
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        if (updatedBudget > 20000) {
            alert("Budget exceeds £20,000!");
            setNewBudget(20000);
        } else if (updatedBudget < ExpenseTotal) {
            alert("Budget lower than spending");
            setNewBudget(newBudget); // No change if budget is lower than spending
        } else {
            setNewBudget(updatedBudget);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{newBudget}</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '5px' }}>{currency}</span>
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </div>
        </div>
    );
};

export default Budget;
