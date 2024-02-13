import React from "react";
import { useState, useEffect} from "react";
import { json, checkStatus } from "./utils";
import Dropdown from 'react-dropdown';
import * as icons from 'react-bootstrap-icons';
import 'react-dropdown/style.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

  
const Convert = () => {

    const [currencyRates, setCurrencyRates] = useState([]);
    const [currencyFrom, setCurrencyFrom] = useState("USD");
    const [currencyTo, setCurrencyTo] = useState("EUR");
    const [currencies, setCurrencies] = useState([]);
    const [fromValue, setFromValue] = useState(1);
    const [toValue, setToValue] = useState(1);

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=USD`)
            .then(checkStatus)
            .then(json)
            .then((data) => {
                setCurrencyFrom("USD");
                setCurrencyTo("EUR");
                setCurrencyRates(data.rates);
                setFromValue(1);
                setToValue(1);
                setCurrencies(Object.keys(data.rates));
                
            });
            convertFromTo();
    }, []);
    
    useEffect(() => {
        fetchCurrency();
    }, [currencyFrom, currencyTo]);

    function fetchCurrency() {
        fetch(`https://api.frankfurter.app/latest?from=${currencyFrom}`)
        .then(checkStatus)
        .then(json)
        .then((data) => {
            setCurrencyRates(data.rates);
        })
    }

    useEffect(() => {
        const baseOptions =  Object.keys(currencyRates);
        setCurrencies(baseOptions);
    }, [currencyFrom]);

    useEffect(() => {
        convertFromTo();
    }, [fromValue, currencyFrom, currencyTo]);

    useEffect(() => {
        convertToFrom();
    }, []);
    function convertFromTo() {
        const rate = currencyRates[currencyTo];
        const convertedValue = fromValue * rate;
        setToValue(convertedValue.toFixed(2));
    }

    function convertToFrom() {
        const rate = currencyRates[currencyTo];
        const convertedValue = toValue / rate;
        setFromValue(convertedValue.toFixed(2));
    }

    function handleCurrencyFromChange(option) {
        setCurrencyFrom(option.value);
        fetchCurrency();
        convertFromTo();
    }

    function handleCurrencyToChange(option) {
        setCurrencyTo(option.value);
        fetchCurrency();
        convertFromTo();
        
    }

    function reverse () {
        setCurrencyTo(currencyFrom);
        setCurrencyFrom(currencyTo);
        setFromValue(toValue);
        
    }

    function handleInputFromChange (value) {
        setFromValue(value);
        convertFromTo();
    }

    function handleInputToChange (value) {
        setToValue(value);
        convertToFrom();
    }

    return (
        <div>
            <div className="rowC">
                <div>
                    <Dropdown
                    options={currencies}
                    value={currencyFrom}
                    onChange={handleCurrencyFromChange}
                    />
                    <input value={fromValue} id='from' onChange={(e) => handleInputFromChange(e.target.value)} type="number"/>
                </div>
                <div>
                    <Dropdown
                    options={currencies}
                    value={currencyTo}
                    onChange={handleCurrencyToChange}
                    />
                      <input value={toValue} id='to' onChange={(e) => handleInputToChange(e.target.value)} type="number"/>
                </div>
            </div>

            <button type="button" className="btn btn-outline-secondary" onClick={reverse}>
                <icons.ArrowLeftRight/>
            </button>
            <div>
            <Tabs>
                <TabList>
                    <Tab>
                        Exchange Rate Chart for {currencyFrom}

                    </Tab>
                    <Tab>
                        Conversion Table for {currencyFrom}
                    </Tab>
                </TabList>
                <TabPanel>
                </TabPanel>
                <TabPanel>
                    <div className="conversionTable"> 
                    <table>
                        <thead>
                            <tr>
                                <th>Currency</th>
                                <th>Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(currencyRates).map(([currency, rate]) => (
                                <tr key={currency}>
                                    <td>{currency}</td>
                                    <td>{rate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    )
}

export default Convert;