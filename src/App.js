import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0
    }
  }
  
  componentDidMount() {
    //const height = this.divElement.clientHeight;
//this.setState({ height:height });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">traveler hub</h1>
        </header>
        <div style={{backgroundColor: "#37BC9B", height: 500}}>
          <div classname="col" style={{backgroundColor: "red", height: 100}}></div>
          <div classname="col" style={{backgroundColor: "blue", height: 100}}></div>
        </div>
      </div>
    );
  }
}

export default App;
