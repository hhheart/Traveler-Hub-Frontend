import React , {Component} from 'react';

import PackageListItem from './package_list_item';
import '../static/css/package_list.css'; 


export default class PackageList extends Component {
    renderContent(){
        if(this.props.packages){
            console.log('a')
            return(
                <div>
                    <div className="jumbotron">
                        "ผลลัพธ์การค้นหา"
                    </div>
                    {this.render_package_list_row()}
                </div>
            )
        }
        else{
            console.log('b')
            return (
                <div>
                    <div className="jumbotron">
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
        const rowContent = [];
        for(var i = 0; i < 3; i+=1) {
            const oneRow = [];
            const RowItm = [];
            for (var j=0; j<2 ;j++) {
                RowItm.push(     
                    <div className="col-5">
                    <div className="card" style={{marginBottom:20+'px'}}>
                        <div className="card-body btn" style={{padding:0+'px'}}>
                           <img 
                                alt="regionIMG" 
                                src={require('../static/images/test.jpeg')} 
                                className="card-img"
                                style={{ }} 
                            />
                            <div class="card-img-overlay">
                                <h5 class="card-title">ภูมิภาค</h5>
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
                                style={{ }} 
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

