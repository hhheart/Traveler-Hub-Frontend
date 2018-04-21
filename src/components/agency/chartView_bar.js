import React from 'react';
import $ from 'jquery';
import {
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Cell,
    ResponsiveContainer,
    PieChart,
    Pie,
} from 'recharts';
export default class BarChartView extends React.Component {
    renderOptionBox(ID){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="card-title" style={{fontSize:0.8+'em'}}>อัพเดทเมื่อ dd/mm/yyyy hh:mm:ss</div>
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
    render() {
        const Background = require('../../static/images/bg_agency.png')
        const COLORS = ['#8bb2d0', '#f7abb7',];
        const data1 = this.props.BarRegion;
        const data2 = this.props.BarType;
        const data3 = this.props.BarUser;
        const RADIAN = Math.PI / 180;                    
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
             const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x  = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy  + radius * Math.sin(-midAngle * RADIAN);
         
          return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
          );
        };
        
        return (
            <div className="row" style={{backgroundColor:'red',backgroundImage: `url(${Background})`}} >
                <div className="col-10 mx-auto" style={{backgroundColor:'#fff',marginTop:0+'vh',marginBottom:0+'vh'}} >
                    <div style={{marginTop:5+'vh'}}>ความคิดเห็นผู้เข้าชมแพ็คเกจรวมในแต่ละภูมิภาค</div>
                    <div className="row">
                        <div className="col-md-3 d-flex justify-content-center align-items-center"
                            style={{backgroundColor:'#fff',height:300}}>
                            {this.renderOptionBox("region")}
                        </div>
                        <div className="col-md-9" style={{backgroundColor:'#fff'}}>
                            <ResponsiveContainer width='100%' aspect={3.0/1.0}>
                                <BarChart height={300} data={data1}
                                    margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                                    <XAxis dataKey="name" />
                                    <YAxis/>
                                    <Tooltip/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Bar dataKey="like" fill="#9acd32" label={{ position: 'top' }}></Bar>
                                    <Bar dataKey="dislike" fill="#ec2f4b" label={{ position: 'top' }}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div>ความคิดเห็นผู้เข้าชมแพ็คเกจรวมในแต่ละประเภท</div>
                    <div className="row">
                        <div className="col-md-3 d-flex justify-content-center align-items-center"
                            style={{backgroundColor:'#fff',height:300}}>
                            {this.renderOptionBox("travel_types")}
                        </div>
                        <div className="col-md-9" style={{backgroundColor:'#fff'}}>
                            <ResponsiveContainer width='100%' aspect={3.0/1.0}>
                                <BarChart height={300} data={data2}
                                    margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Bar dataKey="like" fill="#9acd32" label={{ position: 'top' }}></Bar>
                                    <Bar dataKey="dislike" fill="#ec2f4b" label={{ position: 'top' }}></Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div>ผู้ใช้งานล่าสุด</div>
                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-center align-items-center"
                                style={{backgroundColor:'#fff',height:300}}>
                                {this.renderOptionBox("user")}
                            </div>
                            <div className="col-md-9 ">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ResponsiveContainer width='100%' aspect={1.0/1.0}>
                                            <BarChart height={300} data={data3}
                                                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                                                <XAxis dataKey="name"/>
                                                <YAxis/>
                                                <Tooltip/>
                                                <CartesianGrid strokeDasharray="3 3"/>
                                                <Bar dataKey="value" fill="pink" label={{ position: 'top' }}>
                                                    {data3.map((entry, index) => 
                                                        <Cell fill={COLORS[index % COLORS.length]}/>)}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="col-md-6" style={{backgroundColor:'#fff'}}>
                                        <ResponsiveContainer width='100%' aspect={1.0/1.0}>
                                            <PieChart onMouseEnter={this.onPieEnter}>
                                                <Pie
                                                data={data3} 
                                                cx={150} 
                                                cy={150} 
                                                labelLine={false}
                                                label={renderCustomizedLabel}
                                                outerRadius={150} 
                                                >
                                                    {data3.map((entry, index) => 
                                                    <Cell fill={COLORS[index % COLORS.length]}/>)}
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>   
        )
    }
}