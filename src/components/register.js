import React, {Component} from 'react';
import '../static/css/register.css';

import $ from 'jquery';

import axios from 'axios';

export default class Register extends Component{

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
            age: "20",
            country: "Thailand",
            province: "Bangkok",
            phonenumber: "xxx-xxxxxxx"
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
                    navListItems.removeClass('btn-primary').addClass('btn-default');
                    $item.addClass('btn-primary');
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
          
            $('div.setup-panel div a.btn-primary').trigger('click');
          });
    }
    onChange(event,id){
        var tk_POST_DATA = this.state.POST_DATA;
        tk_POST_DATA[event.target.name] = event.target.value;
        this.setState( {POST_DATA:tk_POST_DATA} )
    }
    onSubmit(event){
        event.preventDefault();
        axios.post('http://supertam.xyz:3000/user', this.state.POST_DATA)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    render(){
        return(    
            <div className="container">          
                <div className="stepwizard offset-md-3">
                    <div className="stepwizard-row setup-panel">
                        <div className="stepwizard-step">
                            <a href="#step-1" role="button" className="btn btn-primary btn-circle">1</a>
                            <p>ขั้นตอนที่ 1</p>
                        </div>
                        <div className="stepwizard-step">
                            <a href="#step-2" role="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
                            <p>ขั้นตอนที่ 2</p>
                        </div>
                        <div className="stepwizard-step">
                            <a href="#step-3" role="button" className="btn btn-default btn-circle" disabled="disabled">3</a>
                            <p>เสร็จสิ้น!</p>
                        </div>
                    </div>
                </div> 
                <form class="was-validated" onSubmit={this.onSubmit.bind(this)} action="http://supertam.xyz:3000/user" method="post" noValidate>
                    <div className="row setup-content" id="step-1">
                        <div className="col-6 offset-md-3">
                            <div className="col-md-12">
                                <h3>รายละเอียดเบื้องต้น</h3>
                                    <div className="form-group">
                                        <label className="control-label">อีเมลล์</label>
                                        <input 
                                            name="email"
                                            maxLength="100" 
                                            type="text" 
                                            className="form-control form-control-success" 
                                            placeholder="Enter Email"
                                            onChange={this.onChange}
                                            value={this.state.POST_DATA.email}
                                            required/>
                                        <div className="invalid-feedback">กรุณาระบุ อีเมลล์</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">ชื่อผู้ใช้งาน</label>
                                        <input 
                                            name="username"
                                            maxLength="100" 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter Username" 
                                            onChange={this.onChange}
                                            value={this.state.POST_DATA.username}
                                            required/>
                                        <div className="invalid-feedback">กรุณาระบุ ชื่อผู้ใช้งาน</div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">รหัสผ่าน</label>
                                        <input 
                                            name="password"
                                            maxLength="100" 
                                            type="password" 
                                            className="form-control" 
                                            placeholder="Enter Password" 
                                            onChange={this.onChange}
                                            value={this.state.POST_DATA.password}
                                            required/>
                                        <div className="invalid-feedback">กรุณาระบุ รหัสผ่าน</div>
                                    </div>
                                    <button className="btn btn-primary nextBtn btn-lg pull-right" type="button" >ถัดไป</button>
                            </div>
                        </div>
                    </div>
                    <div className="row setup-content" id="step-2">
                        <div className="col-6 offset-md-3">
                            <div className="col-md-12">
                                <h3>รายละเอียดทั่วไป</h3>
                                    <div className="form-group">
                                        <label className="control-label">ชื่อ</label>
                                        <input 
                                            name="firstname"
                                            maxLength="200" 
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
                                            maxLength="200" 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Enter LastName"
                                            onChange={this.onChange}
                                            value={this.state.POST_DATA.lastname}
                                            required/>
                                        <div className="invalid-feedback">กรุณาระบุ นามสกุล</div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">วัน/เดือน/ปี เกิด</label>
                                        <input 
                                            type="date" 
                                            id="example-date-input" 
                                            class="form-control" 
                                            required/>
                                        <div className="invalid-feedback">กรุณาระบุ วัน/เดือน/ปี เกิด</div>
                                    </div>
                                    <div className="form-group">
                                        <div class="custom-control custom-radio">
                                            <input 
                                                name="gender" 
                                                type="radio" 
                                                class="form-check-input" 
                                                id="gender_male" 
                                                onChange={this.onChange}
                                                value="male" 
                                                required/>
                                            <label class="control-label" for="gender_male" >ชาย</label>
                                        </div>
                                        <div class="custom-control custom-radio mb-3">
                                            <input 
                                                name="gender"
                                                type="radio" 
                                                class="form-check-input" 
                                                id="gender_female" 
                                                onChange={this.onChange} 
                                                value="female" 
                                                required/>
                                            <label class="control-label" for="gender_female">หญิง</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary nextBtn btn-lg pull-right" type="button" >ถัดไป</button>
                            </div>
                        </div>
                    </div>
                    <div className="row setup-content" id="step-3">
                        <div className="col-6 offset-md-3">
                            <div className="col-md-12">
                            <h3>เสร็จสิ้น!</h3>
                            <button className="btn btn-success btn-lg pull-right" type="submit" value="submit">ยืนยัน</button>
                            </div>
                        </div>
                    </div>
                </form>   
            </div>       
        )
    }
}