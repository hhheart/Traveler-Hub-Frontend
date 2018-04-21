import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import {REQUEST_ROOT} from '../constants/endpoints';

import '../static/css/package_detail.css'; 
import '../static/css/test_timeline.css'; 

const Timeline = ({data}) => {
    return (
        <ul className="timeline">
            {data.map(item => {
                return (
                    <ul className="timeline">
                        <li className="date-badge">
                            <div className="test-date-timeline-badge">วันที่ {item.day}</div>
                        </li>
                        {item.description.map( event => {
                            return (                      
                                <li className="timeline-inverted">
                                    <div className="test-time">{event.time}</div>
                                    <div className="timeline-badge"></div>
                                    <div className="timeline-panel">
                                        <div className="timeline-body">
                                            <p>{event.activity}</p>
                                        </div>
                                    </div>
                                </li>                  
                            )})} 
                    </ul>                
                )})}
        </ul>
    )
}
const PackageDetail = ({package_itm,onClickLike,onClickDislike,onClickBookmark}) => {
    const package_item = package_itm;
    const Background = require('../static/images/bg_user.png')
    return (  
        <div style={{backgroundImage: `url(${Background})`}} >
            <div className="row" style={{margin:0}}>
                <div  className="col-10 mx-auto" style={{backgroundColor:'#f9f9f9'}}>     
                    <div className="container detail-layout">
                        <div id="header-content" className="row">    
                            <div className="col-md-5 ">
                                <img className="package-detail-image img-fluid text-center" 
                                    alt="package_detail_image" 
                                src={`${REQUEST_ROOT}${package_item.images[0]}`} />                       
                            </div>                 
                            
                            <div id="detail" className="col-md-7 package-detail-header">
                                <h4 className="package-card-title-margin text-padding">{package_item.package_name}</h4>
                                <div id="package-datail" className="row-md-6"> 
                                    <div><span className="package-detail-highlight">Hightlight.</span></div>
                                    <p className="text-padding">&emsp;&emsp;&emsp;&emsp;{package_item.detail}</p>
                                </div>          
                                <div id="package-highlight" className="row-md-4 card package-card-margin bg-light">
                                    
                                    <div><span className="package-detail-highlight">รายละเอียด.</span></div>
                                    <div className="row card-text">
                                        <ul className="col-6 test-padding">
                                            <li>สถานที่: {package_item.location}</li>
                                            <li>ช่วงเวลาเดินทาง: {package_item.travel_date}</li>
                                        </ul>
                                        <ul className="col-6 test-padding">
                                            <li>ระยะเวลา: {package_item.travel_duration} วัน</li>
                                            <li>ราคา: {package_item.human_price}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row text-center no-gutters">
                                    <div className="col-9">
                                    <button className="btn btn-primary btn-block" 
                                        data-toggle="modal" 
                                        data-target="#feedbackModal">จองเลย!</button>
                                    </div>
                                    <div className="col-1">
                                        <button className="btn btn-secondary rounded-circle" 
                                            onClick={onClickLike} >
                                            <i className="fa fa-thumbs-o-up" ></i>
                                        </button>
                                    </div >
                                    <div className="col-1">
                                        <button className="btn btn-secondary rounded-circle" 
                                            onClick={onClickDislike}>
                                            <i className="fa fa-thumbs-o-down" ></i>
                                        </button>
                                    </div>
                                    <div className="col-1">
                                        <button className="btn btn-secondary rounded-circle"
                                            onClick={onClickBookmark}>
                                            <i className="fa fa-star" ></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr/>
                            <Timeline data={package_item.timeline}/>
                        <hr/>
                        <div className="page-return"><Link to="/">go back</Link></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PackageDetail;