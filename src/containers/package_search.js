import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBar from '../components/search_bar';
import SearchContent from '../components/search_content';

import {onRequestPackage, onSetminp} from '../actions/package_search';

import '../static/css/package_search.css';
class PackageSearch extends Component{
    constructor() {
        super()
        this.state = {
            loading: false,

            request:'',

            pname_request: '',
            minp_request: '',
            maxp_request: '',
            arrival: '',
            departure: '',

            tags: {
                pkname: '',
                minp: '',
                maxp: '',
                avl: '',
                dpt: '',
            }
        }
    }    
    onPNameChange(event){   
        this.setState({
            pname_request: '&name='+event.target.value,
            tags: {...this.state.tags,pkname: event.target.value},

        })  
    }
    onMinPriceChange(event){
        //this.props.onSetminp(event.target.value)
        this.setState({
            minp_request: '&minPrice='+event.target.value,
            tags: {...this.state.tags,minp: event.target.value},
        })    
    }
    onMaxPriceChange(event){      
        this.setState({
            maxp_request: '&maxPrice='+event.target.value,
            tags: {...this.state.tags,maxp: event.target.value},
        })  
    }
    onArrivalChange(event){
        this.setState({arrival: '&Arrival='+event.target.value})  
    }
    onDepartureChange(event){
        this.setState({departure: '&Departure='+event.target.value})  
    }
    onSearchSubmit(event){
        this.setState({
            request: 
            this.state.pname_request+
            this.state.minp_request+
            this.state.maxp_request+
            this.state.arrival+
            this.state.departure
            ,
            loading:true,
        },() => this.getRequestLink())
    }
    getRequestLink(){
        console.log(this.state.request)
        this.props.onRequestPackage(this.state.request)
        .then(function (response) {
            console.log(response);
        })
        .then (()=> {
            this.setState({loading:false})
        })
    }
    onReset(e){
        switch (e){
            case "pkname":{
                this.setState({
                    pname_request: '',
                    tags: {...this.state.tags,pkname: ''},
                }) 
                break;
            }
            case "minp":{
                this.setState({
                    minp_request: '',
                    tags: {...this.state.tags,minp: ''},
                }) 
                break;
            }
            case "maxp":{
                this.setState({
                    maxp_request: '',
                    tags: {...this.state.tags,maxp: ''},
                }) 
                break;               
            }
            default: {
                return console.log('defautl case reset')
            }

        }        
    }
    render(){
        return (    
            <div>         
                <div className="container-fluid layout-main row bg-color-custom">     
                    <div className="col-3 ">
                        <SearchBar
                            loading={this.state.loading}

                            onPNameChange={this.onPNameChange.bind(this)}
                            onMinPriceChange={this.onMinPriceChange.bind(this)}
                            onMaxPriceChange={this.onMaxPriceChange.bind(this)}
                            onSearchSubmit={this.onSearchSubmit.bind(this)}   
                            onArrivalChange={this.onArrivalChange.bind(this)}
                            onDepartureChange={this.onDepartureChange.bind(this)}

                            tags={this.state.tags}
                            
                            onReset={this.onReset.bind(this)}
                        />
                    </div>
                    <div className="col-9 ">
                        <SearchContent 
                            loading={this.state.loading}
                            packages={this.props.packages}

                            tags={this.state.tags}
                            onReset={this.onReset.bind(this)}
                        /> 
                    </div>                  
                </div>
                <footer className="test-home-footer">
                </footer>
        </div>
        )
    }
}
function mapStateToProps(state){
    return {
        packages: state.package_search.packages,
        minp: state.package_search.minp,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onRequestPackage,
        onSetminp,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageSearch);

