import React, {Component} from 'react';
export default class ChartSideBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    renderInput(){
        console.log('inside input picker '+this.props.choice)
        if (this.props.choice === "a"){
            return (
                <select multiple class="form-control" id="regionChoice">
                <option>region1</option>
                <option>region2</option>
                <option>region3</option>
                <option>region4</option>
                <option>region5</option>
              </select>
            )
        }
        else {
            return (
                <select multiple class="form-control" id="qtagChoice">
                <option>qtag1</option>
                <option>qtag2</option>
                <option>qtag3</option>
                <option>qtag4</option>
                <option>qtag5</option>
                </select>
            ) 
        }
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
                        onChange={''} />
                    <div className="search-input-title">วันสิ้นสุด</div>
                    <input 
                        id="endDate"
                        type="date"
                        className="form-control search-input-margin"                    
                        onChange={''}/>                  
                    
                    <div className="search-input-title">ประเภทการค้นหา</div>
                        <div class="form-check form-check-inline">
                            <input 
                                
                                class="form-check-input"
                                type="radio" 
                                name="inlineRadioOptions" 
                                value="a"
                                onChange={this.props.onChangeChoice.bind(this)}
                            />
                            <label class="form-check-label" for="inlineRadio1">ภูมิภาค</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input 
                                class="form-check-input" 
                                type="radio" 
                                name="inlineRadioOptions"  
                                value="b"
                                onChange={this.props.onChangeChoice.bind(this)}
                            />
                            <label class="form-check-label" for="inlineRadio2">คำค้นหาพิเศษ</label>
                        </div>
                    <div className="input-group mb-3 search-input-margin">
   
                            {this.renderInput()}
                       
                    </div>                                         
                </div>
            {this.renderBTN()}
        </div>
        ) 
    }
}
