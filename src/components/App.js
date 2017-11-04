import React, { Component } from 'react';
import PackageList from './package_list';
//import '../static/css/App.css';
import Json from './data.json';
import axios from 'axios';


class App extends Component {  
  constructor(props){
    super(props);
        this.state = { 
            //packages: []   
            packages: Json,
        };
    }    
    componentWillMount(){
        axios.get('https://cors-anywhere.herokuapp.com/http://supertam.xyz:3000/package')
        .then(res => {
            //console.log(res)
            this.setState({ packages: res.data });
        });
    }
    render(){
        return ( 
            <div>
                <PackageList packages={this.state.packages} />
            </div>
        )
    }
}

export default App;
