import React from 'react';
import '../../../node_modules/react-vis/dist/style.css';
//import {curveCatmullRom} from 'd3-shape';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,
    MarkSeries,
  } from 'react-vis';

//import '../../static/css/chart.css'; 

export default class ChartView extends React.Component {
    renderSidebarBtn(){
        return (
            <div className="btn btn-secondary rounded-0 btn-sidebar" 
                onClick={this.props.onOpenSidebar} >
                <i className="fa fa-search icon-center"></i>
            </div>
        )
    }
    render() {
      return (
        <div id="chart-wrap">
            {this.renderSidebarBtn()}
            <div className="d-flex justify-content-center align-items-center">
                <XYPlot
                    width={1000}
                    height={550}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis title="X Axis" position="start"/>
                    <YAxis title="Y Axis"/>
                    <LineSeries
                        animation
                        data={[
                        {x: 1, y: 3},
                        {x: 2, y: 5},
                        {x: 3, y: 15},
                        {x: 4, y: 12},
                        {x: 5, y: 50}
                        ]}/>
                    <MarkSeries
                        data={[
                            {x: 1, y: 3},
                            {x: 2, y: 5},
                            {x: 3, y: 15},
                            {x: 4, y: 12},
                            {x: 5, y: 50}
                            ]}
                        animation
                        colorType={'category'}
                        stroke={'#ddd'}
                        strokeWidth={2}
                        colorRange={'red'}
                        />
                </XYPlot>
            </div>
        </div>
        
      );
    }
  }