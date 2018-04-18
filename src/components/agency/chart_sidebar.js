import React, {Component} from 'react';
import $ from 'jquery';
import data from '../../static/js/provinces.json';
export default class ChartSideBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    renderTagsInput(){
        const tags = ["ภูเขา", "แม่น้ำ", "ทะเลหมอก", "น้ำตก", "ล่องแก่ง", "ปีนเขา", 
        "วัด", "หาด", "อุทยาน", "ป่า", "ดอย", "สะพานแขวน", "อ่าง", "พิพิธภัณฑ์", "ห้วย", 
        "พระธาตุ", "พระเจดีย์", "ดำน้ำ", "ปะการัง", "ทะเล", "ฝาย", "เขื่อน", "ปาย", "พัทยา", "มัลดีฟส์"]
        if (tags.length > 0){
            //console.log(tags)
            const listItem=[];
            listItem.push(tags.map( item => {
                return (
                    <option 
                        value={item.toString()}
                        data-content={`<span class="badge badge-success">${item}</span>`}>
                            {item}
                    </option>                
                )
            }))
            return listItem
        }
        else {
           return <option><i className="fa fa-circle-o-notch fa-spin" style={{fontSize:24+'px'}}/></option>
        }
    }
    renderRegionInput(){
        const listItem=[];
        listItem.push(data.map( (item,i) => {
            return (
                <option 
                    data-content={`<span class="badge badge-dark">${item.region}</span>`}>
                        {item.region}
                </option>               
            )
        }))
        return listItem       
    }
    renderProvinceInput(){
        const listItem=[];
        listItem.push(data.map( (item,i) => {
            return (
                <optgroup label={item.region}>

                    {this.ProvincesInput(i)}
                      
                </optgroup>               
            )
        }))
        return listItem
    }
    ProvincesInput(i){
        const provinceItem=[];
        provinceItem.push(data[i].provinces.map( item => {
            return (
                <option 
                    data-content={`<span class="badge badge-dark">${item}</span>`}>
                        {item}
                </option>                
            )
        }))
        return provinceItem       
    }
    onRegionsChange(){
        var selectedRegions = "";
        $.when(        
            $(document).ready(function () {       
                $("#regions option:selected").each(function(){
                    if ($(this).text() !== ""){
                        selectedRegions += $(this).text() + " ";
                    }
                }
            );          
        }))
        .then(() => {
            return this.props.onRegionsSelected(selectedRegions)
        });
    }
    onTagsChange(){
        var selectedTags = "";
        $.when(        
            $(document).ready(function () {       
                $("#travel_types option:selected").each(function(){
                    if ($(this).text() !== ""){
                        selectedTags += $(this).text() + " ";
                    }
                }
            );          
        }))
        .then(() => {
            return this.props.onTagsSelected(selectedTags)
        });
    }
    renderBTN(){
        if (this.props.loading){
            return (
                <div className="card-footer">
                    <button 
                        className="btn btn-outline-success btn-block" 
                        type="submit"
                        onClick={this.props.onSearchSubmit}
                        >
                        <i className="fa fa-circle-o-notch fa-spin" style={{fontSize:24+'px'}}/>
                    </button>
                </div>
            )
        } 
        else {
            return (
                <div className="card-footer">
                    <button 
                        className="btn btn-outline-success btn-block" 
                        type="submit"
                        onClick={this.props.onSearchSubmit}
                        >
                        ค้นหาเลย
                    </button>
                </div>
            )
        }       
    }
    render(){ 
        return(
            <div className="card search-bar-style">
                <div className="card-header">
                    <h5 className="card-title search-bar-header-layout">ค้นหาแบบละเอียด</h5>
                </div>
                <div className="card-body">
                    <div className="search-input-title">วันเริ่มต้น</div>
                    <input 
                        id="startDate"
                        type="date" 
                        className="form-control"    
                        onChange={this.props.onChangeDate} />
                    <div className="search-input-title">วันสิ้นสุด</div>
                    <input 
                        id="endDate"
                        type="date"
                        className="form-control search-input-margin"                    
                        onChange={this.props.onChangeDate}/>                  
                    <div className="input-group mb-3 search-input-margin">
                        <select 
                            id="regions"
                            data-width="auto"
                            title="ภูมิภาค"
                            className="selectpicker select-input-style" 
                            data-actions-box="true"
                            data-size="5"
                            onChange={()=>this.onRegionsChange()}
                            multiple>
                            <option data-hidden="true"></option>
                            {this.renderRegionInput()}
                        </select>
                    </div>  
                    <div className="input-group mb-3 search-input-margin">
                        <select 
                            id="ProvincesID"
                            data-width="auto"
                            title="จังหวัด"
                            className="selectpicker select-input-style" 
                            data-actions-box="true"
                            data-size="5"
                            onChange={()=>this.onProvincesChange()}
                            multiple>
                            <option data-hidden="true"></option>
                            {this.renderProvinceInput()}
                        </select>
                    </div>  
                    <div className="input-group mb-3 search-input-margin">
                        <select 
                            id="travel_types"
                            data-width="auto"
                            className="selectpicker select-input-style" 
                            data-actions-box="true"
                            data-size="5"
                            onChange={() => this.onTagsChange()}
                            multiple>
                            <option data-hidden="true"></option>
                            {this.renderTagsInput()}
                        </select>
                    </div>                                         
                </div>
            {this.renderBTN()}
        </div>
        ) 
    }
}
