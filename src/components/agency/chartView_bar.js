import React from 'react';
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
    Legend
} from 'recharts';

export default class BarChartView extends React.Component {
    renderOptionBox(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="card-title" style={{fontSize:0.8+'em'}}>อัพเดทเมื่อ dd/mm/yyyy hh:mm:ss</div>
                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>เลือก...</option>
                            <option value="1">วันล่าสุด</option>
                            <option value="2">สัปดาห์ล่าสุด</option>
                            <option value="3">เดือนล่าสุด</option>
                            <option value="3">ปีล่าสุด</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        const Background = require('../../static/images/bg_agency.png')
        const colors = [ "#7f7f7f", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#bcbd22", "#17becf","#1f77b4","#e377c2"];
        const COLORS = ['#8bb2d0', '#f7abb7',];
        const data = [
              {name: 'ภาคเหนือ', value: 4000},
              {name: 'ภาคกลาง', value: 3000},
              {name: 'ภาคตะวันออก', value: 2000},
              {name: 'ภาคตะวันออกเฉียงเหนือ', value: 2780},
              {name: 'ภาคใต้', value: 1890},
        ];
        const data_2 = [
            {name: 'travel_type1', like: 99, dislike: 11},
            {name: 'travel_type2', like: 88, dislike: 22},
            {name: 'travel_type3', like: 77, dislike: 33},
            {name: 'travel_type4', like: 66, dislike: 44},
            {name: 'travel_type5', like: 55, dislike: 55},
            {name: 'travel_type6', like: 44, dislike: 66},
            {name: 'travel_type7', like: 33, dislike: 77},
            {name: 'travel_type8', like: 22, dislike: 88},
            {name: 'travel_type9', like: 11, dislike: 99},
        ];
        const data_3 = [
            {name: 'ชาย', value: 4000},
            {name: 'หญิง', value: 3000},
        ];
        const getPath = (x, y, width, height) => {
            return `M${x},${y + height}
                    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
                    C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
                    Z`;
        };
        const TriangleBar = (props) => {
            const { fill, x, y, width, height } = props;
            return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
        };
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
                <div className="col-10 mx-auto" style={{backgroundColor:'#fff',marginTop:5+'vh',marginBottom:5+'vh'}} >
                <div style={{marginTop:5+'vh'}}>ความคิดเห็นผู้เข้าชมแพ็คเกจรวมในแต่ละภูมิภาค</div>
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center align-items-center"
                         style={{backgroundColor:'#fff',height:300}}>
                         {this.renderOptionBox()}
                    </div>
                    <div className="col-md-9" style={{backgroundColor:'#fff'}}>
                        <ResponsiveContainer width='100%' aspect={3.0/1.0}>
                            <BarChart height={300} data={data}
                                margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="name" />
                                <YAxis/>
                                <Tooltip/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Bar dataKey="value" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}>
                                    {
                                    data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % 20]}/>
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div>ความคิดเห็นผู้เข้าชมแพ็คเกจรวมในแต่ละประเภท</div>
                <div className="row">
                    <div className="col-md-3 d-flex justify-content-center align-items-center"
                        style={{backgroundColor:'#fff',height:300}}>
                        {this.renderOptionBox()}
                    </div>
                    <div className="col-md-9" style={{backgroundColor:'#fff'}}>
                        <ResponsiveContainer width='100%' aspect={3.0/1.0}>
                            <BarChart height={300} data={data_2}
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
                        {this.renderOptionBox()}
                    </div>
                    <div className="col-md-9 ">
                        <div className="row">
                            <div className="col-md-6">
                                <ResponsiveContainer width='100%' aspect={1.0/1.0}>
                                    <BarChart height={300} data={data_3}
                                        margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <Bar dataKey="value" fill="pink" label={{ position: 'top' }}>
                                            {data.map((entry, index) => 
                                                <Cell fill={COLORS[index % COLORS.length]}/>)}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="col-md-6" style={{backgroundColor:'#fff'}}>
                                <ResponsiveContainer width='100%' aspect={1.0/1.0}>
                                    <PieChart onMouseEnter={this.onPieEnter}>
                                        <Pie
                                        data={data_3} 
                                        cx={150} 
                                        cy={150} 
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={150} 
                                        >
                                            {data.map((entry, index) => 
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
        );
    }
}