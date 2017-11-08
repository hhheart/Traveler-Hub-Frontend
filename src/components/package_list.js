import React, {Component} from 'react';

import PackageListItem from './package_list_item';

import '../static/css/style.css'; 

import axios from 'axios';

import { Link } from 'react-router-dom';

class PackageList extends Component {
    constructor(props){
        super(props);
            this.state = {  
                packages: [],
                //PackageItem: [],
            };  

    }    

    componentWillMount(){
        axios.get('http://supertam.xyz:3000/package')
        .then(res => {
            console.log(res)
            this.setState({ packages: res.data });
        });
    }
    
    render_package_list_items(){
        let PackageItem = this.state.packages;
        return (
            <div>
                {PackageItem.map(( package_item => 
                    <PackageListItem 
                        key={package_item.package_id}
                        package_item={package_item} />
                ))}
            </div>
        )
    }

    render(){ 
        return ( 
            <ul className="list-group">
                <Link to="/test/test-link">go test me</Link>
                {this.render_package_list_items()}
            </ul>
        )
    }
        
}

export default PackageList;