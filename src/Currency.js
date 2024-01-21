import React from 'react';
import { json, checkStatus } from './utils';

class Currency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: null,
    }
  }

  componentDidMount () {
    fetch(`https://api.frankfurter.app/latest`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }

        if (data.Response === 'True') {
          console.log(data);
          this.setState({ currency: data, error: '' });
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error);
      })
  }

  render() {
    if (!this.state.currency) {
      return null;
    }

    const {
      amount,
      base,
      date,
      rates
    } = this.state.currency;

    return (
      <div className="container">
        <div className="row pt-5">
          <div className="col-6">
            <h1>{base}</h1>
            <ul className="list-unstyled">
              <li>
                <p>Amount: {amount}</p>
              </li>
              <li>
                <p>Date: {date}</p>
              </li>
              <li>
                <p>Rates: {rates}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Currency;