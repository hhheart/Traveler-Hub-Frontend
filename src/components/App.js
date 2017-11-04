import React, { Component } from 'react';
import PackageList from './package_list';

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
        axios.get('https://cors-anywhere.herokuapp.com/http://supertam.xyz:3000/package')
        .then(res => {
            console.log(res)
            this.setState({ packages: res.data });
        });
    }
    render(){
        return ( 
            <div>
                <img  alt='bunny' src={require('../static/images/polebunny.gif')}/>
                <PackageList packages={this.state.packages} />
            </div>
        )
    }
}

export default App;
