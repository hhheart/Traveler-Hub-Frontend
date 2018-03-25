import React, {Component} from 'react';
//import  Footer from '../components/footer';
import '../static/css/register.css';

import $ from 'jquery';
import jQuery from 'jquery';
import axios from 'axios';

export default class RegisterModal extends Component{
    constructor (props) {
        super(props)
        this.state = {
          POST_DATA: {
            username: "",
            email: "",
            password: "",
            usertype: "c",
            firstname: "",
            lastname: "",
            gender: "",
            age: "",
          }
        };
        this.onChange = this.onChange.bind(this);
    }  
    componentDidMount() {
        $(document).ready(function () { 
            var navListItems = $('div.setup-panel div a'),
                    allWells = $('.setup-content'),
                    allNextBtn = $('.nextBtn');     
            allWells.hide();   

            navListItems.click(function (e) {
                e.preventDefault();
                var $target = $($(this).attr('href')),
                        $item = $(this);
          
                if (!$item.hasClass('disabled')) {
                    // navListItems.removeClass('btn-dark').addClass('btn-light');
                    //$item.addClass('btn-dark');
                    allWells.hide();
                    $target.show();
                    $target.find('input:eq(0)').focus();
                }
            });
            
            allNextBtn.click(function(){
                var curStep = $(this).closest(".setup-content"),
                    curStepBtn = curStep.attr("id"),
                    nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                    curInputs = curStep.find("input[type='text'],input[type='url']"),
                    isValid = true;
                    
                var status = $('div.setup-panel div.active');
                var nextstatus = status.next();
                
                if (status.hasClass('active')) {
                    status.removeClass('active').addClass('complete');
                }
                if ($('div.setup-panel div').next()!=null){
                        
                    if (nextstatus.hasClass('disabled')) {
                        nextstatus.removeClass('disabled').addClass('active');
                    }
                }
                $(".form-group").removeClass("has-error");
                for(var i=0; i<curInputs.length; i++){
                    if (!curInputs[i].validity.valid){
                        isValid = false;
                        $(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }   
                if (isValid)
                    nextStepWizard.removeAttr('disabled').trigger('click');
            });   
            $('div.setup-panel a.first-child').trigger('click');
          });
    }
    onChange(event,id){
        console.log(event.target.value)
        var tk_POST_DATA = this.state.POST_DATA;
        tk_POST_DATA[event.target.name] = event.target.value;
        this.setState( {POST_DATA:tk_POST_DATA} )
    }
    onSubmit(event){
        event.preventDefault();
        axios.post('http://supertam.xyz:5000/user', this.state.POST_DATA)
        .then((res) => {
            if (res.data.message === 'Register Successfully'){
                //console.log(res.data.message)
                window.jQuery = jQuery;
                require('bootstrap')
                jQuery('#RegisterModal').modal('hide')
                alert('register successfully')
            }
        })
        .catch(function (error) {
            alert(error)
        });
    }
    renderPanel(){
        return (
            <div className="row bs-wizard setup-panel">     
                <div className="col-4 bs-wizard-step first-child active">
                    <div className="text-center bs-wizard-stepnum">ขั้นตอนที่ 1</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#step-1" className="first-child bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">รายละเอียดเบื้องต้น</div>
                </div>                 
                <div className="col-4 bs-wizard-step disabled">
                    <div className="text-center bs-wizard-stepnum">ขั้นตอนที่ 2</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#step-2" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">รายละเอียดทั่วไป</div>
                </div>    
                <div className="col-4 bs-wizard-step last-child disabled">
                    <div className="text-center bs-wizard-stepnum">ขั้นตอนที่ 3</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#step-3" className="bs-wizard-dot"></a>
                    <div className="bs-wizard-info text-center">เสร็จสิ้น!</div>
                </div>
            </div>  
        )
    }
    render(){
        return(    
            <div className="modal fade" id="RegisterModal" data-backdrop="static" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">สมัครใช้งาน</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.renderPanel()}
                            <form className="was-validated form-margin" onSubmit={this.onSubmit.bind(this)} action="http://supertam.xyz:5000/user" method="post" noValidate>
                                <div className="row setup-content" id="step-1">
                                    <div className="col-8 offset-2 col-md-8 offset-md-2">                           
                                        
                                        <div className="form-group">
                                            <label className="control-label">อีเมล์</label>
                                            <input 
                                                name="email"
                                                maxLength="16" 
                                                type="text" 
                                                className="form-control form-control-success" 
                                                placeholder="Enter Email"
                                                onChange={this.onChange}
                                                value={this.state.POST_DATA.email}
                                                required/>
                                            <div className="invalid-feedback">กรุณาระบุ อีเมลล์</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">รหัสผ่าน</label>
                                            <input 
                                                name="password"
                                                maxLength="16" 
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Enter Password" 
                                                onChange={this.onChange}
                                                value={this.state.POST_DATA.password}
                                                required/>
                                            <div className="invalid-feedback">กรุณาระบุ รหัสผ่าน</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">ยืนยันรหัสผ่าน</label>
                                            <input 
                                                name="password"
                                                maxLength="16" 
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Enter Password" 
                                                onChange={this.onChange}
                                                value={this.state.POST_DATA.password}
                                                required/>
                                            <div className="invalid-feedback">กรุณาระบุ รหัสผ่าน</div>
                                        </div>
                                        <div className="text-center" >
                                            <button className="btn btn-outline-warning nextBtn btn-block" type="button" >ถัดไป</button>
                                        </div>                        
                                    </div>
                                </div>
                                <div className="row setup-content" id="step-2">
                                    <div className="col-8 offset-2 col-md-8 offset-md-2">
                                        
                                        <div className="form-group">
                                            <label className="control-label">ชื่อ</label>
                                            <input 
                                                name="firstname"
                                                maxLength="25" 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Enter Name" 
                                                onChange={this.onChange}
                                                value={this.state.POST_DATA.firstname}
                                                required/>
                                            <div className="invalid-feedback">กรุณาระบุ ชื่อ</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">นามสกุล</label>
                                            <input 
                                                name="lastname"
                                                maxLength="25" 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Enter LastName"
                                                onChange={this.onChange}
                                                value={this.state.POST_DATA.lastname}
                                                required/>
                                            <div className="invalid-feedback">กรุณาระบุ นามสกุล</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">วัน/เดือน/ปี เกิด</label>
                                            <input 
                                                type="date" 
                                                id="example-date-input" 
                                                className="form-control"
                                                onChange={this.onChange}
                                                required/>
                                            <div className="invalid-feedback">กรุณาระบุ วัน/เดือน/ปี เกิด</div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="custom-control custom-radio col-2 offset-md-2">
                                                <input 
                                                    name="gender" 
                                                    type="radio" 
                                                    className="form-check-input" 
                                                    id="gender_male" 
                                                    onChange={this.onChange}
                                                    value="male" 
                                                    required/>
                                                <label className="control-label" for="gender_male" >ชาย</label>
                                            </div>
                                            <div className="custom-control custom-radio col-2 offset-md-2">
                                                <input 
                                                    name="gender"
                                                    type="radio" 
                                                    className="form-check-input" 
                                                    id="gender_female" 
                                                    onChange={this.onChange} 
                                                    value="female" 
                                                    required/>
                                                <label className="control-label" for="gender_female">หญิง</label>
                                            </div>
                                        </div>
                                        <div className="text-center" >
                                            <button className="btn btn-outline-warning nextBtn btn-block" type="button" >ถัดไป</button>
                                        </div> 
                                    </div>
                                </div>
                                <div className="row setup-content" id="step-3">
                                    <div className="col-8 offset-2 col-md-8 offset-md-2">
                                        <h3 className="text-center">ยืนยันเพื่อเสร็จสิ้น!</h3>
                                        <button 
                                            className="btn btn-outline-success nextBtn btn-block" 
                                            type="submit" 
                                            onClick={this.onSubmit.bind(this)}
                                            value="submit">ยืนยัน</button>                          
                                    </div>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>       
        )
    }
}