import React, { Component } from 'react';

import './App.css';

import HomeLayout from './layout/Home';
import BasicLayout from './layout/BasicLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HomeLayout /> */}
        <BasicLayout />
      </div>
    );
  }
}

export default App;
