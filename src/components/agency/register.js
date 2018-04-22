import React from 'react';
//import '../static/css/social-button.css'; 

const RegisAgencyModal = ({onChange, onSubmit}) => {
    return (
        <div className="modal fade" id="RegisAgencyModal" data-backdrop="static" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">เพิ่มผู้ดูแล</h5>
                        <button type="button" 
                            className="close closeBtn" 
                            data-dismiss="modal" 
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form className="was-validated form-margin" noValidate>           
                        <div className="col-8 offset-2 col-md-8 offset-md-2">                           
                            <div className="form-group">
                                <label className="control-label">อีเมล์</label>
                                <input 
                                    name="email"
                                    maxLength="16" 
                                    type="text" 
                                    className="form-control form-control-success" 
                                    placeholder="Enter Email"
                                    onChange={onChange}
                                    required/>                     
                            </div>
                            <div className="form-group">
                                <label className="control-label">รหัสผ่าน</label>
                                <input 
                                    name="password"
                                    maxLength="16" 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Enter Password" 
                                    onChange={onChange}
                                    required/>
                                
                            </div>
                            <div className="form-group">
                                <label className="control-label">ยืนยันรหัสผ่าน</label>
                                <input 
                                    name="password_confirm"
                                    maxLength="16" 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Confirm Password" 
                                    onChange={onChange}
                                    required/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">เลือกอเจนท์ซี่</label>
                                <select 
                                    name="company"
                                    className="form-control" 
                                    onChange={onChange}
                                    required>
                                    <option value="">กรุณาเลือก...</option>
                                    <option value="noomsaotours">noomsaotours</option>
                                    <option value="tourtooktee">tourtooktee</option>
                                </select >
                            </div>
                            <div className="text-center" >
                                <button 
                                    className="btn btn-outline-warning nextBtn btn-block" 
                                    onClick={onSubmit}
                                    type="button" >เพิ่มผู้ดูแล</button>
                            </div>                        
                        </div>        
                    </form>                              
                    </div>
                </div>
            </div>
        </div> 
    ) 
}
export default RegisAgencyModal;