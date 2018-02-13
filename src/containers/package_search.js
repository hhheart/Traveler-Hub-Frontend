import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBar from '../components/search_bar';
import SearchContent from '../components/search_content';

import {onRequestPackage} from '../actions/package_search';

class PackageSearch extends Component{
    constructor() {
        super()
        this.state = {
            request:'',
            pname_request: '',
            minp_request: '',
            maxp_request: '',

        }
    }    
    getRequestLink(){
        this.setState({request: 
            this.state.pname_request+
            this.state.minp_request+
            this.state.maxp_request
        })
    }
    onPNameChange(event){   
        this.setState({pname_request: '&name='+event.target.value})  
        console.log(this.state.pname_request)      
    }
    onMinPriceChange(event){
        this.setState({minp_request: '&minPrice='+event.target.value}) 
        console.log(this.state.minp_request)   
    }
    onMaxPriceChange(event){      
        this.setState({maxp_request: '&maxPrice='+event.target.value})
        console.log(this.state.maxp_request)   
    }
    onSearchSubmit(event){
        this.getRequestLink()
        console.log(this.state.request)
        this.props.onRequestPackage(this.state.request)
        .then(function (response) {
            console.log(response);
        })
    }
    render(){
        return (     
            <div>         
                <div className="container-fluid row bg-danger" style={{margin:0}}>     
                    <div className="col-3">
                        <SearchBar
                            onPNameChange={this.onPNameChange.bind(this)}
                            onMinPriceChange={this.onMinPriceChange.bind(this)}
                            onMaxPriceChange={this.onMaxPriceChange.bind(this)}
                            onSearchSubmit={this.onSearchSubmit.bind(this)}             
                        />
                    </div>
                    <div className="col-9 bg-info">
                        <SearchContent 
                            packages={this.props.packages}
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
        packages: state.package_search.packages
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onRequestPackage
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageSearch);

