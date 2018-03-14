import React, {Component} from 'react';

export default class SearchBar extends Component {

    renderBTN(){
        if (this.props.loading){
            return (
                <div className="card-footer">
                    <button 
                        className="btn btn-outline-success btn-block" 
                        type="submit"
                        onClick={this.props.onSearchSubmit}
                        >
                        <i class="fa fa-circle-o-notch fa-spin" style={{fontSize:24+'px'}}/>
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
        return (
            <div className="card search-bar-style">
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
                            placeholder="วันเดินทางไป"   
                            value={this.props.tags.arrive}
                            onChange={this.props.onArrivalChange} />
                        <div className="search-input-title">วันเดินทางกลับ</div>
                        <input 
                            id="departure-date"
                            className="form-control search-input-margin" 
                            type="date" 
                            placeholder="วันเดินทางกลับ"    
                            value={this.props.tags.depart}                
                            onChange={this.props.onDepartureChange}/>                  
                        
                        <div className="search-input-title">ภูมิภาค/จังหวัด</div>
                        <input className="form-control search-input-margin" type="search" placeholder="ภูมิภาค/จังหวัด"/>
                        <div className="search-input-title">บริษัท</div>
                        <input className="form-control search-input-margin" type="search" placeholder="บริษัท"/>
                        <div className="search-input-title">คำค้นหาพิเศษ</div>
                        <input className="form-control search-input-margin" type="search" placeholder="special tags"/>

                </div>
                {this.renderBTN()}
            </div>
        )
    }
}
