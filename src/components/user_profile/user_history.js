import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader';
import '../../static/css/user_profile.css';
import '../../static/css/user_history.css';
import {REQUEST_ROOT} from '../../constants/endpoints';

const HistoryCard = ({HistoryPackages}) => {
    const rowContent = [];
    rowContent.push(HistoryPackages.map(item => {
        return (
            <Link 
                to={{
                    pathname: `/package/detail/${item.packageId._id}`, 
                    }}>
                <div className="ht-card-warpper">
                        <div className="card ht-card-layout" key={item._id}>
                            <div className="row align-items-center no-gutters">                            
                                <img 
                                    className="col-4 ht-img-layout" 
                                    src={`${REQUEST_ROOT}${item.packageId.images[0]}`} 
                                    alt="Package_Image"/>
                                    <div className="ht-overlay-wrapper"> 
                                        <div className="ht-text3">เพิ่มเมื่อ: {item.updated}x</div>
                                    </div>
                                <div className="col-8" >
                                    <div className="card-body">
                                        <h5 className="ht-text">{item.packageId.package_name}</h5>    
                                        <div className="row justify-content-center mx-auto">
                                            <div className="col-5 ht-text2">
                                                <div className="">วันเดินทาง:</div>
                                                <div>{item.packageId.travel_date}</div>
                                            </div>   
                                            <div className="col-5 ht-text2">
                                                <div>ราคา:</div>
                                                <div>{item.packageId.human_price} บาท</div>
                                            </div>   
                                        </div>             
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </Link> 
        )}))
    return (
        rowContent
    )     
}
const UserHistory = ({HistoryPackages, Isloading}) => {
    if (Isloading){
        return <Loader />
    }
    else {
        return (
            <div>
                <h1>บุ๊คมาร์ค</h1>
                <HistoryCard HistoryPackages={HistoryPackages} />
            </div>
        )
    }
}
export default UserHistory