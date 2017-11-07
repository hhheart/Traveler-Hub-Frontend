import React from 'react';
import PackageListItem from './package_list_item';

import '../static/css/style.css'; 

const PackageList = (props) =>{
    const PackageItem = props.packages.map((package_item) => {
        return (      
            <PackageListItem 
                key={package_item._id}
                package_item={package_item} />
        )
    });
    return (
        <ul className="list-group">
            {PackageItem}
        </ul>
    );
}

export default PackageList;
