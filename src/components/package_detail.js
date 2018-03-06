import React from 'react';

import { Link } from 'react-router-dom';

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
const PackageDetail = ({package_itm}) => {
    const package_item = package_itm;
    return (  
        <div>         
            <div className="container">
                <div id="header-content" className="row">           
                    <img className="col-md-5 package-detail-image img-fluid text-center" 
                        alt="package_detail_image" 
                    src={package_item.image} />               
                    
                    <div id="detail" className="col-md-7 package-detail-header">
                        <h4 className="package-card-title-margin text-padding">{package_item.package_name}</h4>
                        <div id="package-datail" className="row-md-5"> 
                            <div><span className="package-detail-highlight">Hightlight.</span></div>
                            <p className="text-padding">&emsp;&emsp;&emsp;&emsp;{package_item.detail}</p>
                        </div>          
                        <div id="package-highlight" className="row-md-5 card package-card-margin bg-light">
                            
                            <div><span className="package-detail-highlight">รายละเอียด.</span></div>
                            <div className="row card-text">
                                <ul className="col test-padding">
                                    <li>สถานที่: {package_item.location}</li>
                                    <li>ช่วงเวลาเดินทาง: {package_item.travel_date}</li>
                                </ul>
                                <ul className="col test-padding">
                                    <li>ระยะเวลา: {package_item.travel_duration} วัน</li>
                                    <li>ราคา: {package_item.human_price}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row-md-2 text-center">
                            <a className="btn btn-primary btn-block " href={package_item.url}>จองเลย !</a>
                        </div>
                    </div>
                </div>
                <hr/>
                    <Timeline data={package_item.timeline}/>
                <hr/>
                <div className="page-return"><Link to="/root">go back</Link></div>
            </div>
            <footer className="test-home-footer">
            </footer>
        </div>
    )
}
export default PackageDetail;