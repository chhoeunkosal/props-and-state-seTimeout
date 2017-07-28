import React, { Component } from 'react';
import Header from './components/Headers/Header'
import Content from './components/Contents/Content'

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Content/>
      </div>
    );
  }
}
export default App;
