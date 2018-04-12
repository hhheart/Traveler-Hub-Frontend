import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { select_choice } from '../../actions/agency';

import { scaleRotate as Menu } from 'react-burger-menu'
import LineChartView from '../../components/agency/chartView_line';
import ChartSideBar from '../../components/agency/chart_sidebar';
import Footer from '../../components/footer';

class LineChart extends Component{
    constructor (props) {
        super(props)
        this.state = {
            IsSidebarOpen: false,
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
        console.log(event)
        this.props.select_choice(event.target.value )
    }
    render(){
        return (     
            <div>
            <Menu 
                pageWrapId={ "chart-wrap" }
                isOpen={ this.state.IsSidebarOpen }
                >
                <ChartSideBar choice={this.props.choice} onChangeChoice={this.handleChoiceChange.bind(this)} />
            </Menu>
            <LineChartView onOpenSidebar={this.handleOpenSidebar.bind(this)}/>  
            <Footer />               
            </div>
 
        )
    }
}
function mapStateToProps(state){
    return {
        choice: state.agency.choice
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        select_choice,
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LineChart));