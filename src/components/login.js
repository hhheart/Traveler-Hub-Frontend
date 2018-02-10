import React from 'react';
import '../static/css/social-button.css'; 

const LoginModal = ({onSubmit ,onSubmit_facebook, onEmailChange, onPasswordChage, closeModal, test}) => {
    return (
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">ลงชื่อเข้าใช้งาน</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
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
                            <a href='http://supertam.xyz:5000/auth/facebook' onClick={test} className='btn btn-primary'>facebook</a>
                        </div> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            data-dismiss="modal"
                            onClick={onSubmit}
                            >เข้าสู่ระบบ</button>
                    </div>
                </div>
            </div>
        </div> 
    ) 
}
export default LoginModal;