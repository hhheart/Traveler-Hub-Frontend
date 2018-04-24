import React, {Component} from 'react';
//import Select from 'react-select';
//import 'react-select/dist/react-select.css';
import data from '../static/js/provinces.json';
import $ from 'jquery';
export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            arry: '',
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
                <optgroup label={item.region}>

                    {this.renderProvincesInput(i)}
                      
                </optgroup>               
            )
        }))
        return listItem
    }
    renderProvincesInput(i){
        //console.log(data[i].provinces)
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
    renderBTN(){
        if (this.props.loading){
            return (
                <div className="card-footer search-input-btn-border">
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
                <div className="card-footer search-input-btn-border" >
                    <button 
                        className="btn btn-outline-success btn-block " 
                        type="submit"
                        onClick={this.props.onSearchSubmit}
                        >
                        ค้นหาเลย
                    </button>
                </div>
            )
        }       
    }
    onProvincesChange(){
        var selectedTags = "";
        $.when(        
            $(document).ready(function () {       
                $("#ProvincesID option:selected").each(function(){
                    if ($(this).text() !== ""){
                        selectedTags += $(this).text() + " ";
                    }
                }
            );          
        }))
        .then(() => {
            return this.props.onProvincesSelected(selectedTags)
        });
    }
    onCompanyChange(){
        var selectedCompanys = "";
        $.when(        
            $(document).ready(function () {       
                $("#CompanysID option:selected").each(function(){
                    if ($(this).text() !== ""){
                        selectedCompanys += $(this).text() + " ";
                    }
                }
            );          
        }))
        .then(() => {
            return this.props.onCompanysSelected(selectedCompanys)
        });
    }
    onTagsChange(){
        var selectedTags = "";
        $.when(        
            $(document).ready(function () {       
                $("#tagsID option:selected").each(function(){
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
    render(){ 
        return(
            <div className="card search-bar-wrapper">
                    <div className="card-header">
                        <h5 className="card-title search-bar-header-layout">ค้นหาแบบละเอียด</h5>
                    </div>
              
                    <div className="card-body">
                        <div id="search" className="input-group search-input-margin">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-search"></i>
                                </span>
                            </div>
                            <input 
                                className="form-control" 
                                type="text" 
                                placeholder="ค้นหาทั่วไป" 
                                value={this.props.tags.pkname}
                                onChange={this.props.onPNameChange}
                                />
                        </div>

                        <div className="search-input-title">ราคาแพ็คเกจ</div>
                        <div id="price" className="input-group search-input-margin mx-auto row">
                            <input 
                                className="form-control col-6" 
                                type="number" 
                                placeholder="ต่ำสุด" 
                                value={this.props.tags.minp}
                                onChange={this.props.onMinPriceChange} />
                            <input 
                                id="max_price"
                                className="form-control col-6" 
                                type="number" 
                                placeholder="สูงสุด" 
                                value={this.props.tags.maxp}
                                onChange={this.props.onMaxPriceChange}/>
                        </div>     
                        
                        <div className="search-input-title">วันเดินทางไป</div>
                        <input 
                            id="arrival-date"
                            className="form-control search-input-margin" 
                            type="date" 
                            //placeholder="วันเดินทางไป"   
                            value={this.props.tags.arrive}
                            onChange={this.props.onArrivalChange} 
                        />
                        
                        <div className="search-input-title">วันเดินทางกลับ</div>
                        <input 
                            id="departure-date"
                            className="form-control search-input-margin" 
                            type="date" 
                            //placeholder="วันเดินทางกลับ"    
                            value={this.props.tags.depart}                
                            onChange={this.props.onDepartureChange}
                        />                  
                        
                        <div className="search-input-title">ภูมิภาค/จังหวัด</div>
                        <div className="input-group">
                            <select 
                                id="ProvincesID"
                                data-width="auto"
                                title="ภูมิภาค/จังหวัด"
                                className="selectpicker select-input-style search-input-margin" 
                                data-actions-box="true"
                                data-size="5"
                                onChange={()=>this.onProvincesChange()}
                                multiple>
                                <option data-hidden="true"></option>
                                {this.renderRegionInput()}
                            </select>
                        </div>   
                        
                        <div className="search-input-title">บริษัท</div>
                        <div className="input-group">
                            <select 
                                id="CompanysID"
                                data-width="auto"
                                className="selectpicker select-input-style search-input-margin" 
                                title="บริษัท" 
                                data-actions-box="true"
                                data-size="5"
                                onChange={()=>this.CompanyChange()}
                                multiple>
                                    <option data-hidden="true"></option>
                                    <option data-content={`<span class="badge badge-info">noomsaotour</span>`}>
                                        noomsaotours
                                    </option> 
                                    <option data-content={`<span class="badge badge-info">tourtooktee</span>`}>
                                        tourtooktee
                                    </option> 
                            </select>
                        </div>                        
                        
                        <div className="search-input-title">คำค้นหาพิเศษ</div>
                        <div className="input-group">
                            <select 
                                id="tagsID"
                                data-width="auto"
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
