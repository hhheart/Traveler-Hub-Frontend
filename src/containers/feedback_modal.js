import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sent_feedback } from '../actions/feedback';
import '../static/css/feedback.css'; 



class FeedbackModal extends Component{
    onClickLike(){
        console.log('like & '+this.props.PackageID)
        this.props.sent_feedback({like:true,packageId:this.props.PackageID})
        .then(function (response) {
            alert(response + ' thank you!')
        })
    }
    onClickDislike(){
        console.log('dislike & '+this.props.PackageID)
        this.props.sent_feedback({like:false,packageId:this.props.PackageID})
        .then(function (response) {
            alert(response + ' thank you!')
        })
    }
    render(){
        return (
            <div className="modal fade" id="feedbackModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">feedback ความเห็น!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6 text-center like-style" >
                                    <i className="fa fa-thumbs-o-up" 
                                        style={{fontSize: 5+'vw'}}
                                        data-dismiss="modal"
                                        onClick={() => this.onClickLike()}
                                    ></i>
                                    <div style={{lineHeight: 5+'vw'}}>ตรงกับที่ต้องการ</div>
                                </div> 
                                <div className="col-6 text-center dislike-style" >
                                    <i className="fa fa-thumbs-o-down" 
                                        style={{fontSize: 5+'vw'}}
                                        data-dismiss="modal"
                                        onClick={() => this.onClickDislike()}
                                    ></i>
                                    <div style={{lineHeight: 5+'vw'}}>ไม่ตรงกับที่ต้องการ</div>
                                </div> 
                            </div>                       
                        </div>
                    </div>
                </div>
            </div> 
        ) 
    }
}
function mapStateToProps(state){
    return {
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        sent_feedback,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackModal);