import React, {Component} from 'react'
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onEditUser } from '../../actions/user';

import UserEdit from '../../components/user_profile/user_edit';
import Footer from '../../components/footer';

class User_Edit extends Component {  
    constructor(props){
        super(props);
        this.state = {  
            usr_data: '',
            new_usr_data: {
                email: "",
                first_name: "",
                last_name: "",
                password: "",
                password_confirm: "",
                gender: "",
                age: "",
            },
        };  
    }    
componentWillMount(){
    this.FetchUserProfile()
}
FetchUserProfile(){
    axios({
        method: 'get',
        url: 'https://api.travelerhub.xyz/user',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem("login_token")},
      })
      .then(res =>  {
        this.setState({
            usr_data : res.data,
            new_usr_data: {
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                gender: res.data.gender,
                age: res.data.age,
            },
        })
        //console.log(res)
      });
}
handleInputChange(event,id){
    var token = this.state.new_usr_data;
    token[event.target.id] = event.target.value;
    this.setState( {new_usr_data:token} )
}
handleSubmitEdit(){
    this.props.onEditUser(this.state.new_usr_data)
    .then(function (response) {
        console.log(response)
        alert('save changes!')
    })
}
render(){
        const Background = require('../../static/images/bg_user.png')
        return (
            <div style={{backgroundImage: `url(${Background})`}} >
                <div className="row" style={{margin:0}}>
                    <div  className="col-10 mx-auto" style={{backgroundColor:'#f9f9f9'}}>
                        <div className="usr-profile-layout justify-content-center">       
                                <div id="usr-profile" className="tab-pane fade show active usr-profile-content-layout text-center">
                                    <UserEdit 
                                        UserData={this.state.usr_data}
                                        OnInputChange={this.handleInputChange.bind(this)}
                                        OnSubmitEdit={this.handleSubmitEdit.bind(this)} />
                                </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({onEditUser}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(User_Edit);