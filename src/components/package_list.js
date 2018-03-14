import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import {onRequestPackage} from '../actions/packages_get';
import axios from 'axios';

import Pagination from './pagination';
import PackageListItem from './package_list_item';
import Footer from './footer';

//import '../static/css/package_list.css'; 

class PackageList extends Component {
    constructor(props){
        super(props);
            this.state = {  
                packages: [],
                total_page: 1,
                page: 1,
            };  

    }    
    // run before component rendered
    componentWillMount(){
        this.fetch_packages_page(this.props.match.params.page_id)
    }
    fetch_packages_page(num){
        axios.get(`http://supertam.xyz:5000/package?page=${num}`)
        .then(res => {
            this.setState({ 
                packages: res.data.packages,  
                total_pages: res.data.totalPage,
                current_page: res.data.currentPage,
            });
        })
    }
    /*onChangePage(num){
        console.log(num)
    }*/
    render_package_list_row(){
        const PackageItem = this.state.packages;
        const rowContent = [];
        for(var i = 0; i < PackageItem.length; i+=4) {
            const oneRow = [];
            oneRow.push(PackageItem.slice(i, i+4).map(item => {
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
                <div className="bg-light">
                    <div className="container-fluid">                         
                        {this.render_package_list_row()} 
                    </div>
                    <Pagination 
                        total_pages={this.state.total_pages} 
                        current_page={this.state.current_page}
                        />
                </div>
                <Footer />
            </div>
        )
    }    
}
function mapStateToProps(state){
    return {
        //packages: state.package_search.packages,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        //onRequestPackage,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageList);
