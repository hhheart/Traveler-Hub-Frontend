import React from 'react';

import { Link } from 'react-router-dom';
import {Timeline, TimelineEvent} from 'react-event-timeline';

import '../static/css/package_detail.css'; 
import '../static/css/test_timeline.css'; 


const PackageDetail = (props) => {
    const {package_item} = props.location.state;
    return (
        <div>
            <div className="container">
                <div id="header-content" className="row">
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
                    <ul className="timeline">
                        <li className="date-badge">
                            <div className="test-date-timeline-badge">วันแรก</div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                                </div>
                                <div className="timeline-body">
                                <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                <hr/>
                <div className="test-page-return"><Link to="/">go back</Link></div>
            </div>
            <footer className="test-home-footer">
            </footer>
        </div>
    )
}

export default PackageDetail;