import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import {REQUEST_ROOT} from '../constants/endpoints';

import '../static/css/package_detail.css'; 
import '../static/css/timeline.css'; 

const Carousel = ({images}) => {
    const Content = []; 
    Content.push(images.map((item,i) => {
       
            if (i === 0){
                return (
                    <div className="carousel-item active" >
                                <img className="d-block carousel package-detail-image img-fluid text-center" 
                                    alt="package_detail_image" 
                                src={`${REQUEST_ROOT}${item}`} />    
                    </div>  
            )}
            else {
                return (
                    <div className="carousel-item">
                                <img className="d-block carousel package-detail-image img-fluid text-center" 
                                    alt="package_detail_image" 
                                src={`${REQUEST_ROOT}${item}`} />    
                    </div>  
            )}                         

    }))
    return <div>{Content}</div>;  
}
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
                                            <div>{event.time}</div>
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
const Like = ({Islike,onClickLike,onClickDislike }) => {
    if (Islike){
        return (
            <div className="col-1">
                <button className="btn btn-success rounded-circle" 
                    onClick={onClickLike} >
                    <i className="fa fa-thumbs-o-up" ></i>
                </button>
            </div >
        )
    }
    else {
        return (
            <div className="col-1">
                <button className="btn btn-secondary rounded-circle" 
                    onClick={onClickLike} >
                    <i className="fa fa-thumbs-o-up" ></i>
                </button>
            </div >
        )
    }
}
const Dislike = ({Islike,onClickLike,onClickDislike }) => {
    if (Islike === false){
        return (
            <div className="col-1">
                <button className="btn btn-danger rounded-circle" 
                    onClick={onClickDislike}>
                    <i className="fa fa-thumbs-o-down" ></i>
                </button>
            </div>
        )
    }
    else {
        return (
            <div className="col-1">
                <button className="btn btn-secondary rounded-circle" 
                    onClick={onClickDislike}>
                    <i className="fa fa-thumbs-o-down" ></i>
                </button>
            </div>
        )
    }
}
const Bookmark = ({Isbmk,onClickBookmark}) => {
    if (Isbmk){
        return (
            <div className="col-1">
                <button className="btn btn-primary rounded-circle"
                    onClick={onClickBookmark}>
                    <i className="fa fa-star" ></i>
                </button>
            </div>
        )
    }
    else {
        return (
            <div className="col-1">
                <button className="btn btn-secondary rounded-circle"
                    onClick={onClickBookmark}>
                    <i className="fa fa-star" ></i>
                </button>
            </div>
        )
    }
}
const PackageDetail = ({package_itm,onClickLike,onClickDislike,onClickBookmark}) => {
    const item = package_itm;
    const Background = require('../static/images/bg_user.png')
    return (  
        <div style={{backgroundImage: `url(${Background})`}} >
            <div className="row" style={{margin:0}}>
                <div  className="col-10 mx-auto" style={{backgroundColor:'#f9f9f9'}}>     
                    <div className="container detail-layout">
                        <div id="header-content" className="row">    
                            <div className="col-md-5 ">

                                <div id="Carousel_Indicator" style={{marginTop:2+'vh'}} className="carousel slide" data-ride="carousel">         
                                    <ol className="carousel-indicators">
                                        <li data-target="#Carousel_Indicator" data-slide-to="0" className="active"></li>
                                        <li data-target="#Carousel_Indicator" data-slide-to="1"></li>
                                        <li data-target="#Carousel_Indicator" data-slide-to="2"></li>
                                        <li data-target="#Carousel_Indicator" data-slide-to="3"></li>
                                        <li data-target="#Carousel_Indicator" data-slide-to="4"></li>
                                    </ol>
                                    <div className="carousel-inner" >
                                        <Carousel images={item.images}/>
                                    </div>
                                    <a className="carousel-control-prev" href="#Carousel_Indicator" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#Carousel_Indicator" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div> 

                            </div>                 
                            
                            <div id="detail" className="col-md-7 package-detail-header">
                                
                                <h4 className="package-card-title-margin text-padding">{item.package_name}</h4>
                                
                                <div id="package-datail" className="row-md-6"> 
                                    <div><span className="package-detail-highlight">Hightlight.</span></div>
                                    <p className="text-padding">&emsp;&emsp;&emsp;&emsp;{item.detail}</p>
                                </div>          
                                
                                <div id="package-highlight" className="row-md-4 card package-card-margin bg-light">
                                    
                                    <div><span className="package-detail-highlight">รายละเอียด.</span></div>
                                    <div className="row card-text">
                                        <ul className="col-6 test-padding">
                                            <li>สถานที่: {item.location}</li>
                                            <li>ช่วงเวลาเดินทาง: {item.travel_date}</li>
                                        </ul>
                                        <ul className="col-6 test-padding">
                                            <li>ระยะเวลา: {item.travel_duration} วัน</li>
                                            <li>ราคา: {item.human_price}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row text-center no-gutters">
                                    <div className="col-9">
                                    <button className="btn btn-outline-danger btn-block" 
                                        data-toggle="modal" 
                                        onClick={()=> window.open(item.url)}
                                        data-target="#feedbackModal">เข้าเว็บไซต์หลัก</button>
                                    </div>
                                    <Like
                                        Islike={item.userLike}
                                        onClickLike={onClickLike}
                                         />
                                    <Dislike
                                        Islike={item.userLike}
                                        onClickDislike={onClickDislike} />
                                    <Bookmark
                                        Isbmk={item.userBookmark}
                                        onClickBookmark={onClickBookmark} />
                                </div>
                            </div>
                        </div>
                        <hr/>
                            <h1 style={{textDecoration: 'underline'}}>ตารางเดินทาง</h1>
                            <Timeline data={item.timeline}/>
                        <hr/>
                        <div className="page-return"><Link to="/">back home</Link></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PackageDetail;