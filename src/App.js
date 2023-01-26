import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="application">
        <header>
          <nav>
            <h1>Math Magicians</h1>
            <ul>
              <li>
                <link to="/" className="home_link" />
                Home
              </li>
              <li>
                <link to="/Calculator" className="calculator_link" />
                Calculator
              </li>
              <li>
                <link to="/Quote" className="quote_link" />
                Quote
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
