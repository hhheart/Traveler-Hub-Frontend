import React from 'react';
import{
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend,
    ResponsiveContainer
} from 'recharts';
import  SideBarBTN  from './chart_sidebar_btn';
//import '../../static/css/chart.css'; 

export default class LineChartView extends React.Component {
    renderSidebarBtn(){
        return (
            <SideBarBTN onOpenSidebar={this.props.onOpenSidebar} />
        )
    }
    render() {
        const Background = require('../../static/images/bg_agency.png')
        return (
            <div id="chart-wrap" className="row" style={{height:100+'vh',backgroundImage: `url(${Background})`}} >
                <div  className="col-10 mx-auto" style={{backgroundColor:'#fff',marginTop:5+'vh',marginBottom:5+'vh'}}>
                    {this.renderSidebarBtn()}
                    <div className="d-flex justify-content-center align-items-center" style={{marginTop:5+'vh'}}>
                        <ResponsiveContainer width='100%' height='100%' aspect={2.0/1.0}>
                        <LineChart data={[
                                {date: 'เดือน ม.ค.', view: 4000},
                                {date: 'เดือน ก.พ.', view: 3000},
                                {date: 'เดือน มี.ค', view: 2000},
                                {date: 'เดือน ม.ษ', view: 2780},
                                {date: 'เดือน พ.ค.', view: 1890},
                                {date: 'เดือน มิ.ถ', view: 2390},
                                {date: 'เดือน ก.ค.', view: 3490},
                            ]}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="view" stroke="#82ca9d" activeDot={{r: 8}}/>
                        </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>  
            </div> 
        );
    }
}