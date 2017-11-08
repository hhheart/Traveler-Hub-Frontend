import React from 'react';

import { Link } from 'react-router-dom';

const PackageDetail = (props) => {
    const {package_item} = props.location.state;
    return (
        <div>
            <div className="detail package-list-detail">
                <div className="package-list-image">
                    <img alt="package_image" src={package_item.image} />
                </div>
                <div style={{marginTop: 20, marginLeft: 90, marginRight:90}}>
                    <div>ชื่อแพ๊คเกจ: {package_item.package_name}</div>
                    <div>สถานที่: {package_item.location}</div>
                    <div>ช่วงเวลาเดินทาง: {package_item.travel_date}</div>
                    <div>ระยะเวลา: {package_item.travel_duration} วัน</div>
                    <div>รายละเอียด: {package_item.detail}</div>
                    <div>ราคา: {package_item.human_price}</div>
                    <br/>
                </div>
                <hr/>
                    <div className="text-center">event detail (timeline)</div>
                    <div>
                        <img alt='bunny' className="mx-auto d-block" src={require('../static/images/polebunny.gif')}/>
                    </div>
                <hr/>
                <div className="text-center"><Link to="/">go back</Link></div>
            </div>
            
        </div>
    )
}

export default PackageDetail;