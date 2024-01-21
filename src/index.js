import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Converter from './Converter';
import Chart from './Chart';
import Table from './Table';
import reportWebVitals from './reportWebVitals';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Converter/>
    <Tabs>
      <TabList>
        <Tab>
          Exchange Rate Chart
        </Tab>
        <Tab>
          Conversion Table
        </Tab>
      </TabList>

      <TabPanel>
        <Chart/>
      </TabPanel>
      <TabPanel>
        <Table/>
      </TabPanel>
    </Tabs>
    <footer className='bg-light mt-5'>Footer</footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
