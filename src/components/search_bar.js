import React  from 'react';

const SearchBar = ({
    onPNameChange, 
    onMinPriceChange, 
    onMaxPriceChange, 
    onSearchSubmit,
    onArrivalChange,
    onDepartureChange,
    onRegionChange,
    }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">ค้นหาแบบละเอียด</h5>
            </div>
            <div className="card-body">
                <input className="form-control" type="search" placeholder="ค้นหาจากชื่อ" onChange={onPNameChange} />
                <input className="form-control" type="search" placeholder="ราคาต่ำสุด" onChange={onMinPriceChange} />
                <input className="form-control" type="search" placeholder="ราคาสูงสุด" onChange={onMaxPriceChange}/>
                <input className="form-control" type="search" placeholder="วันเดินทางไป" onChange={onArrivalChange}/>
                <input className="form-control" type="search" placeholder="วันเดินทางกลับ" onChange={onDepartureChange}/>
                <input className="form-control" type="search" placeholder="ภูมิภาค/จังหวัด" onChange={onRegionChange}/>
                <input className="form-control" type="search" placeholder="คะแนน"/>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text">บริษัท</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option selected>ทั้งหมด</option>
                        <option value="1">หนุ่มสาวทัวร์</option>
                        <option value="2">wonderful tour</option>
                    </select>
                </div>
                <div className="card">
                    <div className="card-body">
                        _Tag_Search_Detail_
                    </div>
                </div>
                
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-success btn-block" type="submit" 
                    onClick={onSearchSubmit} >ค้นหาเลย</button>
            </div>
        </div>
    )
}

export default SearchBar
