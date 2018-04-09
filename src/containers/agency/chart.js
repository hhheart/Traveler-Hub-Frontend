import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { scaleRotate as Menu } from 'react-burger-menu'
import ChartView from '../../components/agency/chart';
import ChartSideBar from '../../components/agency/chart_sidebar';
import Footer from '../../components/footer';

class Chart extends Component{
    constructor (props) {
        super(props)
        this.state = {
            IsSidebarOpen: false,
        };
    } 
    handleOpenSidebar(){
        this.setState({IsSidebarOpen: true})
    }    
    render(){
        return (     
            <div>
            <Menu 
                pageWrapId={ "chart-wrap" }
                isOpen={ this.state.IsSidebarOpen }
                >
                <ChartSideBar />
            </Menu>
            <ChartView onOpenSidebar={this.handleOpenSidebar.bind(this)}/>  
            <Footer />               
            </div>
 
        )
    }
}
function mapStateToProps(state){
    return {

    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({

    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chart));