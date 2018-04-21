import React, {Component} from 'react';
import { Parallax } from 'react-spring'

class AboutUS extends Component {
    render(){
        const Background = require('../static/images/bg_user.png')
        const styles = {
        lineHeight: '10px',
        color: '#fff',
        fontSize: 5+'vh',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
        }
        return (
            <Parallax ref="parallax" style={{backgroundImage: `url(${Background})`}} pages={4}>
    
                <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} />
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
                <Parallax.Layer offset={3} speed={1} style={{ backgroundColor: 'lightgreen' }} />
                <Parallax.Layer
                    offset={0}
                    speed={0.2}
                 
                    onClick={() => this.refs.parallax.scrollTo(1)}>
                        <div    class="embed-responsive embed-responsive-16by9">
                            <iframe 
                                title="title"
                                class="embed-responsive-item" 
                                src="https://www.youtube.com/embed/mfqJyKm20Z4"
                                >
                            </iframe>
                        </div>
                </Parallax.Layer>
    
                <Parallax.Layer
                    offset={1}
                    speed={0.2}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(2)}>
                    <div className="row">
                        ผู้จัดทำ
                    </div>
                </Parallax.Layer>
    
                <Parallax.Layer
                    offset={2}
                    speed={0.2}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(3)}>
                    อาจารย์ที่ปรึกษา รศ. ดร. กฤษณะ ไวยมัย
                </Parallax.Layer>
                
                <Parallax.Layer
                    offset={3}
                    speed={0.2}
                    style={styles}
                    onClick={() => this.refs.parallax.scrollTo(0)}>
                    <div className="row"> 
                            ตรา แล็ป + ตรา มหาลัย

                    </div>
                </Parallax.Layer>   
            </Parallax>
        )
    }
}

export default AboutUS