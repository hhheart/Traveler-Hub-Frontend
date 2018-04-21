import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get_BarChart,get_UserChart } from '../../actions/agency';
import BarChartView from '../../components/agency/chartView_bar';
import Footer from '../../components/footer';

class BarChart extends Component{
    constructor (props) {
        super(props)
        this.state = {
            query: '',
            IsLoading: true,
            regionBar: [],
            travel_typeBar: [],
            userBar: [],
        };
    } 
    componentWillMount(){
        this.props.get_BarChart("region=true&latestDay=true")
        this.props.get_BarChart("travel_types=true&latestDay=true")
        this.props.get_UserChart("latestDay=true")
    }
    handleChange(query,type){
        this.setState({IsLoading:true})
        if (type === "user=true"){
            this.props.get_UserChart(query)
        }
        else (
            this.props.get_BarChart(type+'&'+query)
        )
            
    }    
    render(){
        return (     
            <div>
            <BarChartView 
                OnChange={this.handleChange.bind(this)}
                BarRegion={this.props.barA}
                BarType={this.props.barB}
                BarUser={this.props.barC}
                IsLoading={this.state.IsLoading}
            />  
            <Footer />               
            </div>
 
        )
    }
}
function mapStateToProps(state){
    return {
        barA: state.agency.barA,
        barB: state.agency.barB,
        barC: state.agency.barC,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        get_BarChart,
        get_UserChart
    }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BarChart));