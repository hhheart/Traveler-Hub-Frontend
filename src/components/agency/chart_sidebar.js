import React, {Component} from 'react';
import $ from 'jquery';
import data from '../../static/js/provinces.json';
export default class ChartSideBar extends Component {

    renderTagsInput(){
        const tags = ["ผจญภัย","ธรรมชาติ","ศาสนา","สถานที่น่าสนใจ","ขึ้นดอย","อุทยาน","ทะเลและหมู่เกาะ","ย้อนรอยอดีต","เทศกาล"]
        if (tags.length > 0){
            //console.log(tags)
            const listItem=[];
            listItem.push(tags.map( item => {
                return (
                    <option 
                        value={item.toString()}
                        data-content={`<span class="badge badge-danger">${item}</span>`}>
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
                    data-content={`<span class="badge badge-warning">${item.region}</span>`}>
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
    onProvincesChange(){
        var selectedProvinces = "";
        $.when(        
            $(document).ready(function () {       
                $("#provinces option:selected").each(function(){
                    if ($(this).text() !== ""){
                        selectedProvinces += $(this).text() + " ";
                    }
                }
            );          
        }))
        .then(() => {
            return this.props.onProvincesSelected(selectedProvinces)
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
            <div className="card search-bar-wrapper">
                
                <div className="card-header">
                    <h5 className="card-title search-bar-header-layout">ค้นหาแบบละเอียด</h5>
                </div>

                <div className="card-body">
                    <div className="search-input-title">วันเริ่มต้น</div>
                    <input 
                        id="startDate"
                        name="sd_label"
                        type="date" 
                        value={this.props.startDate}
                        className="form-control search-input-margin"    
                        onChange={this.props.onChangeDate} />
                    
                    <div className="search-input-title">วันสิ้นสุด</div>
                    <input 
                        id="endDate"
                        name="ed_label"
                        type="date"
                        value={this.props.endDate}
                        className="form-control search-input-margin"                    
                        onChange={this.props.onChangeDate}/>    
                    
                    <div className="search-input-title">เลือกภูมิภาค</div>              
                    <div className="input-group">
                        <select 
                            id="regions"
                            data-width="auto"
                            title="ภูมิภาค"
                            className="selectpicker select-input-style search-input-margin" 
                            data-actions-box="true"
                            data-size="5"
                            onChange={()=>this.onRegionsChange()}
                            multiple>
                            <option data-hidden="true"></option>
                            {this.renderRegionInput()}
                        </select>
                    </div>  
                   
                    <div className="search-input-title">เลือกจังหวัด</div>
                    <div className="input-group">
                        <select 
                            id="provinces"
                            data-width="auto"
                            title="จังหวัด"
                            className="selectpicker select-input-style search-input-margin" 
                            data-actions-box="true"
                            data-size="5"
                            onChange={()=>this.onProvincesChange()}
                            multiple>
                            <option data-hidden="true"></option>
                            {this.renderProvinceInput()}
                        </select>
                    </div>  
                    
                    <div className="search-input-title">เลือประเภทท่องเที่ยว</div>
                    <div className="input-group">
                        <select 
                            id="travel_types"
                            data-width="auto"
                            title="ประเภทการท่องเที่ยว"
                            className="selectpicker select-input-style search-input-margin" 
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
