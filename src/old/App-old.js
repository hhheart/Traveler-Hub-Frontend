import React, { Component } from 'react';

//import PackageList from './package_list';
//import PackageDetail from './package_detail';
import Navbar from './navbar';

import axios from 'axios';
import '../static/css/App.css';
//import Json from '../data.json';

class App extends Component {  
    constructor(props){
        super(props);
            this.state = {  
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
        let renderData = (this.props.children);  
        return ( 
            <div>
                <Navbar />
                <main>
                    {renderData}
                </main>
            </div>
        )
    }
}

export default App;
