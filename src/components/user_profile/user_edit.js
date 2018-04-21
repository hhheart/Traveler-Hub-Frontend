import React from 'react'

import { REQUEST_ROOT } from '../../constants/endpoints';

const AppendInput = () => {
    return (
        <div className="input-group-append">
            <span className="input-group-text btn btn-secondary" id="basic-addon2">
                <i className="fa fa-pencil" />
            </span>
        </div>        
    )
}
const Gender = ({UserData,OnInputChange}) => {
    if (UserData.gender === 'male'){
        return (
            <select id="gender" onChange={OnInputChange} className="custom-select">
            <option value="male" selected>ชาย</option>
            <option value="female">หญิง</option>
            </select>
        )
    }
    else {
        return (
            <select id="gender" className="custom-select">
            <option value="male">ชาย</option>
            <option value="female" selected>หญิง</option>
            </select>
        )
    }
}
const UploadImgModal = () => {
    return (
        <div className="modal fade" id="UploadImgModal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">อัพโหลดรูปโปรไฟล์</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <input type="file" name="Image"/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
                        <button type="button" className="btn btn-primary">เปลี่ยน</button>
                    </div>
                </div>
            </div>
        </div>        
    )
}
const UserProfileModal = ({ userProfile }) => {
    if (userProfile){
        return <img src={`${REQUEST_ROOT}`+userProfile} 
            
            alt="ProfileImage"
            className="usr-profile-img img-fluid"
            data-toggle="modal" 
            data-target="#UploadImgModal" />
    }
    else {
        return <img src={require("../../static/images/user.png")} 
            
            alt="ProfileImage"
            className="usr-profile-img img-fluid"
            data-toggle="modal" 
            data-target="#UploadImgModal" />
    }
}
const UserEdit = ({
    UserData, 
    OnInputChange,
    OnSubmitEdit}) => {
    return (
        <div className="usr-profile-content-mx">
            <UploadImgModal />
            <UserProfileModal 
                userProfile={UserData.profileImage}
            />
            
            <div className="input-group usr-profile-input-mx mx-auto">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">อีเมลล์</span>
                </div>
                <input type="text" 
                    id="email"
                    className="form-control" 
                    value={UserData.email}
                    />
            </div>           
            <div className="input-group usr-profile-input-mx mx-auto">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">ชื่อจริง</span>
                </div>
                <input type="text" 
                    id="firstname"
                    className="form-control" 
                    placeholder={UserData.firstname}
                    onChange={OnInputChange}/>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">นามสกุล</span>
                </div>
                <input type="text" 
                    id="lastname"
                    className="form-control" 
                    placeholder={UserData.lastname}
                    onChange={OnInputChange}/>
                <AppendInput />
            </div>
            <div className="input-group usr-profile-input-mx mx-auto">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">เพศ</span>
                </div>
                <Gender UserData={UserData}/>
                <AppendInput />
            </div>
            <div className="input-group usr-profile-input-mx mx-auto">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">อายุ</span>
                </div>
                <input type="date" 
                        id="age"
                        className="form-control" 
                        placeholder={UserData.age}
                        onChange={OnInputChange}/>
                <AppendInput />
            </div>
            <div className="input-group usr-profile-input-mx mx-auto">
                <input type="password" 
                    id="password"
                    className="form-control" 
                    placeholder="รหัสผ่านใหม่"
                    onChange={OnInputChange}/>
                <input type="password" 
                    id="password_confirm"
                    className="form-control" 
                    placeholder="ยืนยันรหัสผ่าน"
                    onChange={OnInputChange}/>
                <AppendInput />  
            </div>
            <button
                className="btn btn-outline-warning btn-custom" 
                onClick={OnSubmitEdit} >บันทึก</button>
        </div>
    )
}

export default UserEdit