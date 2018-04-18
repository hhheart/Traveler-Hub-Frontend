import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { select_choice, get_LineChart } from '../../actions/agency';

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
            startDate: '',
            endDate: '',
            querys: '',
            REQUEST: '',
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
    handleChoiceChange(event){
        //console.log(event)
        this.props.select_choice(event.target.value )
    }
    handleOnChangeDate(event){
        this.setState({
            [event.target.id]: `${event.target.id}=${event.target.value}`,
        })
        //console.log(`${event.target.id}=${event.target.value}`)
    }
    handleRegionsSelected(val){
        //console.log(val)
        this.setState({
            querys: 'regions='+val,
        })        
    }
    handleSearchSubmit(){
        if(this.state.startDate === '' ){
            this.setState({
                startDate: `startDate=${this.state.endDate}`,
            })
        }
        else if (this.state.endDate === ''){
            this.setState({
                endDate: `endDate=${this.state.startDate}`,
            })            
        }
        this.setState({
            REQUEST: this.state.startDate+'&'+this.state.endDate+'&'+this.state.querys,
            IsLoading: true
        } ,()=> this.props.get_LineChart(this.state.REQUEST)
            .then (()=> {
            this.setState({
                IsSidebarOpen: false,
                IsLoading:false,
            })
        }))
        //.then((res)=> {console.log(res)})
    }
    render(){
        return (     
            <div>
                <Menu 
                    pageWrapId={ "chart-wrap" }
                    isOpen={ this.state.IsSidebarOpen }
                    >
                    <ChartSideBar 
                        choice={this.props.choice} 
                        loading={this.state.IsLoading}
                        onChangeChoice={this.handleChoiceChange.bind(this)}
                        onChangeDate={this.handleOnChangeDate.bind(this)}
                        onRegionsSelected={this.handleRegionsSelected.bind(this)}
                        onSearchSubmit={this.handleSearchSubmit.bind(this)}
                    />
                </Menu>
                <LineChartView 
                    onOpenSidebar={this.handleOpenSidebar.bind(this)}
                    chart_plot={this.props.data_plot}
                />  
                <Footer />               
            </div>
 
        )
    }
}
function mapStateToProps(state){
    return {
        choice: state.agency.choice,
        data_plot: state.agency.chart_data,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        select_choice,
        get_LineChart
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LineChart));