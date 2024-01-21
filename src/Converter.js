import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Currency from "./Currency";
import * as icons from 'react-bootstrap-icons';

const options = [
    'AUD','BGN','BRL','CAD','CNY','CZK','DKK','EUR','GBP','HKD','HRK','HUF','IDR','ILS','INR','ISK','JPY','KRW','MXN','MYR','NOK','NZD','PHP','PLN','RON','RUB','SEK','SGD','THB','TRY','USD','ZAR'
  ]


class CurrencyInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return <input value={value} onChange={handleChange} type="number" />
  }
}

const Converter = () => {
    return (
        <div>
            <div className='rowC'>
                <div>
                    <Dropdown options={options} placeholder={'USD'} className="m-2"/>
                    <form className="m-2">
                        <CurrencyInput/>
                    </form>
                </div>
                <div>
                    <Dropdown options={options} placeholder={'EUR'} className="m-2"/>
                    <form className="m-2">
                        <CurrencyInput/>
                    </form>
                </div>
            </div>
            <div className="rowC">
                <button type="button" className="btn btn-outline-secondary">
                    <icons.ArrowLeftRight/>
                </button>
            </div>
        </div>
    )
}

export default Converter;