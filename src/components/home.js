import React, {Component} from 'react';
import PackageListItem from './package_list_item';
import axios from 'axios';

import '../static/css/home.css';
import '../static/css/ribbon.css';

export default class HomePage extends Component {
    constructor(props){
        super(props);
            this.state = {  
                packages:[],
                NewRelease_packages:[],
                Hot_packages:[],
            };  
    }    
    // run before component rendered
    componentWillMount(){
        axios.get('http://supertam.xyz:5000/package')
        .then(res => {
            //console.log(res)
            this.setState({ packages: res.data });
        });
        axios.get('http://supertam.xyz:5000/package/latest')
        .then(res => {
            //console.log(res)
            this.setState({ NewRelease_packages: res.data });
        });
        axios.get('http://supertam.xyz:5000/package/popular')
        .then(res => {
            //console.log(res)
            this.setState({ Hot_packages: res.data });
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
            PackageItem = this.state.packages;
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
        const PackageItem = this.state.packages;
        const Content = []; 
        Content.push(PackageItem.map((item,i) => {
            if (i < 5){
                if (i === 0){
                    return (
                        <div className="carousel-item active">
                            <img className="d-block carousel" src={item.image} alt="active slide"/>
                        </div>  
                )}
                else {
                    return (
                        <div className="carousel-item">
                            <img className="d-block carousel" src={item.image} alt="item slide"/>
                        </div>  
                )}                         
            }
            else return null;
        }))
        return <div>{Content}</div>;      
    }
    render_banner(quote){
        return (
            <div class="banner one">
                <div class="bk l">
                    <div class="arrow top"></div> 
                    <div class="arrow bottom"></div>
                </div>
                <div class="skew l"></div>
                <div class="main">
                    <div>{quote}</div>   
                </div>
                <div class="skew r"></div>                      
                <div class="bk r">
                    <div class="arrow top"></div> 
                    <div class="arrow bottom"></div>
                </div>
            </div>
        )
    }
    render(){ 
        return ( 
            <div style={{backgroundColor:'#f9f9f9'}}>
                <div className="container-fluid carousel-body">
                    <div id="Carousel_Indicator" className="carousel slide" data-ride="carousel"> 
                        <div className="ribbon ribbon-top-left"><span className="white">News</span></div>
                        <div className="card p-1">
                            <ol className="carousel-indicators">
                                <li data-target="#Carousel_Indicator" data-slide-to="0" className="active"></li>
                                <li data-target="#Carousel_Indicator" data-slide-to="1"></li>
                                <li data-target="#Carousel_Indicator" data-slide-to="2"></li>
                                <li data-target="#Carousel_Indicator" data-slide-to="3"></li>
                                <li data-target="#Carousel_Indicator" data-slide-to="4"></li>
                            </ol>
                            <div className="carousel-inner">
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
                    </div>
                </div>      
                <div className="container-fluid home-body" >
                    <hr/>
                    {this.render_banner("New Release")}
                    <div className="card home-body-card"> 
                        <div class="ribbon ribbon-top-left"><span className="red">New Release</span></div>
                        {this.render_package_list_row("N")}
                    </div>
                    <hr/>
                    {this.render_banner("Popular")}
                    <div className="card home-body-card"> 
                        <div class="ribbon ribbon-top-left"><span className="green">Popular</span></div>
                        {this.render_package_list_row("P")}
                    </div>
                    <hr/>
                    {this.render_banner("ForYOU.")}
                    <div className="card home-body-card"> 
                        <div class="ribbon ribbon-top-left"><span className="yellow">ForYOU.</span></div>
                        {this.render_package_list_row("D")}
                    </div>
                    <hr/>
                </div>             
                <footer className="test-home-footer">
                </footer>
            </div>
        )
    }    
}