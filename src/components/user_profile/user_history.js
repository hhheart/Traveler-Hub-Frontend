import React from 'react'

import {REQUEST_ROOT} from '../../constants/endpoints';

const LikeOrDislike = ({fact}) => {
    if (fact === true){
        return (
            <i className="fa fa-thumbs-o-up" 
                style={{fontSize: 4+'vw',color:'green'}}
            ></i> 
        )
    }
    else {
        return (
            <i className="fa fa-thumbs-o-up" 
                style={{fontSize: 4+'vw',color:'white'}}
            ></i> 
        )
    }
}
const UserHistory = ({HistoryPackages}) => {
    console.log(HistoryPackages)
    const rowContent = [];
    for(var i = 0; i < HistoryPackages.length; i+=1) {
        rowContent.push(
            <div className="card" 
                style={{height:22+'vh',margin:2+'vh',marginLeft:6+'vw',marginRight:6+'vw'}}>
                <div className="row no-gutters" > 
                    <img 
                        className="col-3" 
                        src={`${REQUEST_ROOT}${HistoryPackages[i].packageId.images[0]}`} 
                        style={{height:'auto',width:15+'vw'}}
                        alt="Package_Image"/>
                    <div className="col-7" >
                        <div className="card-body" >
                            <h5 className="card-title" style={{fontSize:2+'vh' ,textAlign:'left'}}>{HistoryPackages[i].packageId.package_name}</h5>
                            <div className="row no-gutters">
                                <div className="col-10 mx-2" 
                                    style={{
                                        border:0.1+'vw',
                                        borderStyle:'solid',
                                        borderRadius:5+'px',
                                        borderColor:'grey'}}>                            
                                    <div style={{marginLeft:1+'vw'}}>เดินทาง: {HistoryPackages[i].packageId.travel_date}</div>
                                    <div style={{marginLeft:1+'vw'}}>ราคา: {HistoryPackages[i].packageId.human_price} THB</div>                            
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div style={{backgroundColor:'#e9e9e9'}} 
                        className="col-2 row d-flex justify-content-center align-items-center">
                            <LikeOrDislike fact={HistoryPackages[i].like} />
                        <div className="mx-1">ดูล่าสุด: dd-mm-yyyy hh:mm:ss</div>  
                    </div>
                </div>
            </div> 
        )
    }

    return (
        rowContent
    )
}
export default UserHistory