import React from 'react'
import Footer from '../../components/footer';


import '../../static/css/user_profile.css';

const RenderAppendInput = () => {
    return (
        <div class="input-group-append">
            <span class="input-group-text btn btn-secondary" id="basic-addon2">
                <i className="fa fa-pencil" />
            </span>
        </div>        
    )
}

const Profile = () => {
    return (
        <div className="usr-profile-content-mx">
            <img src={require("../../static/images/user.png")} className="usr-profile-img img-fluid" alt="ProfileImage"/>
            <div className="input-group usr-profile-input-mx mx-auto">
                <input type="text" className="form-control" placeholder="อีเมลล์" />
                <RenderAppendInput />
            </div>           
            <div className="input-group usr-profile-input-mx mx-auto">
                <input type="password" className="form-control" placeholder="รหัสผ่านใหม่"/>
                <input type="password" className="form-control" placeholder="ยืนยันรหัสผ่าน"/>
                <RenderAppendInput />  
            </div>
            <div className="input-group usr-profile-input-mx mx-auto">
                <input type="text" className="form-control" placeholder="ชื่อ"/>
                <RenderAppendInput />
            </div>
            <div className="input-group usr-profile-input-mx mx-auto">
                <input type="text" className="form-control" placeholder="นามสกุล"/>
                <RenderAppendInput />
            </div>
            <div className="input-group usr-profile-input-mx mx-auto">
                <select className="custom-select">
                    <option value="1" selected>ชาย</option>
                    <option value="2">หญิง</option>
                </select>
                <RenderAppendInput />
                <input type="text" className="form-control" placeholder="อายุ"/>
                <RenderAppendInput />
            </div>
            <button type="button" className="btn btn-outline-warning btn-custom">ยืนยันแก้ไข</button>
        </div>
    )
}
const Statistic = () => {
    return (
        <div>สถิติการใช้งาน</div>
    )
}
const User_Profile = () => {
    return (
        <div className="" style={{backgroundColor:'#f9f9f9'}}>
            <div className="usr-profile-layout mx-auto justify-content-center">
                <nav>
                <div className="nav nav-tabs" role="tablist">
                <a className="nav-item nav-link active" data-toggle="tab" href="#usr-profile" role="tab">แก้ข้อมูลผู้ใช้งาน</a>
                <a className="nav-item nav-link" data-toggle="tab" href="#usr-stat" role="tab">สถิติการใช้งาน</a>
                </div>
                </nav>
                <div className="tab-content">
                <div id="usr-profile" className="tab-pane fade show active usr-profile-content-layout text-center" role="tabpanel">
                    <Profile/></div>
                <div id="usr-stat" className="tab-pane fade usr-profile-content-layout text-center" role="tabpanel">
                    <Statistic/></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default User_Profile