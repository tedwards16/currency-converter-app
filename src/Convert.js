import React from "react";
import { useState, useEffect} from "react";
import { json, checkStatus } from "./utils";
import Dropdown from 'react-dropdown';
import * as icons from 'react-bootstrap-icons';
import 'react-dropdown/style.css';

class CurrencyInput extends React.Component {
    render() {
      const { value, handleChange } = this.props;
      return <input value={value} onChange={handleChange} type="number" defaultValue={1} />
    }
  }
  
const Convert = () => {

    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=USD`)
        .then(checkStatus)
        .then(json)
        .then((data) => {
            setCurrencyFrom("USD");
            setCurrencyTo("EUR");
            setCurrencyRates(data.rates);
            getConversionRate();
            console.log(currencyRates);
        })}, [])

    const [currencyRates, setCurrencyRates] = useState([]);
    const [currencyFrom, setCurrencyFrom] = useState();
    const [currencyTo, setCurrencyTo] = useState();
    const [currencies, setCurrencies] = useState([]);
    const [conversionRate, setConversionRate] = useState();

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
    }, [currencyRates]);

    function getConversionRate() {
        const rate = currencyRates[currencyTo];
        console.log(rate);
    }

    function handleCurrencyFromChange(option) {
        setCurrencyFrom(option.value);
        fetchCurrency();
        getConversionRate();
    }

    function handleCurrencyToChange(option) {
        setCurrencyTo(option.value);
        getConversionRate();
        
    }

    function reverse () {
        setCurrencyFrom(currencyTo);
        setCurrencyTo(currencyFrom);
        fetchCurrency();
        getConversionRate();
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
                    <CurrencyInput/>
                </div>
                <div>
                    <Dropdown
                    options={currencies}
                    value={currencyTo}
                    onChange={handleCurrencyToChange}
                    />
                    <CurrencyInput/>
                </div>
            </div>

            <button type="button" className="btn btn-outline-secondary" onClick={reverse}>
                <icons.ArrowLeftRight/>
            </button>
            <div>
            </div>
        </div>
    )
}

export default Convert;