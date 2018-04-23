import React, {Component} from 'react';
import { Parallax } from 'react-spring';
import "../static/css/aboutUS.css";
class AboutUS extends Component {
    render(){
        const Background = require('../static/images/bg_user.png')
        return (
            <Parallax ref="parallax" style={{backgroundImage: `url(${Background})`}} pages={4}>

                <Parallax.Layer
                    offset={0}
                    speed={0.2}
                    onClick={() => this.refs.parallax.scrollTo(1)}>
                    <div className="layerWrap">
                        <h1>วิดีโอแนะนำโปรเจ็ค</h1>
                        <div className="video-container">
                            <iframe 
                                title="title"
                                frameborder="0"
                                src="https://www.youtube.com/embed/mfqJyKm20Z4"
                                >
                            </iframe>
                        </div>
                    </div>
                </Parallax.Layer>
    
                <Parallax.Layer
                    offset={1}
                    speed={0.2}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    <div className="layerWrap">
                        <h1>ผู้จัดทำ</h1>
                        <div className="row ">
                            <div className="col-6 text-center">
                                    <img className="image-people rounded-circle add-shadow" 
                                        alt="tam-img" 
                                        src={require('../static/images/tam.jpg')}/>
                                    <div className="padding-h2">
                                        <h2>นาย สันติธรรม อนันต์วัฒนาพร</h2>
                                        <h2> 5710501590</h2>
                                    </div>
                            </div>
                            <div className="col-6 text-center">
                                    <img className="image-people rounded-circle add-shadow" 
                                        alt="heart-img" 
                                        src={require('../static/images/heart.jpg')}/>
                                    <div className="padding-h2">
                                        <h2>นาย ธนพล โรจนะวิชานนท์</h2>
                                        <h2>5710503398</h2>
                                    </div>
                            </div>
                        </div>
                    </div>
                </Parallax.Layer>
    
                <Parallax.Layer
                    offset={2}
                    speed={0.2}
                    onClick={() => this.refs.parallax.scrollTo(3)}>
                    <div className="layerWrap">
                        <h1>อาจารย์ที่ปรึกษา</h1>
                        <div className="text-center">
                            <img className="image-people rounded-circle add-shadow" 
                                alt="prof-img" 
                                src={require('../static/images/krissana.jpg')}/>
                        </div>
                        
                        <h2 className="padding-h2">รศ. ดร. กฤษณะ ไวยมัย</h2>
                    </div>
                </Parallax.Layer>
                
                <Parallax.Layer
                    offset={3}
                    speed={0.2}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    <div className="layerWrap"> 
                        <div className="row ">
                            <div className="col-8 mx-auto text-center">
                                <img className="image-dakdl" 
                                    alt="dakdl-img" 
                                    src={require('../static/images/dakdl.jpg')}/>
                                <img className="image-kaset" 
                                    alt="kaset-img" 
                                    src={require('../static/images/logo_kasetsart.jpg')}/>
                            </div>

                        </div>
                        <div className="padding-h2">
                            <h2>คณะวิศวะกรรมศาสต์ ภาควิชาวิศวกรรมคอมพิวเตอร์</h2>
                            <h2>มหาวิทยาลัยเกษตรศาสตร์ ปีการศึกษา 2560</h2> 
                        </div>   
                    </div>
                </Parallax.Layer>   
            </Parallax>
        )
    }
}

export default AboutUS