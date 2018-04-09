import React from 'react';
import '../static/css/social-button.css'; 

const LoginModal = ({
    onSubmit ,
    onSubmit_facebook, 
    onEmailChange, 
    onPasswordChage, 
    onClickRegister,
    email, 
    password}) => {
    return (
        <div className="modal fade" id="loginModal" data-backdrop="static" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">ลงชื่อเข้าใช้งาน</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="form-group col-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="@email.com"
                                        onChange={onEmailChange}
                                        value={email}
                                        />
                                </div>
                            </div>
                            <div className="form-group col-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="fa fa-key"></i>
                                        </span>
                                    </div>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="password"
                                        onChange={onPasswordChage}
                                        value={password}
                                        />
                                </div>
                            </div>
                        </div>                              
                        <div className="row align-items-center justify-content-center">หรือ</div>
                        <br />
                        <div className="social-buttons">
                            <button 
                                className="btn btn-block btn-social btn-facebook"
                                type="button" 
                                data-dismiss="modal"
                                onClick={onSubmit_facebook}
                                >
                                <i className="fa fa-facebook-official"></i>
                                Sign in with Facebook
                            </button>
                        </div> 
                    </div>
                    <div className="modal-footer">
                        <a className="" 
                            data-toggle="modal"
                            data-target="#RegisterModal"
                            onClick={onClickRegister}
                            href=''>สมัครใช้งาน?</a>
                        <a className="mr-auto" 
                            data-toggle="modal"
                            data-target="#RegisAgencyModal"
                            href=''>เป็นผู้ดูแล?</a>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={onSubmit}
                            >เข้าสู่ระบบ</button>
                    </div>
                </div>
            </div>
        </div> 
    ) 
}
export default LoginModal;