import React from 'react';

import { Link } from 'react-router-dom';

import '../static/css/package_detail.css'; 

const PackageDetail = (props) => {
    const {package_item} = props.location.state;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img className="package-detail-image img-fluid" alt="package_detail_image" src={package_item.image} />
                </div>
                <div className="col-md-7 package-detail-header">
                    <div className="row-md-6">
                        <h4 >{package_item.package_name}</h4>
                        <div><span style={{color:'red', font:14, marginLeft:10+'px'}}>Hightlight.</span></div>
                        <p >&emsp;&emsp;&emsp;&emsp;{package_item.detail}</p>
                    </div>
                    <div><span style={{color:'red', font:14, marginLeft:10+'px'}}>รายละเอียด.</span></div>
                    <div className="row-md-6 package-card-detail card mx-auto bg-light">
                        <div className="row card-text card-body">
                            <ul className="col mr-auto" style={{marginLeft:10+'px'}}>
                                <li>สถานที่: {package_item.location}</li>
                                <li>ช่วงเวลาเดินทาง: {package_item.travel_date}</li>
                            </ul>
                            <ul className="col ml-auto" style={{marginLeft:10+'px'}}>
                                <li>ระยะเวลา: {package_item.travel_duration} วัน</li>
                                <li>ราคา: {package_item.human_price}</li>
                            </ul>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
            <hr/>
                <div className="text-center">event detail (timeline)</div>
                <div>
                    <img alt='bunny' className="mx-auto d-block" src={require('../static/images/polebunny.gif')}/>
                </div>
            <hr/>
            <div className="text-center"><Link to="/">go back</Link></div>
        </div>
    )
}

export default PackageDetail;