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
import '../../static/css/agency_line.css'; 

export default class LineChartView extends React.Component {
    
    RLineChart(){
        if (this.props.lineR !== ''){
            return (
                    <div>
                        <SideBarBTN onOpenSidebar={this.props.onOpenSidebar} />
                        <div className="cl-wrapper">
                            <h4>ยอดวิวแพ็คเก็จในแต่ละภูมิภาคที่ถูกค้นหา</h4>
                            <ResponsiveContainer width={'100%'} height={'100%'} aspect={2/1}>
                                <LineChart 
                                    data={this.props.lineR}
                                    margin={{top: 0, right: 60}}>
                                    <XAxis dataKey="date"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend />
                                    <Line type="monotone" dataKey="เหนือ" stroke="blue" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ตะวันออกเฉียงเหนือ" stroke="orange" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="กลาง" stroke="green" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ตะวันออก" stroke="pink" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ตะวันตก" stroke="red" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ใต้" stroke="brown" activeDot={{r: 8}}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div> 
                );
        }
    }
    PLineChart(){
        if (this.props.lineP !== ''){
            return (
                    <div>
                        <SideBarBTN onOpenSidebar={this.props.onOpenSidebar} />
                        <div className="cl-wrapper">
                            <h4>ยอดวิวแพ็คเก็จในแต่ละจังหวัดที่ถูกค้นหา</h4>
                            <ResponsiveContainer width={'100%'} height={'100%'} aspect={2/1}>
                                <LineChart 
                                    data={this.props.lineP}
                                    margin={{top: 0, right: 60}}>
                                    <XAxis dataKey="date"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend />
                                    <Line type="monotone" dataKey="เหนือ" stroke="blue" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ตะวันออกเฉียงเหนือ" stroke="orange" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="กลาง" stroke="green" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ตะวันออก" stroke="pink" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ตะวันตก" stroke="red" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ใต้" stroke="brown" activeDot={{r: 8}}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div> 
                );
        }
    }
    TLineChart(){
        if (this.props.lineT !== ''){
            return (
                    <div>
                        <SideBarBTN onOpenSidebar={this.props.onOpenSidebar} />
                        <div className="cl-wrapper">
                            <h4>ยอดวิวแพ็คเก็จในแต่ละประเภทที่ถูกค้นหา</h4>
                            <ResponsiveContainer width={'100%'} height={'100%'} aspect={2/1}>
                                <LineChart 
                                    data={this.props.lineT}
                                    margin={{top: 0, right: 60}}>
                                    <XAxis dataKey="date"/>
                                    <YAxis/>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend />
                                    <Line type="monotone" dataKey="ผจญภัย" stroke="blue" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ธรรมชาติ" stroke="orange" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ศาสนา" stroke="green" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="สถานที่น่าสนใจ" stroke="pink" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ขึ้นดอย" stroke="red" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="อุทยาน" stroke="brown" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ทะเลและหมู่เกาะ" stroke="yellow" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="ย้อนรอยอดีต" stroke="lightgreen" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="เทศกาล" stroke="grey" activeDot={{r: 8}}/>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div> 
                );
        }
    }
    render() {
        if (this.props.lineR !== '' || this.props.lineP !== '' || this.props.lineT !== ''){
           return (
               <div>
                   {this.RLineChart()}
                   {this.PLineChart()}
                   {this.TLineChart()}
               </div>
           )

        }
        else {
            return (
                <div>
                    <SideBarBTN onOpenSidebar={this.props.onOpenSidebar} />
                    <div className="cl-init-page">เริ่มการทำสำรวจเลย</div>
                </div>
            )   
        }
    }
}