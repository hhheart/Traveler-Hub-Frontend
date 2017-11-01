

import React, { Component } from 'react';
//import DataSet from '../static/package_response.json'; 
//import '././components/css/App.css';
//var data = require('./package_response.json');
import ItemList from './item_list';

import MyJson from './data.json'


class App extends Component {
  /*constructor(props) {
    super(props)

  }*/
  
  componentDidMount() {
    console.log(MyJson);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">traveler hub</h1>
        </header>
        < ItemList />
      </div>
    );
  }
}

export default App;
