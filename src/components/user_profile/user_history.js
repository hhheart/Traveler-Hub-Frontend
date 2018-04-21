import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader';
import '../../static/css/bookmark_ribbon.css';
import '../../static/css/user_profile.css';
import {REQUEST_ROOT} from '../../constants/endpoints';

const UserHistory = ({HistoryPackages, Isloading}) => {
    if (Isloading){
        return <Loader />
    }
    else {
        console.log(HistoryPackages)
        const rowContent = [];
        rowContent.push(HistoryPackages.map(item => {
            return (
                <Link 
                    to={{
                        pathname: `/package/detail/${item.packageId._id}`, 
                        }}>
                    <div className="card" 
                        id={item._id}
                        style={{height:22+'vh',marginTop:1+'vw', marginLeft:6+'vw',marginRight:6+'vw'}}
                    >
                        <div className="row no-gutters" > 
                            <img 
                                className="col-3" 
                                src={`${REQUEST_ROOT}${item.packageId.images[0]}`} 
                                style={{height:'auto',width:15+'vw'}}
                                alt="Package_Image"/>
                            <div className="col-7" >
                                <div className="card-body" >
                                    <h5 className="card-title" style={{fontSize:2+'vh' ,textAlign:'left'}}>{item.packageId.package_name}</h5>
                                    <div className="row no-gutters">
                                        <div className="col-10 mx-2" 
                                            style={{
                                                border:0.1+'vw',
                                                borderStyle:'solid',
                                                borderRadius:5+'px',
                                                borderColor:'grey'}}>                            
                                            <div style={{marginLeft:1+'vw'}}>เดินทาง: {item.packageId.travel_date}</div>
                                            <div style={{marginLeft:1+'vw'}}>ราคา: {item.packageId.human_price} THB</div>                           
                                        </div>
                                    </div>                        
                                </div>
                            </div>
                            <div className="col-2 row justify-content-center bookmark">
                                <div className="bookmark-title">ล่าสุด {item.updated}</div>  
                            </div>
                        </div>
                    </div> 
                </Link> 
            )
        }))
        return (
            rowContent
        )       
    }
}
export default UserHistory