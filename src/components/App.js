import React, { Component } from 'react';

//import '././components/css/App.css';

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
      </div>
    );
  }
}

export default App;
