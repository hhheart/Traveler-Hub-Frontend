import React from 'react'

import { REQUEST_ROOT } from '../../constants/endpoints';

const PrependInput = ({label}) => {
    return (
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">{label}</span>
        </div>       
    )
}
const AppendInput = () => {
    return (
        <div className="input-group-append">
            <span className="input-group-text btn btn-secondary disabled" id="basic-addon2">
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
        return <img src={userProfile} 
            
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
            <h1>ข้อมูลผู้ใช้งาน</h1>
            <UploadImgModal />
            <UserProfileModal 
                userProfile={UserData.profileImage}
            />
            <div className="input-wrapper">
                <div className="input-group usr-profile-input-mx mx-auto">
                    <PrependInput label={"อีเมลล์"}/>
                    <input type="text" 
                        id="email"
                        className="form-control" 
                        value={UserData.email}
                        />
                </div>           
                <div className="input-group usr-profile-input-mx mx-auto">
                    <PrependInput label={"ชื่อจริง"}/>
                    <input type="text" 
                        id="first_name"
                        className="form-control" 
                        placeholder={UserData.first_name}
                        onChange={OnInputChange}/>
                </div>
                <div className="input-group usr-profile-input-mx mx-auto">
                    <PrependInput label={"นามสกุล"}/>
                    <input type="text" 
                        id="last_name"
                        className="form-control" 
                        placeholder={UserData.last_name}
                        onChange={OnInputChange}/>
                </div>
                <div className="input-group usr-profile-input-mx mx-auto">
                    <PrependInput label={"เพศ"}/>
                    <Gender UserData={UserData}/>
                </div>
                <div className="input-group usr-profile-input-mx mx-auto">
                    <PrependInput label={"วันเกิด"}/>
                    <input type="date" 
                            id="age"
                            className="form-control" 
                            placeholder={UserData.age}
                            onChange={OnInputChange}/>
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
                </div>
                <button
                className="btn btn-outline-warning btn-block" 
                onClick={OnSubmitEdit} >บันทึก</button>
            </div>
        </div>
    )
}

export default UserEdit