import React, { Component } from 'react';
import './App.css';
import PigPen from './components/PigPen.js';


class App extends Component {
  

	panicking = () => {

	}

  render() {
    return (
      <div className="App">
        <PigPen panicking={this.panicking}/>
      </div>
    );
  }
}

export default App;
