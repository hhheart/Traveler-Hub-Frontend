import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserHistory } from '../../actions/user';

import UserHistory from '../../components/user_profile/user_history';
import Footer from '../../components/footer';
import '../../static/css/user_profile.css';

class User_History extends Component {  
    constructor(props){
        super(props);
        this.state = {  
            Isloading: true,
            history: []
        };  
    }    
componentWillMount(){
    this.FetchUserHistory()
}
FetchUserHistory(){
    this.props.getUserHistory()
    .then((res) => {
        console.log(res)
        this.setState({
            history:res.payload,
            Isloading: false
        })
    })   
}
render(){
        const Background = require('../../static/images/bg_user.png')
        return (
            <div style={{backgroundImage: `url(${Background})`}} >
                <div className="row" style={{margin:0}}>
                    <div  className="col-10 mx-auto" style={{backgroundColor:'#f9f9f9'}}>
                        <div className="usr-profile-layout justify-content-center text-center">       
                            <UserHistory 
                                Isloading={this.state.Isloading}
                                HistoryPackages={this.state.history}/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getUserHistory
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(User_History);