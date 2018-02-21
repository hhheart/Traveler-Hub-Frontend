import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBar from '../components/search_bar';
import SearchContent from '../components/search_content';

import {onRequestPackage} from '../actions/package_search';

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
            arrival_request: '',
            departure_request: '',

            tags: {
                pkname: '',
                minp: '',
                maxp: '',
                arrive: '',
                depart: '',
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
        this.setState({arrival_request: '&Arrival='+event.target.value})  
    }
    onDepartureChange(event){
        this.setState({departure_request: '&Departure='+event.target.value})  
    }
    onSearchSubmit(){
        this.setState({
            request: 
            this.state.pname_request+
            this.state.minp_request+
            this.state.maxp_request+
            this.state.arrival_request+
            this.state.departure_request
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
                },() => this.onSearchSubmit()) 
                break;
            }
            case "maxp":{
                this.setState({
                    maxp_request: '',
                    tags: {...this.state.tags,maxp: ''},
                },() => this.onSearchSubmit()) 
                break;               
            }
            case "arrive":{
                this.setState({
                    arrival_request: '',
                    tags: {...this.state.tags,arrive: ''},
                },() => this.onSearchSubmit()) 
                break;               
            }
            case "depart":{
                this.setState({
                    departure_request: '',
                    tags: {...this.state.tags,depart: ''},
                },() => this.onSearchSubmit()) 
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
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onRequestPackage,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageSearch);

