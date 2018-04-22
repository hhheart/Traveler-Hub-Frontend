import React, {Component} from 'react';
import $ from 'jquery';
import jQuery from 'jquery';
import axios from 'axios';
import '../static/css/register.css';

export default class RegisterModal extends Component{
    constructor (props) {
        super(props)
        this.state = {
            POST_DATA: {
                email: "",
                password: "",
                password_confirm: "",
                firstname: "",
                lastname: "",
                gender: "",
                birthdate: "",
                usertype: "customer",
            },
        };
        this.onChange = this.onChange.bind(this);
    }  
    // (re-script) progress panel
    componentDidMount() {
        $(document).ready(function () { 
            //initials
            var navListItems = $('div.setup-panel div a'),
                    //step1 = $('div.setup-panel div a #step-1'),
                    allWells = $('.setup-content'),
                    allNextBtn = $('.nextBtn'),
                    CloseBtn= $('.closeBtn');
            allWells.hide();   
            
            CloseBtn.click(function(e){
                $('#email').val('');
                $('#password').val('');
                $('#password_confirm').val('');
                $('#firstname').val('');
                $('#lastname').val('');
                $('#birth_date').val('');
                $('#gender_male').prop("checked", false);
                $('#gender_female').prop("checked", false);
                
            });
            //function a
            navListItems.click(function (e) {
                e.preventDefault();
                //console.log(this)
                //console.log($($(this).attr('href')))
                //console.log($(this).attr('href'))
                
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
            //function b
            allNextBtn.click(function(){
                var curStep = $(this).closest(".setup-content"),
                    curStepBtn = curStep.attr("id"),
                    nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                    //curInputs = curStep.find("input[type='text'],input[type='url']"),
                    isValid = false;
                var status = $('div.setup-panel div.active');
                var nextstatus = status.next();

                //handle validation of step-data
                if (curStepBtn === 'step-1' && 
                    $('#email').val() !== "" && 
                    $('#password').val() === 
                    $('#password_confirm').val()){
                        isValid = true                   
                }
                if (curStepBtn === 'step-2' && 
                    $('#firstname').val()!== "" && 
                    $('#lastname').val()!== "" &&
                    $('#birth_date').val()!== "" &&
                    ($('#gender_male').prop("checked") !== false || 
                    $('#gender_female').prop("checked") !== false)){
                        isValid = true
                }
                /*$(".form-group").removeClass("has-error");
                for(var i=0; i<curInputs.length; i++){
                    if (!curInputs[i].validity.valid){
                        //isValid = false;
                        //console.log('pass b')
                        $(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }*/
                if (isValid){
                    status.removeClass('active').addClass('complete');
                    nextstatus.removeClass('disabled').addClass('active');
                    nextStepWizard.removeAttr('disabled').trigger('click');
                }                   
            });   
            $('div.setup-panel a.first-child').trigger('click');
          });
    }
    renderPanel(){
        return (
            <div className="row bs-wizard setup-panel">     
                <div className="col-4 bs-wizard-step first-child active">
                    <div className="text-center bs-wizard-stepnum">ขั้นตอนที่ 1</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#step-1" className="first-child bs-wizard-dot">{null}</a>
                    <div className="bs-wizard-info text-center">รายละเอียดเบื้องต้น</div>
                </div>                 
                <div className="col-4 bs-wizard-step disabled">
                    <div className="text-center bs-wizard-stepnum">ขั้นตอนที่ 2</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#step-2" className="bs-wizard-dot">{null}</a>
                    <div className="bs-wizard-info text-center">รายละเอียดทั่วไป</div>
                </div>    
                <div className="col-4 bs-wizard-step last-child disabled">
                    <div className="text-center bs-wizard-stepnum">ขั้นตอนที่ 3</div>
                    <div className="progress"><div className="progress-bar"></div></div>
                    <a href="#step-3" className="bs-wizard-dot">{null}</a>
                    <div className="bs-wizard-info text-center">เสร็จสิ้น!</div>
                </div>
            </div>  
        )
    }
    onChange(event){
        var tk_POST_DATA = this.state.POST_DATA;
        tk_POST_DATA[event.target.name] = event.target.value;
        this.setState( {POST_DATA:tk_POST_DATA} )
    }
    onSubmit(event){
        event.preventDefault();
        console.log(this.state.POST_DATA)
        axios.post('https://api.travelerhub.xyz/user', this.state.POST_DATA)
        .then((res) => {
            if (res.data.message === 'Register Successfully'){
                //window.jQuery = jQuery;
                //require('bootstrap')
                jQuery('#RegisterModal').modal('hide')
                alert('register successfully')   
            }
        })
        .catch(function (error) {
            alert(error)
        });
    }
    render(){
        return(    
            <div className="modal fade" id="RegisterModal" data-backdrop="static" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">สมัครใช้งาน</h5>
                            <button type="button" 
                                className="close closeBtn" 
                                data-dismiss="modal" 
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.renderPanel()}
                            <form className="was-validated form-margin" 
                                onSubmit={this.onSubmit.bind(this)} 
                                action="https://api.travelerhub.xyz/user" 
                                method="post" 
                                noValidate>
                                <div className="row setup-content" id="step-1">
                                    <div className="col-8 offset-2 col-md-8 offset-md-2">                           
                                        <div className="form-group">
                                            <label className="control-label">อีเมล์</label>
                                            <input 
                                                id="email"
                                                name="email"
                                                maxLength="16" 
                                                type="text" 
                                                className="form-control form-control-success" 
                                                placeholder="Enter Email"
                                                onChange={this.onChange}
                                                //value={this.state.POST_DATA.email}
                                                required/>
                                            <div className="invalid-feedback">กรุณาระบุ อีเมลล์</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">รหัสผ่าน</label>
                                            <input 
                                                id="password"
                                                name="password"
                                                maxLength="16" 
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Enter Password" 
                                                onChange={this.onChange}
                                                //value={this.state.POST_DATA.password}
                                                required/>
                                            <div className="invalid-feedback">กรุณาระบุ รหัสผ่าน</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">ยืนยันรหัสผ่าน</label>
                                            <input 
                                                id="password_confirm"
                                                name="password_confirm"
                                                maxLength="16" 
                                                type="password" 
                                                className="form-control" 
                                                placeholder="Confirm Password" 
                                                onChange={this.onChange}
                                                //value={this.state.POST_DATA.password_confirm}
                                                required/>
                                            <div className="invalid-feedback">กรุณายืนยัน รหัสผ่าน</div>
                                        </div>
                                        <div className="text-center" >
                                            <button 
                                                className="btn btn-outline-warning nextBtn btn-block" 
                                                type="button" >ถัดไป</button>
                                        </div>                        
                                    </div>
                                </div>
                                <div className="row setup-content" id="step-2">
                                    <div className="col-8 offset-2 col-md-8 offset-md-2">
                                        
                                        <div className="form-group">
                                            <label className="control-label">ชื่อ</label>
                                            <input 
                                                id="firstname"
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
                                                id="lastname"
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
                                                id="birthdate" 
                                                name="birthdate"
                                                className="form-control"
                                                onChange={this.onChange}
                                                required/>
                                            <div className="invalid-feedback">กรุณาระบุ วัน/เดือน/ปี เกิด</div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="custom-control custom-radio col-2 offset-md-2">
                                                <input 
                                                    id="gender_male"
                                                    name="gender" 
                                                    type="radio" 
                                                    className="form-check-input"  
                                                    onChange={this.onChange}
                                                    value="male" 
                                                    required/>
                                                <label className="control-label" htmlFor="gender_male" >ชาย</label>
                                            </div>
                                            <div className="custom-control custom-radio col-2 offset-md-2">
                                                <input 
                                                    id="gender_female" 
                                                    name="gender"
                                                    type="radio" 
                                                    className="form-check-input" 
                                                    onChange={this.onChange} 
                                                    value="female" 
                                                    required/>
                                                <label className="control-label" htmlFor="gender_female">หญิง</label>
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