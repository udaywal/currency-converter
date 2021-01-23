import React, { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import CurrencyList from './CurrencyList';

import Select from 'react-select';
import axios from 'axios';

function App() {

    const [selection, setSelection] = useState(null);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/currency/list`)
        .then(res => {
            console.log(res.data);
            let data = res.data.data.map(c => {
                return { value: c.symbol, label: c.name }
            })
            setOptions(data)
        })
        .catch(err => console.log(err))
    }, [])

    function handleChange (selectedOption) {
        console.log(`Option selected:`, selectedOption);
        setSelection(selectedOption);
    };

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row d-flex flex-row selection-row">
                    <h2>Select currency</h2>
                    <Select
                        className="select"
                        value={selection}
                        onChange={handleChange}
                        options={options}
                    />
                </div>
                {selection && <CurrencyList currency={selection.value} />}
            </div>
            <Footer />
        </div>
    )

}

export default App;