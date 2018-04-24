import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get_LineChart } from '../../actions/agency';

import { scaleRotate as Menu } from 'react-burger-menu'
import LineChartView from '../../components/agency/chartView_line';
import ChartSideBar from '../../components/agency/chart_sidebar';
import Footer from '../../components/footer';

class LineChart extends Component{
    constructor (props) {
        super(props)
        this.state = {
            IsSidebarOpen: false,
            IsLoading: false,
            sd_label: '2018-05-02',
            ed_label: '2018-05-02',
            
            startDate: '2018-05-02',
            endDate: '2018-05-02',
            querys_R: '',
            querys_P: '',
            querys_T: '',
            REQUEST_R: '',
            REQUEST_P: '',
            REQUEST_T: '',
        };
    } 
    componentWillMount(){
        //reload for fix bootstrap-select (1.13.0-beta bugs)
        if (localStorage.getItem('dummy_key') !== null){  
            window.localStorage.removeItem('dummy_key')
        }
        else {
            localStorage.setItem('dummy_key',"dummy_tk")
            window.location.reload()
        }
    }
    handleOpenSidebar(){
        this.setState({IsSidebarOpen: true})
    }    
    handleOnChangeDate(event){
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.id]: `${event.target.id}=${event.target.value}`,
        },()=> this.handleSearchSubmit())
    }
    handleRegionsSelected(val){
        this.setState({
            querys_R: 'regions='+val,
        },()=> this.autoSearch(this.state.querys_R))        
    }
    handleProvincesSelected(val){
        console.log(val)
        this.setState({
            querys_P: 'provinces='+val,
        },()=> this.autoSearch(this.state.querys_P))           
    }
    handleTagsSelected(val){
        console.log(val)
        this.setState({
            querys_T: 'travel_types='+val,
        },()=> this.autoSearch(this.state.querys_T))           
    }
    autoSearch(querys){
        this.setState({
            REQUEST: this.state.startDate+'&'+this.state.endDate+'&'+querys,
            IsLoading: true
        } ,()=> this.props.get_LineChart(this.state.REQUEST)
            .then (()=> {
            this.setState({
                IsSidebarOpen: false,
                IsLoading:false,
            })
        }))
    }
    handleSearchSubmit(){
        this.setState({IsLoading: true})
        this.props.get_LineChart(this.state.startDate+'&'+this.state.endDate+'&'+this.state.querys_R)
        //this.props.get_LineChart(this.state.startDate+'&'+this.state.endDate+'&'+this.state.querys_P)
        this.props.get_LineChart(this.state.startDate+'&'+this.state.endDate+'&'+this.state.querys_T)
        .then (()=> {
        this.setState({
            IsSidebarOpen: false,
            IsLoading:false,
        })})
    }
    render(){
        const Background = require('../../static/images/bg_agency.png')
        return (     
            <div>
                <Menu 
                    pageWrapId={ "chart-wrap" }
                    isOpen={ this.state.IsSidebarOpen }
                    >
                    <ChartSideBar 
                        loading={this.state.IsLoading}
                        onChangeDate={this.handleOnChangeDate.bind(this)}
                        onRegionsSelected={this.handleRegionsSelected.bind(this)}
                        onProvincesSelected={this.handleProvincesSelected.bind(this)}
                        onTagsSelected={this.handleTagsSelected.bind(this)}
                        onSearchSubmit={this.handleSearchSubmit.bind(this)}
                        startDate={this.state.sd_label}
                        endDate={this.state.ed_label}
                    />
                </Menu>
                <div id="chart-wrap" style={{backgroundImage: `url(${Background})`}}>
                    <div className="row" style={{margin:0}}>
                         <div className="col-10 mx-auto">
                            <LineChartView
                                onOpenSidebar={this.handleOpenSidebar.bind(this)}
                                lineR={this.props.lineR}
                                lineP={this.props.lineP}
                                lineT={this.props.lineT}
                            />  
                        </div>
                    </div>
                    <Footer />  
                </div>             
            </div>
 
        )
    }
}
function mapStateToProps(state){
    return {
        lineR: state.agency.lineR,
        lineP: state.agency.lineP,
        lineT: state.agency.lineT,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        get_LineChart
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LineChart));