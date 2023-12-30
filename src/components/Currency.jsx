//  Currency.jsx
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../../src/App.css'; 
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState('');

    const alertType = 'alert-success'

    const changeCurrency = (newCurrency) => {
        setSelectedCurrency(newCurrency);
        dispatch({ type: 'SET_CURRENCY', payload: newCurrency });
        dispatch({ type: 'SET_CURRENCY_SIGN', payload: newCurrency });
    };

    return (
        <div className={`alert ${alertType}`}>
            <span>Currency: </span>
            <select
                className="custom-select w-50 custom-select-color"
                value={selectedCurrency}
                onChange={(event) => changeCurrency(event.target.value)}
            >
                <option value="">Choose...</option>
                <option value="£"> £ Pound</option>
                <option value="₹"> ₹ Rupees</option>
                <option value="د.إ">Durham</option>
                <option value="€">€ Euro</option>
                <option value="$">$ Dolor</option>
            </select>
        </div>
    );
};

export default Currency
