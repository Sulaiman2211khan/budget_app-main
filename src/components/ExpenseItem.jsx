import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch,currency } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: 'RED_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>{currency}{props.cost}</td>
      <td>
        <button className="btn btn-sm btn-success" onClick={(event) => increaseAllocation(props.name)}>+</button>
      </td>
      
      <td>
        <button className="btn btn-sm btn-warning" onClick={(event) => decreaseAllocation(props.name)}>&#x2212;</button>
      </td>
      <td>
        <button className="btn btn-sm btn-danger"
          onClick={handleDeleteExpense}
        >&times;</button>
      </td>
    </tr>
  );
};

export default ExpenseItem;