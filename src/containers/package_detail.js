import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PackageDetail from '../components/package_detail';
import axios from 'axios';

class PackageList extends Component {
    constructor(props){
        super(props);
            this.state = {  
                packages: '',
            };  

    }    
    // run before component rendered
    componentWillMount(){
        axios.get(`http://supertam.xyz:5000/package/${this.props.match.params.id}`)
        .then(res => {
            //console.log(res.data)
            this.setState({ packages: res.data });
        });
    }
    IsLoading(){
        if (this.state.packages !== ''){
            return (  
                <PackageDetail package_itm={this.state.packages}/>
            )
        }
        else {
            return (
                <div className="loader mx-auto"></div>
            )
        }
    }
    render(){ 
        return (
            this.IsLoading()
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
        //onRequestPackage,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageList);
