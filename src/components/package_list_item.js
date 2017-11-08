import React from 'react';
import { Link } from 'react-router-dom'

const PackageListItem = ({package_item}) => {
    const titleUrl = package_item.package_name;
    const imageUrl = package_item.image;
    const companyUrl = package_item.company_name;
    const price = package_item.human_price;
    const travel_date = package_item.travel_date;
    return (
        <li className="list-group-item">
            <div >
                <div className=" package-list-title">
                    <div>{titleUrl}</div>
                </div>
                <div className="package-list-image">
                    <img alt="package_image" src={imageUrl} />
                </div>
                <div className="detail package-list-detail">
                    <div>{travel_date}</div>
                    <div>{price}</div>
                    <div>{companyUrl}</div>
                    <div><Link to={ 
                        {pathname: '/detail', state: {package_item: package_item,} }}>more detail</Link></div>
                </div>
            </div>
        </li>
    );
}
export default PackageListItem;

