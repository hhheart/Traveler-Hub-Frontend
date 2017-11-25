import React, {Component} from 'react';
import PackageListItem from './package_list_item';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import '../static/css/package_list.css'; 

export default class HomePage extends Component {
    constructor(props){
        super(props);
            this.state = {  
                packages: [],
            };  
    }    
    // run before component rendered
    componentWillMount(){
        axios.get('http://supertam.xyz:3000/package')
        .then(res => {
            console.log(res)
            this.setState({ packages: res.data });
        });
    }
    
    render_package_list_items(){
        const PackageItem = this.state.packages;
        return (
            <div>
                { PackageItem.map(( (package_item,i) => 
                    
                    <PackageListItem 
                        key={package_item.package_id}
                        package_item={package_item} />
                    
                   ))}
            </div>
        )
    }

    render_package_list_row(){
        const PackageItem = this.state.packages;
        const rowContent = [];
        for(var i = 0; i < PackageItem.length; i+=3) {
            const oneRow = [];
            oneRow.push(PackageItem.slice(i, i+3).map(item => {
            return (
                <PackageListItem 
                        key={item.package_id}
                        package_item={item} />      
            )}))
        rowContent.push(oneRow.map(itm => {return <div className="row">{itm}</div>}))
        }
        return rowContent;
    }

    render(){ 
        return ( 
            <div>
                <div className="jumbotron text-center bg-white">
                    <div className="container">
                        <h3>ไปเที่ยวไหนดีนะ ???</h3>
                        <p>
                            <button className="btn btn-primary jumbotron-btn">Ask Ours Expert</button>
                            <button className="btn btn-success jumbotron-btn">Search & Go!</button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }    
}