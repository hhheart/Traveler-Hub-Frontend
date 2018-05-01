import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import $ from 'jquery';
import Loader from '../components/loader';
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
        console.log(this.props.match.params.id)
        localStorage.removeItem('redirect')
        $('html, body').scrollTop(0);
        if (this.props.isLoggedIn){
            this.props.GET_Package(this.props.match.params.id)
            .then(res => {
                console.log('got packages detail')
                this.setState({ packages: res.payload });
            });
        }
        else {
            localStorage.setItem('redirect',this.props.match.params.id)
            this.props.history.push('/')
        }
    }
    handleLike(){
        this.props.sent_feedback({
            like:true,
            packageId:this.props.match.params.id})
        .then(response => {
            window.location.reload()
        })
    }
    handleDislike(){
        this.props.sent_feedback({
            like:false,
            packageId:this.props.match.params.id})
        .then(response => {
            window.location.reload()
        })
    }
    handleBookmark(){
        this.props.sent_bookmark({
            bookmark:true,
            packageId:this.props.match.params.id})
        .then(function (response) {
            window.location.reload()
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
                <Loader />
            )
        }
    }    
}
function mapStateToProps(state){
    return {
        packages: state.package_search.packages,
        isLoggedIn: state.user.isLoggedIn,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        GET_Package,
        sent_feedback,
        sent_bookmark,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PackageList));
