import React from 'react';

const SideBarBTN = ({onOpenSidebar}) => {
    return ( 
        <div className="btn btn-secondary rounded-0 btn-sidebar" 
            onClick={onOpenSidebar} >
            <i className="fa fa-search icon-center"></i>
        </div>
    )} 

export default SideBarBTN;