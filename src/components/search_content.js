import React , {Component} from 'react';

import PackageListItem from './package_list_item';
import '../static/css/package_list.css'; 

import data from '../static/js/provinces.json';

export default class PackageList extends Component {
    renderContent(){
        if(this.props.packages){
            return(
                <div>
                    <div className="jumbotron" style={{marginTop:10+'vh'}}>
                        "ผลลัพธ์การค้นหา"
                    </div>
                    {this.render_package_list_row()}
                </div>
            )
        }
        else{
            return (
                <div>
                    <div className="jumbotron" style={{marginTop:5+'vh'}}>
                        "ค้นหาอย่างรวดเร็ว"
                    </div>
                    <div>ค้นหาจากภูมิภาค/จังหวัด</div>
                    {this.renderQuickSearchRegion()}
                    <div>ค้นหาจากประเภท</div>
                    {this.renderQuickSearchTag()}
                </div>
            )
        }
    }
    renderQuickSearchRegion(){
        console.log(data[1].provinces[1])
        const rowContent = [];
        for(var i = 0; i < 6; i+=1) {
            const oneRow = [];
            const RowItm = [];
            for (var j=0; j<1 ;j++) {
                RowItm.push(     
                    <div className="col-10">
                        <div className="card" style={{marginBottom:20+'px'}}>
                            <div className="card-body btn" 
                                style={{padding:0+'px'}} 
                                id="dropdownMenuButton"
                                data-toggle="collapse" 
                                href={"#"+String(i+j)}
                            >       
                                <img 
                                    alt="regionIMG" 
                                    src={require('../static/images/test.jpeg')} 
                                    className="card-img"
                                    style={{ height:120+'px'}}  
                                />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">{data[i].region}</h5>
                                </div>
                            </div>
                            <div class="collapse" id={String(i+j)}>
                                <div class="card card-body">
                                    {this.renderProvinces(i)}
                                </div>
                            </div>
                        </div> 
                    </div>        
                )
            }
            oneRow.push(RowItm)
            rowContent.push(oneRow.map(itm => {return <div className="row mx-auto justify-content-center">{itm}</div>}))
        }
        return rowContent;
    }
    renderProvinces(num){
        console.log(data[num].provinces.length)
        const rowContent = [];
        for(var i = 0; i < data[num].provinces.length; i+=1) {
            const oneRow = [];
            oneRow.push(    
                <div>
                    {data[num].provinces[i]}
                </div>          
        )
        rowContent.push(oneRow.map(itm => {return <div className="row mx-auto justify-content-center">{itm}</div>}))
        }
        return rowContent;       
    }
    renderQuickSearchTag(){
        const rowContent = [];
        for(var i = 0; i < 4; i+=1) {
            const oneRow = [];
            const RowItm = [];
            for (var j=0; j<3 ;j++) {
                RowItm.push(      
                    <div className="col-4" style={{padding:5}}>
                    <div className="card" style={{marginTop:10+'px'}}>
                        <div className="card-body btn" style={{padding:0+'px'}}>
                           <img 
                                alt="regionIMG" 
                                src={require('../static/images/test.jpeg')} 
                                className="card-img"
                                style={{ height:90+'px'}} 
                            />
                            <div class="card-img-overlay">
                                <h5 class="card-title">ประเภท</h5>
                            </div>
                        </div>
                    </div> 
                    </div>     
                )
            }
            oneRow.push(RowItm)
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
                        key={item.package_id}
                        package_item={item} />      
            )}))
        rowContent.push(oneRow.map(itm => {return <div className="row mx-auto justify-content-center">{itm}</div>}))
        }
        return rowContent;
    }
    render(){
        console.log(this.props.packages)
        return(
            <div>
                <div className=" bg-light">
                    <div className="container-fluid">
                                                     
                            {this.renderContent()}
                        
                    </div>
                </div>
            </div>
        )
    }
}

