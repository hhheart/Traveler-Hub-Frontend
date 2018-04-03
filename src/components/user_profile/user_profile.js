import React, {Component} from 'react'
import axios from 'axios';

import UserHistory from './user_history';
import UserEdit from './user_edit';
import Footer from '../../components/footer';
import '../../static/css/user_profile.css';

export default class User_Profile extends Component {  
    constructor(props){
        super(props);
            this.state = {  
                usr_data: '',
                new_usr_data: {
                    email: "",
                    firstname: "",
                    lastname: "",
                    password: "",
                    password_confirm: "",
                    gender: "",
                    age: "",
                },
            };  
    }    
componentWillMount(){
    this.FetchUser()
}
FetchUser(){
    axios({
        method: 'get',
        url: 'http://supertam.xyz:5000/user',
        headers: {'Authorization': 'Bearer '+localStorage.getItem("login_token")},
      })
      .then(res =>  {
        this.setState({
            usr_data : res.data,
            new_usr_data: {
                email: res.data.email,
                firstname: res.data.firstname,
                lastname: res.data.lastname,
                gender: res.data.gender,
                age: res.data.age,
            },
        })
        console.log(res)
      });
}
handleInputChange(event,id){
    var token = this.state.new_usr_data;
    token[event.target.id] = event.target.value;
    this.setState( {new_usr_data:token},console.log(this.state.new_usr_data))
}
handleSubmitEdit(){
    axios({
        method: 'put',
        url: 'http://supertam.xyz:5000/user',
        headers: {'Authorization': 'Bearer '+localStorage.getItem("login_token")},
        body: JSON.stringify(this.state.new_usr_data)
      })
      .then(res =>  {
        this.setState({usr_data : res.data})
        console.log(res)
      });
}
render(){
        return (
            <div className="" style={{backgroundColor:'#f9f9f9'}}>
                <div className="usr-profile-layout mx-auto justify-content-center">
                    <nav>
                        <div className="nav nav-tabs" role="tablist">
                            <a  className="nav-item nav-link active" 
                                data-toggle="tab" 
                                href="#usr-profile" 
                                role="tab">แก้ข้อมูลผู้ใช้งาน</a>
                            <a  className="nav-item nav-link" 
                                data-toggle="tab" 
                                href="#usr-hist" 
                                role="tab">ค้นหาล่าสุด</a>
                        </div>
                    </nav>
                    <div className="tab-content">
                        <div id="usr-profile" className="tab-pane fade show active usr-profile-content-layout text-center">
                            <UserEdit 
                                UserData={this.state.usr_data}
                                OnInputChange={this.handleInputChange.bind(this)}
                                OnSubmitEdit={this.handleSubmitEdit.bind(this)} />
                        </div>
                        <div id="usr-hist" className="tab-pane fade usr-profile-content-layout text-center">
                            <UserHistory />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}