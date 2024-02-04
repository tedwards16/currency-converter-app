import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Convert from './Convert';
import Chart from './Chart';




const App = () => {
  return (
    <div className="App">
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <h2>Currency Converter</h2>
      </nav>
      <Convert/>
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
            </TabPanel>
        </Tabs>
            <footer className='bg-light mt-5'>Footer</footer>
    </div>
  );
}

export default App;

