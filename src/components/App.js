import React, { Component } from 'react';
//import DataSet from '../static/package_response.json'; 
//var data = require('./package_response.json');
import PackageList from './package_list';

//import '../static/css/App.css';
import MyJson from './data.json';


class App extends Component {
  /*constructor(props) {
    super(props)

  }*/
  
  componentDidMount() {
    console.log(MyJson);
  }

  render() {
    return (
      <div className="App ">
        <header className="App-header">
            <h1 className="App-title">traveler hub</h1>
        </header>
        <div className="container">
        <div className="row">
            <div className="col-md"> 
                hello1 
            </div>
            <div className="col-md"> 
                hello2
            </div>
        </div>
        </div>
        <PackageList />
      </div>
    );
  }
}

export default App;
