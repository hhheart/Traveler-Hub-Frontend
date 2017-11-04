import React, { Component } from 'react';

import PackageList from './package_list';
import Navbar from './navbar';

import axios from 'axios';
import '../static/css/App.css';
//import Json from './data.json';

class App extends Component {  
  constructor(props){
    super(props);
        this.state = { 
            //packages: []   
            packages: [],
        };
    }    
    componentWillMount(){
        axios.get('http://supertam.xyz:3000/package')
        .then(res => {
            console.log(res)
            this.setState({ packages: res.data });
        });
    }
    render(){
        return ( 
            <div>
                <Navbar />
                <main>
                    <PackageList packages={this.state.packages} />
                </main>
            </div>
        )
    }
}

export default App;
