import React, {Component} from 'react';
import PackageListItem from './package_list_item';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import '../static/css/package_list.css'; 

export default class PackageList extends Component {
    constructor(props){
        super(props);
            this.state = {  
                packages: [],
            };  

    }    
    // run before component rendered
    componentWillMount(){
        axios.get('http://supertam.xyz:5000/package')
        .then(res => {
            console.log(res)
            this.setState({ packages: res.data.packages });
        });
    }
    render_package_list_row(){
        const PackageItem = this.state.packages;
        const rowContent = [];
        for(var i = 0; i < PackageItem.length; i+=4) {
            const oneRow = [];
            oneRow.push(PackageItem.slice(i, i+4).map(item => {
            console.log(item._id)
            return (
                <PackageListItem 
                        key={item._id}
                        package_item={item} />      
            )}))
        rowContent.push(oneRow.map(itm => {return <div className="row mx-auto justify-content-center">{itm}</div>}))
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
                <div className=" bg-light">
                    <div className="container-fluid">
                                                     
                            {this.render_package_list_row()}
                        
                    </div>
                </div>
                <footer className="footer">
                    <div className="text-center align-middle test">pagination</div>
                </footer>
            </div>
        )
    }    
}