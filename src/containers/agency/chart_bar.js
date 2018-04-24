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
            IsLoading1: true,
            IsLoading2: true,
            IsLoading3: true,
            regionBar: [],
            travel_typeBar: [],
            userBar: [],
        };
    } 
    componentWillMount(){
        this.props.get_BarChart("region=true&latestDay=true")
        .then(()=>{this.setState({IsLoading1:false})})
        this.props.get_BarChart("travel_types=true&latestDay=true")
        .then(()=>{this.setState({IsLoading2:false})})
        this.props.get_UserChart("latestDay=true")
        .then(()=>{this.setState({IsLoading3:false})})
    }
    handleChange(query,type){
        if (type === "user=true"){
            this.setState({IsLoading3:true})
            this.props.get_UserChart(query)
            .then(()=>{this.setState({IsLoading3:false})})
        }
        else if (type === "region=true"){
            this.setState({IsLoading1:true})
            this.props.get_BarChart(type+'&'+query)
            .then(()=>{this.setState({IsLoading1:false})})
        }
        else {
            this.setState({IsLoading2:true})
            this.props.get_BarChart(type+'&'+query)
            .then(()=>{this.setState({IsLoading2:false})})       
        }
            
    }    
    render(){
        const Background = require('../../static/images/bg_agency.png')
        return (     
            <div style={{backgroundImage: `url(${Background})`}}>
                <div className="row" style={{margin:0}}>
                    <div className="col-10 mx-auto">
                        <BarChartView 
                            OnChange={this.handleChange.bind(this)}
                            BarRegion={this.props.barA}
                            BarType={this.props.barB}
                            BarUser={this.props.barC}
                            IsLoading1={this.state.IsLoading1}
                            IsLoading2={this.state.IsLoading2}
                            IsLoading3={this.state.IsLoading3}
                        />               
                    </div>
                </div>
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