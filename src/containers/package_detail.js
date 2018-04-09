import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';
import axios from 'axios';

import PackageDetail from '../components/package_detail';
import { GET_Package } from '../actions/packages_get';
import { sent_feedback, sent_bookmark } from '../actions/feedback';

class PackageList extends Component {
    constructor(props){
        super(props);
            this.state = {  
                packages: '',
            };  

    }    
    // run before component rendered
    componentWillMount(){
        $('html, body').scrollTop(0);
        axios.get(`https://api.travelerhub.xyz/package/${this.props.match.params.id}`)
        .then(res => {
            //console.log(res.data)
            this.setState({ packages: res.data });
        });
        this.props.GET_Package(this.props.match.params.id)
        .then(res => {
            console.log(res)
        });
    }
    handleLike(){
        //console.log('like & '+this.props.match.params.id)
        this.props.sent_feedback({like:true,packageId:this.props.match.params.id})
        .then(function (response) {
            alert('thank you! for like')
        })
    }
    handleDislike(){
        //console.log('dislike & '+this.props.match.params.id)
        this.props.sent_feedback({like:false,packageId:this.props.match.params.id})
        .then(function (response) {
            alert(' thank you! for dislike')
        })
    }
    handleBookmark(){
        this.props.sent_bookmark({bookmark:true,packageId:this.props.match.params.id})
        .then(function (response) {
            alert(' thank you! for bookmark')
        })
    }
    render(){ 
        if (this.state.packages !== ''){
            return (  
                <PackageDetail 
                    onClickLike={this.handleLike.bind(this)}
                    onClickDislike={this.handleDislike.bind(this)}
                    onClickBookmark={this.handleBookmark.bind(this)}
                    package_itm={this.state.packages}/>
            )
        }
        else {
            return (
                <div className="loader mx-auto"></div>
            )
        }
    }    
}
function mapStateToProps(state){
    return {
        packages: state.package_search.packages,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        GET_Package,
        sent_feedback,
        sent_bookmark,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageList);
