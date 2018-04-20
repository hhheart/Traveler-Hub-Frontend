import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';


import PackageListItem from './package_list_item';
import Loader from '../components/loader';
import Footer from './footer';
import Pagination from './pagination';

//import '../static/css/package_list.css'; 

class PackageList extends Component {
    constructor(props){
        super(props);
            this.state = {  
                loading: true,
                packages: [],
                total_page: 1,
                page: 1,
            };  

    }    
    componentWillMount(){
        this.fetch_packages_page(this.props.match.params.page_id)
    }
    handlePageChange(page_num){
        this.fetch_packages_page(page_num)
    }
    fetch_packages_page(num){
        this.setState({loading:true})
        axios.get(`https://api.travelerhub.xyz/package?page=${num}`)
        .then(res => {
            this.setState({ 
                loading: false,
                packages: res.data.packages,  
                total_pages: res.data.totalPage,
                current_page: res.data.currentPage,
            });
        })
    }
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
        const Background = require('../static/images/bg_user.png')
        if(this.state.loading) {
            return (
                 <Loader />
            )
        }
        else {
            return (
                <div style={{backgroundImage: `url(${Background})`}} >
                    <div className="row" style={{margin:0}}>
                        <div  className="col-10 mx-auto" style={{backgroundColor:'#f9f9f9'}}>                       
                            <div className="bg-light" style={{marginTop:5+'vh'}}>
                                <div className="container-fluid">                         
                                    {this.render_package_list_row()} 
                                </div>
                                <Pagination 
                                    total_pages={this.state.total_pages} 
                                    current_page={this.state.current_page}
                                    onChangePage={this.handlePageChange.bind(this)}
                                    />
                            </div>                        
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
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
