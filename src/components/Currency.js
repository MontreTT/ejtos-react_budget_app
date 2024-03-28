import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { setCurrency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState('£');

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
        setCurrency(event.target.value);
    };

    return (
        <div>
            <label htmlFor="currencySelect">Currency:</label>
            <select id="currencySelect" value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;
