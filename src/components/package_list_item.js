import React from 'react';
import { Link } from 'react-router-dom'
//import ReactStars from 'react-stars'

import '../static/css/package_list_item.css'; 
import {REQUEST_ROOT} from '../constants/endpoints';

const PackageListItem = ({package_item}) => {
    const ID = package_item._id;
    const titleUrl = package_item.package_name;
    const imageUrl = `${REQUEST_ROOT}${package_item.images[0]}`;
    const price = package_item.human_price;
    const travel_date = package_item.travel_date;
    const numLike = package_item.like;
    const numDislike = package_item.dislike;
    const view = package_item.number_of_views;
    const logo = `${REQUEST_ROOT}${package_item.logo}`;
    return (
        <div>
            <div className="card package-list-card">
                <div className="package-list-image card-img-top">
                    <img alt="package-list-img" className="card-img-top image-layout" src={imageUrl}/>
                    <div className="package-item-star"> 
                    <i className="fa fa-eye"
                            style={{color:'white'}} >
                                <label className="label-text" >{view}</label></i> 
                        <i className="fa fa-thumbs-o-up"
                            style={{color:'#74d600'}} >
                                <label className="label-text" >{numLike}</label></i> 
                        <i className="fa fa-thumbs-o-down" 
                            style={{color:'red'}} >
                                <label className="label-text">{numDislike}</label></i> 
                    </div>
                </div>
                <div className="test-layout-title bg-light">{titleUrl}</div>
                <div className="card-body test-layout-detail ">  
                    <div className="row">
                        <div className="col-9">
                            <div className="set-left">เดินทาง: {travel_date}</div> 
                            <div className="set-left">ราคา: {price}</div>
                        </div>    
                        <img className="col-3 package-list-agency-image img-fluid" alt="package-list-logo" src={logo}/>   
                    </div>
                    <Link 
                        className="btn btn-detail"
                        to={{
                            pathname: `/package/detail/${ID}`, 
                            }}>
                        ดูรายละเอียด
                    </Link>                                                       
                </div>                 
            </div>
        </div>
    );
}
export default PackageListItem;

