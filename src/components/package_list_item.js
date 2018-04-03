import React from 'react';
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'

import '../static/css/package_list_item.css'; 

const PackageListItem = ({package_item}) => {
    const ID = package_item._id;
    const titleUrl = package_item.package_name;
    const imageUrl = package_item.image;
    //const companyUrl = package_item.company_name;
    const price = package_item.human_price;
    const travel_date = package_item.travel_date;

    const logo = package_item.logo;
    //const ratingChanged = (newRating) => {console.log(newRating)}
    return (
        <div>
            <div className="card package-list-card">
                <div className="package-list-image card-img-top">
                    <img alt="package-list-img" className="card-img-top image-layout" src={imageUrl}/>
                    <div className="package-item-star"> 
                        <ReactStars 
                            count={5} 
                            value={5}
                            edit={false}
                            onChange={null} 
                            size={15} 
                            color2={'#ffd700'} />
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

