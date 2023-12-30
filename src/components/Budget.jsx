// Budget.jsx
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, currency} = useContext(AppContext); // Add currencySign
  const [budget_set, setBudget] = useState(budget);

  useEffect(() => {
    setBudget(budget);
  }, [budget]);

  useEffect(() => {
    setBudget(budget_set);
  }, [budget_set]);

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  return (
    <div className="alert alert-secondary">
      <span> Budget: {currency}:</span>{' '}
      <input
        className="input-group-prepend p-1"
        required="required"
        type="number"
        id="cost"
        value={budget_set}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
