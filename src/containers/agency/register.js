import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jQuery from 'jquery';
import RegisAgencyModal from '../../components/agency/register';
import {agency_register} from '../../actions/agency';

class RegisAgency extends Component{
    constructor (props) {
        super(props)
        this.state = {
            BODY: {
                email: "",
                password: "",
                password_confirm: "",
                company: "",
                usertype: "agency",
            },
        };
    }     
    handleOnChange(event){
        var tk = this.state.BODY;
        tk[event.target.name] = event.target.value;
        this.setState({BODY:tk})
    }
    handleOnSubmit() {
        this.props.agency_register(this.state.BODY)
        .then(() => {
            if (this.props.res === "Register Successfully"){
                jQuery('#RegisAgencyModal').modal('hide')
                alert('เพิ่มผู้ดูแลสำเร็จ') 
            }
        })
    }
    render(){
        return (     
            <RegisAgencyModal
                onChange={this.handleOnChange.bind(this)} 
                onSubmit={this.handleOnSubmit.bind(this)}/>  
        )
    }
}
function mapStateToProps(state){
    return {
        res: state.agency.response,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        agency_register,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisAgency));