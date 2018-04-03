import React from 'react'

const UserHistory = () => {
    const rowContent = [];
    for(var i = 0; i < 10; i+=1) {
        rowContent.push(
            <div className="card" 
                style={{height:22+'vh',margin:2+'vh',marginLeft:6+'vw',marginRight:6+'vw'}}>
                <div className="row no-gutters" > 
                    <img 
                        className="col-3" 
                        src={require("../../static/images/test.jpeg")} 
                        style={{height:'auto',width:15+'vw'}}
                        alt="Package_Image"/>
                    <div className="col-7" >
                        <div className="card-body" >
                            <h5 className="card-title" style={{textAlign:'left'}}>สมุย-เกาะเต่า-เกาะนางยวน กินหอยนางรม ชมขนำกลางทะเล@สินมานะฟาร์ม</h5>
                            <div className="row no-gutters">
                                <div className="col-10 mx-2" 
                                    style={{
                                        border:0.1+'vw',
                                        borderStyle:'solid',
                                        borderRadius:5+'px',
                                        borderColor:'grey'}}>                            
                                    <div style={{marginLeft:1+'vw'}}>เดินทาง: 05-12-2560</div>
                                    <div style={{marginLeft:1+'vw'}}>ราคา: 8,888 THB</div>                            
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div style={{backgroundColor:'#e9e9e9'}} 
                        className="col-2 row d-flex justify-content-center align-items-center">
                        <i className="fa fa-thumbs-o-up" 
                            style={{fontSize: 4+'vw'}}
                        ></i> 
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