import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'AUD','BGN','BRL','CAD','CNY','CZK','DKK','EUR','GBP','HKD','HRK','HUF','IDR','ILS','INR','ISK','JPY','KRW','MXN','MYR','NOK','NZD','PHP','PLN','RON','RUB','SEK','SGD','THB','TRY','USD','ZAR'
  ]

const Converter = () => {
    return (
        <div className='rowC'>
        <Dropdown options={options} placeholder={'USD'}/>
        <Dropdown options={options} placeholder={'EUR'}/>
    </div>
    )
}

export default Converter;