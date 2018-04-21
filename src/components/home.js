import React, {Component} from 'react';
import PackageListItem from './package_list_item';
import axios from 'axios';
import {REQUEST_ROOT} from '../constants/endpoints';

import Footer from '../components/footer';
import Loader from '../components/loader';

import '../static/css/home.css';
import '../static/css/ribbon.css';

export default class HomeView extends Component {
    constructor(props){
        super(props);
            this.state = {  
                Isloading: true,
                packages:[],
                NewRelease_packages:[],
                Hot_packages:[],
                Rec_packages: [],
            };  
    }    
    // run before component rendered
    componentWillMount(){
        axios({
            method: 'get',
            url: 'https://api.travelerhub.xyz/package/recommend',
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem("login_token")},
        })
        .then(res => {
            console.log('get forU success')
            console.log(res.data)
            this.setState({ 
                Rec_packages: res.data,
            });
        });
        axios.get('https://api.travelerhub.xyz/package/latest')
        .then(res => {
            this.setState({ 
                NewRelease_packages: res.data,
            });
        });
        axios.get('https://api.travelerhub.xyz/package/popular')
        .then(res => {
            this.setState({ 
                Hot_packages: res.data,
                Isloading: false,
            });
        });
    }
    render_package_list_row(type){
        var PackageItem;
        if (type === "N"){
            PackageItem = this.state.NewRelease_packages;
        }
        else if (type === "P"){
            PackageItem = this.state.Hot_packages;
        }
        else {
            PackageItem = this.state.Rec_packages;
        }

        const rowContent = [];
        for(var i = 1; i < 4; i+=4) {
            const oneRow = [];
            oneRow.push(PackageItem.slice(i, i+4).map(item => {
            return (
                <PackageListItem 
                        key={item.package_id}
                        package_item={item} />      
            )}))
        rowContent.push(oneRow.map(itm => {return <div className="row mx-auto justify-content-center">{itm}</div>}))
        }
        return rowContent;
    }
    render_carousel_item(){
        const PackageItem = this.state.NewRelease_packages;
        const Content = []; 
        Content.push(PackageItem.map((item,i) => {
            if (i < 5){
                if (i === 0){
                    return (
                        <div className="carousel-item active">
                            <img 
                                className="d-block carousel" 
                                src={`${REQUEST_ROOT}${item.images[0]}`} 
                                alt="active slide"/>
                        </div>  
                )}
                else {
                    return (
                        <div className="carousel-item">
                            <img 
                                className="d-block carousel" 
                                src={`${REQUEST_ROOT}${item.images[0]}`} 
                                alt="item slide"/>
                        </div>  
                )}                         
            }
            else return null;
        }))
        return <div>{Content}</div>;      
    }
    render_banner(quote){
        return (
            <div className="banner one">
                <div className="bk l">
                    <div className="arrow top"></div> 
                    <div className="arrow bottom"></div>
                </div>
                <div className="skew l"></div>
                <div className="main">
                    <div>{quote}</div>   
                </div>
                <div className="skew r"></div>                      
                <div className="bk r">
                    <div className="arrow top"></div> 
                    <div className="arrow bottom"></div>
                </div>
            </div>
        )
    }
    render(){ 
        const Background = require('../static/images/bg_user.png')
        if(this.state.Isloading) {
            return (
                 <Loader />
            )
        }
        else {
            return (
                <div style={{backgroundImage: `url(${Background})`}} >
                    <div className="row" style={{margin:0}}>
                        <div  className="col-10 mx-auto" style={{backgroundColor:'#f9f9f9'}}>
                            <div id="Carousel_Indicator" style={{marginTop:2+'vh'}} className="carousel slide" data-ride="carousel">         
                                <ol className="carousel-indicators">
                                    <li data-target="#Carousel_Indicator" data-slide-to="0" className="active"></li>
                                    <li data-target="#Carousel_Indicator" data-slide-to="1"></li>
                                    <li data-target="#Carousel_Indicator" data-slide-to="2"></li>
                                    <li data-target="#Carousel_Indicator" data-slide-to="3"></li>
                                    <li data-target="#Carousel_Indicator" data-slide-to="4"></li>
                                </ol>
                                <div className="carousel-inner" >
                                    {this.render_carousel_item()}
                                </div>
                                <a className="carousel-control-prev" href="#Carousel_Indicator" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#Carousel_Indicator" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="container-fluid home-body" >
                                <hr/>
                                <div className="card home-body-card"> 
                                    <div className="ribbon ribbon-top-left"><span className="yellow">
                                        ForYOU<i className="fa fa-heart" style={{color:'pink'}} ></i></span></div>
                                    {this.render_package_list_row("D")}
                                </div>
                                <hr/>
                                <div className="card home-body-card"> 
                                    <div className="ribbon ribbon-top-left"><span className="red">New Release</span></div>
                                    {this.render_package_list_row("N")}
                                </div>
                                <hr/>
                            
                                <div className="card home-body-card"> 
                                    <div className="ribbon ribbon-top-left"><span className="green">Popular</span></div>
                                    {this.render_package_list_row("P")}
                                </div>
                                <hr/>
                            
                            </div>             
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
    }    
}