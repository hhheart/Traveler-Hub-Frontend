import React , {Component} from 'react';
import PackageListItem from './package_list_item';
import Loader from '../components/loader';
import Pagination from './pagination';
import {REQUEST_ROOT} from '../constants/endpoints';

export default class PackageList extends Component {   
    
    componentDidMount(){
        //reload for fix bootstrap-select (1.13.0-beta bugs)
        if (localStorage.getItem('dummy_key') !== null){  
            window.localStorage.removeItem('dummy_key')
        }
        else {
            localStorage.setItem('dummy_key',"dummy_tk")
            window.location.reload()
        }
    }
    onClickTags(key){
        return () => this.props.onReset(key.toString())
    }
    onQTagClick(val){
        return () => this.props.handleQTagClick(val)
    }
    onQRegionClick(val){
        return () => this.props.handleQRegionClick(val)
    }
    renderTagText(key,value){
        switch (key){
            case "pkname":{
                return "ค้นหา \"" +value +"\""
            }
            case "minp":{
                return "ราคาต่ำสุด "+value+" บาท"
            }
            case "maxp":{
                return "ราคาสูงสุด "+value+" บาท"
            }
            case "arrive":{
                return "วันเดินทางไป \""+ value +"\""
            }
            case "depart":{
                return "วันเดินทางกลับ \""+ value +"\""
            }
            case "provinces": {
                return "จังหวัด \""+ value +"\""
            }
            case "tags": {
                return "tags: \""+ value +"\""
            }
            case "Qtag": {
                return "\""+ value +"\""
            }
            default: {
                return "แสดงทั้งหมด"
            }
        }
    }
    renderTag(){
        var counter = 0; 
        const tagsContent = [];
        const test = this.props.tags;
        for (var key in test){
            if (test[key] !== ''){
                counter+=1
                tagsContent.push(
                    <button 
                        className="btn btn-dark tagbtn-layout"
                        onClick={this.onClickTags(key)}
                        >
                        {this.renderTagText(key,test[key])}
                        <i className="fa fa-close" style={{fontSize:2+'vh', marginLeft:1+'vw'}} ></i>
                    </button>                
                )
            }
        }
        if (counter === 0){
            tagsContent.push(
                <button 
                    className="btn btn-dark tagbtn-layout"
                    onClick={this.onClickTags("default")}
                    >
                    {this.renderTagText("default","default")}
                    <i className="fa fa-close" style={{fontSize:2+'vh', marginLeft:1+'vw'}} ></i>
                </button>                
            )     
        }
        return <div className="row mx-auto justify-content-center">{tagsContent}</div>
       
    }
    renderQRegionContent(){
        const regions = this.props.dict_regions;
        const rowContent = [];
        for(var i = 0; i < 6; i++) {
            const oneRow = [];
            const RowItm = [];
          
            RowItm.push(    
                <div className="col" style={{padding:0}}>              
                <div className="card Qcard-custom">
                    <div 
                        className="btn card-body Qcard-body-custom" 
                        id="dropdownMenuButton"
                        data-toggle="collapse" 
                        href={"#"+String(i)}>       
                        <img 
                            alt="regionIMG" 
                            src={`${REQUEST_ROOT}${regions[i].images[0].path}`} 
                            className="btn card-img rounded-0 QRegion-img" 
                        />
                        <div id="qregion" class="overlay">ภาค{regions[i].region}</div>
                    </div>
                    <div className="collapse" id={String(i)}>
                        <div className="card card-body no-border">
                            {this.renderProvinces(i)}
                        </div>
                    </div>
                </div>   
                </div>           
            )
            
            oneRow.push(RowItm)
            rowContent.push(oneRow.map(itm => {return <div className="row mx-auto justify-content-center">{itm}</div>}))
        }
        return rowContent;
    }
    renderProvinces(num){
        const provinces = this.props.dict_regions[num].provinces;
        const rowContent = [];
        for(var i = 0; i < provinces.length; i+=5) {
            const oneRow = [];
            oneRow.push(provinces.slice(i, i+5).map(item => {
            return (
                <button 
                    className="btn Qprovince-text"
                    onClick={this.onQRegionClick(item)}
                    >
                    {item} 
                </button>     
            )}))
        rowContent.push(oneRow.map(itm => {return <div className="row mx-auto justify-content-center">{itm}</div>}))
        }
        return rowContent;     
    }
    renderQTagsContent(){
        const Qtags = this.props.dict_Qtags
        const rowContent = [];
        for(var i = 0; i < Qtags.length; i+=3) {
            const oneRow = [];
            oneRow.push(Qtags.slice(i, i+3).map(item => {
            return (
                <div className="col-4" style={{padding:0}}>
                    <div className="card Qcard-custom">
                        <button 
                            className="card-body btn Qcard-body-custom" 
                            onClick={this.onQTagClick(item.travel_type)}
                            >
                            <img 
                                    alt="regionIMG" 
                                    src={`${REQUEST_ROOT}${item.images[0].path}`} 
                                    className="card-img rounded-0 QTag-img"
                                />
                            <div id="qtag" class="overlay">{item.travel_type}</div>
                        </button>
                    </div> 
                </div> 
            )}))
        rowContent.push(oneRow.map(itm => {return <div className="row mx-auto justify-content-center">{itm}</div>}))
        }
        return rowContent;
    }
    render_package_list_row(){
        const PackageItem = this.props.packages;
        const rowContent = [];
        for(var i = 0; i < PackageItem.length; i+=3) {
            const oneRow = [];
            oneRow.push(PackageItem.slice(i, i+3).map(item => {
            return (
                <PackageListItem 
                        key={item._id}
                        package_item={item} />      
            )}))
        rowContent.push(oneRow.map(itm => {return <div className="row mx-auto justify-content-center">{itm}</div>}))
        }
        return rowContent;
    }
    renderSidebarBtn(){
        return (
            <div className="btn btn-secondary rounded-0 btn-sidebar" 
                onClick={this.props.onOpenSidebar} >
                <i className="fa fa-search icon-center"></i>
            </div>
        )
    }
    IsContentLoading(){
        if (this.props.loading){
            return <Loader />
        }
        else {
            return (
                <div>
                    {this.render_package_list_row()}
                    <Pagination  
                        total_pages={this.props.total_pages} 
                        current_page={this.props.current_page}
                        onChangePage={this.props.handlePageChange.bind(this)}/>
                </div>
            )
        }
    }
    renderContent(){
        // if search query success render this 
        if(this.props.packages){
            
            return(
                <div>
                    {this.renderSidebarBtn()}
                    <h1>"ผลลัพธ์การค้นหา"</h1>
                    <div className="card tagbox-body-layout" >
                        <div classNmae="card-body ">
                            {this.renderTag()}
                        </div>
                    </div>    
                    {this.IsContentLoading()}
                </div>
            )     
        }
        // initials content 
        else{
            return (
                <div>
                    <h1>ค้นหาอย่างรวดเร็ว</h1>
                    {this.renderSidebarBtn()}
                    {this.renderQRegionContent()}
                    {this.renderQTagsContent()}
                </div>
            )
        }
    }
    render(){
        if (this.props.dict_regions.length > 0 && this.props.dict_Qtags.length > 0){
            return this.renderContent()
        }
        else {
            return <Loader />
        }
    }
}

