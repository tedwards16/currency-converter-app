import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Currency from "./Currency";
import * as icons from 'react-bootstrap-icons';



class CurrencyInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return <input value={value} onChange={handleChange} type="number" defaultValue={1} />
  }
}



class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            base: ['AUD','BGN','BRL','CAD','CNY','CZK','DKK','EUR','GBP','HKD','HRK','HUF','IDR','ILS','INR','ISK','JPY','KRW','MXN','MYR','NOK','NZD','PHP','PLN','RON','RUB','SEK','SGD','THB','TRY','USD','ZAR'],
            selectedBaseFrom: '',
            selectedBaseFrom: ''
        }
    }

    handleBaseChangeFrom = (option) => {
        const selectedBaseFrom = option.value
        this.setState({selectedBaseFrom});
    }
    
    handleBaseChangeTo = (option) => {
        const selectedBaseTo = option.value
        this.setState({selectedBaseTo});
    }
    render() {
        const {
            base,
            selectedBaseFrom,
            selectedBaseTo
        } = this.state;

        return (
            <div>
                <div className='rowC'>
                    <div>
                        <Dropdown 
                          options={base} placeholder={'USD'} className="m-2" onChange={this.handleBaseChangeFrom} value={selectedBaseFrom}/>
                        <form className="m-2">
                            <CurrencyInput/>
                        </form>
                    </div>
                    <div>
                        <Dropdown options={base} placeholder={'EUR'} className="m-2" onChange={this.handleBaseChangeTo} value={selectedBaseTo}/>
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

}

export default Converter;