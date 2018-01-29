import React , {Component} from 'react';

import '../static/css/social-button.css'; 

export default class LoginModal extends Component{

    
    render(){
        return (
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog">
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
                                        <input type="text" className="form-control" placeholder="@email.com"/>
                                    </div>
                                </div>
                                <div className="form-group col-6">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">
                                                <i className="fa fa-key"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="password"/>
                                    </div>
                                </div>
                            </div>                              
                            <div className="row align-items-center justify-content-center">หรือ</div>
                            <br />
                            <div className="social-buttons">
                                <button className="btn btn-block btn-social btn-facebook">
                                    <i className="fa fa-facebook-official"></i>
                                    Sign in with Facebook
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">ยกเลิก</button>
                            <button type="button" className="btn btn-warning">เข้าสู่ระบบ</button>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}