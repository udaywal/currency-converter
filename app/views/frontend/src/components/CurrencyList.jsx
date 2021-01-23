import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrencyList (props) {

    console.log(props);

    const [rates, setRates] = useState({ 'INR': 0, 'AUD': 0, 'CAD': 0, 'JPY': 0 })

    useEffect(() => {
        axios.get(`https://api.exchangeratesapi.io/latest?base=${props.currency}`)
        .then(res => {
            console.log(res.data);
            let data = res.data.rates
            setRates({ 
                'INR': parseFloat(data.INR).toFixed(2), 
                'AUD': parseFloat(data.AUD).toFixed(2), 
                'CAD': parseFloat(data.CAD).toFixed(2), 
                'JPY': parseFloat(data.JPY).toFixed(2), 
            })
        })
        .catch(err => console.log(err))
    }, [props.currency])

    return (
        <div className="row d-flex flex-column currency-row">
            <div className="currency-card">
                <div>
                    <img src={"https://restcountries.eu/data/ind.svg"} alt="flag"/>
                    <p>Indian Rupee</p>
                </div>
                <h2>₹ {rates.INR}</h2>
            </div>
            <div className="currency-card">
                <div>
                    <img src={"https://restcountries.eu/data/aus.svg"} alt="flag"/>
                    <p>Australian Dollar</p>
                </div>
                <h2>A$ {rates.AUD}</h2>
            </div>
            <div className="currency-card">
                <div>
                    <img src={"https://restcountries.eu/data/can.svg"} alt="flag"/>
                    <p>Canadian Dollar</p>
                </div>
                <h2>C$ {rates.CAD}</h2>
            </div>
            <div className="currency-card">
                <div>
                    <img src={"https://restcountries.eu/data/jpn.svg"} alt="flag"/>
                    <p>Japanese Yen</p>
                </div>
                <h2>¥ {rates.JPY}</h2>
            </div>
        </div>
    );
}

export default CurrencyList;