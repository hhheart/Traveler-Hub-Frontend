import React , {Component} from 'react';
import $ from 'jquery';
import {
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
} from 'recharts';
import '../../static/css/agency_line.css'; 
export default class BarChartView extends Component {
    renderOptionBox(ID){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="card-title" style={{textAlign:'center'}}>ค้นหาจากล่าสุด</div>
                    <div className="input-group mb-3">
                        <select
                            onChange={()=> this.props.OnChange($(`select[name=${ID}]`).val(),`${ID}=true`)}
                            className="custom-select" 
                            id={`${ID}`}
                            name={`${ID}`}>
                            <option value="latestDay=true">วันล่าสุด</option>
                            <option value="latestWeek=true">สัปดาห์ล่าสุด</option>
                            <option value="latestMonth=true">เดือนล่าสุด</option>
                            <option value="latestYear=true">ปีล่าสุด</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    IsLoading(data,IsLoading){
        if (IsLoading === false){
            return (
                <ResponsiveContainer width='100%' height="100%" aspect={3.0/1.0}>
                    <BarChart height={300} data={data}
                        margin={{top:20, right: 60}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Bar dataKey="like" fill="#9acd32" label={{ position: 'top' }}></Bar>
                        <Bar dataKey="dislike" fill="#ec2f4b" label={{ position: 'top' }}></Bar>
                    </BarChart>
                </ResponsiveContainer>
            )
        }
        else {
            return (<div style={{textAlign:'center'}}>loading...</div>)
        } 
    }
    RBarChart(data1){
        return (
            <div className="cl-wrapper">
                <h4>Like และ DisLike แพ็คเกจรวมในแต่ละภูมิภาค</h4>
                <div className="row mx-auto align-items-center">
                    <div className="col-md-3 justify-content-center align-items-center">
                        {this.renderOptionBox("region")}
                    </div>
                    <div className="col-md-9">
                        {this.IsLoading(data1,this.props.IsLoading1)}
                    </div>
                </div>
            </div>
        )
    }
    TBarChart(data2){
        return (
            <div className="cl-wrapper">
                <h4>Like และ DisLike แพ็คเกจรวมในแต่ละประเภท</h4>
                <div className="row mx-auto align-items-center">
                    <div className="col-md-3 justify-content-center align-items-center">
                        {this.renderOptionBox("travel_types")}
                    </div>
                    <div className="col-md-9">
                        {this.IsLoading(data2,this.props.IsLoading2)}
                    </div>
                </div>
            </div>
        )
    }
    UBarChart(data3){          
        return (
            <div className="cl-wrapper">
                <h4>จำนวนผู้ใช้งานล่าสุด</h4>
                <div className="row mx-auto align-items-center">
                    <div className="col-md-3 justify-content-center align-items-center">
                        {this.renderOptionBox("user")}
                    </div>
                    <div className="col-md-9 ">
                        <ResponsiveContainer width='100%' height="100%" aspect={2.0/1.0}>
                            <BarChart 
                                height={300} 
                                data={data3}
                                margin={{top:20, right: 60}}>>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <CartesianGrid strokeDasharray="3 3"/>
                    
                                <Bar dataKey="value" fill="#fccf40" label={{ position: 'top' }}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.RBarChart(this.props.BarRegion)}
                {this.TBarChart(this.props.BarType)}
                {this.UBarChart(this.props.BarUser)}
            </div>
        )
    }
}