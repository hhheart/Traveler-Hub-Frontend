import React from 'react';
import { Link } from 'react-router-dom'

import '../static/css/package_list_item.css'; 

const PackageListItem = ({package_item, match}) => {
    const ID = package_item.package_id;
    const titleUrl = package_item.package_name;
    const imageUrl = package_item.image;
    //const companyUrl = package_item.company_name;
    const price = package_item.human_price;
    const travel_date = package_item.travel_date;
    return (
        <div>
            <div className="card package-list-card">
                <img alt="package-list-img" className="package-list-image card-img-top" src={imageUrl}/>
                <div className="card-body">
                    <div className="card-title">{titleUrl}</div>
                    <div className="card-text package-list-detail ">
                        <div>เดินทาง: {travel_date}</div>
                        <div>ราคา: {price}</div>
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

