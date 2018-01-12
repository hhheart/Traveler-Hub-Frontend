import React from 'react';
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'

import '../static/css/package_list_item.css'; 

const PackageListItem = ({package_item, match}) => {
    const ID = package_item.package_id;
    const titleUrl = package_item.package_name;
    const imageUrl = package_item.image;
    //const companyUrl = package_item.company_name;
    const price = package_item.human_price;
    const travel_date = package_item.travel_date;

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
    return (
        <div>
            <div className="card package-list-card">
                <img alt="package-list-img" className="package-list-image card-img-top" src={imageUrl}/>
                <div className="card-body">
                    <div className="card-title">{titleUrl}</div>
                    <div className="card-text package-list-detail ">
                        <div>เดินทาง: {travel_date}</div>
                        <div className="row">
                            <div className="col-7">ราคา: {price}</div>
                            <div className="col-5 justify-content-end">
                                <ReactStars 
                                    count={5} 
                                    value={5}
                                    edit={false}
                                    onChange={null} 
                                    size={12} 
                                    color2={'#ffd700'} />
                            </div>
                        </div>
                        <div>
                            <Link 
                                className="btn btn-block btn-detail"
                                to={{
                                    pathname: `/package/detail/${ID}`, 
                                    state: {package_item: package_item, 
                                }}}>
                                ดูรายละเอียด
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PackageListItem;

