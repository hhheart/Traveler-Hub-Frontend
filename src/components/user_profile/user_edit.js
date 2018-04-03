import React from 'react'

const AppendInput = () => {
    return (
        <div class="input-group-append">
            <span class="input-group-text btn btn-secondary" id="basic-addon2">
                <i className="fa fa-pencil" />
            </span>
        </div>        
    )
}
const Gender = ({UserData}) => {
    if (UserData.gender === 'male'){
        return (
            <select className="custom-select">
            <option value="1" selected>ชาย</option>
            <option value="2">หญิง</option>
            </select>
        )
    }
    else {
        return (
            <select className="custom-select">
            <option value="1">ชาย</option>
            <option value="2" selected>หญิง</option>
            </select>
        )
    }
}
const UserEdit = ({
    UserData, 
    OnInputChange,
    OnSubmitEdit}) => {
    return (
        <div className="usr-profile-content-mx">
            <img src={require("../../static/images/user.png")} className="usr-profile-img img-fluid" alt="ProfileImage"/>
            <div className="input-group usr-profile-input-mx mx-auto">
                <input type="text" 
                    id="email"
                    className="form-control" 
                    placeholder={UserData.email}
                    onChange={OnInputChange} />
                <AppendInput />
            </div>           
            <div className="input-group usr-profile-input-mx mx-auto">
                <input type="text" 
                    id="firstname"
                    className="form-control" 
                    placeholder={UserData.firstname}
                    onChange={OnInputChange}/>
                <AppendInput />
            </div>
            <div className="input-group usr-profile-input-mx mx-auto">
                <input type="text" 
                    id="lastname"
                    className="form-control" 
                    placeholder={UserData.lastname}
                    onChange={OnInputChange}/>
                <AppendInput />
            </div>
            <div className="input-group usr-profile-input-mx mx-auto">
                <Gender UserData={UserData}/>
                <AppendInput />
                <input type="text" 
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
                onClick={OnSubmitEdit} >ยืนยันแก้ไข</button>
        </div>
    )
}

export default UserEdit