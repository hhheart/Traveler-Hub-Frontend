import React, {Component} from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { scaleRotate as Menu } from 'react-burger-menu'
import SearchBar from '../components/search_bar';
import SearchContent from '../components/search_content';
import Footer from '../components/footer';

import {
    onRequestPackage, 
    onRequestDictionary
} from '../actions/package_search';

import '../static/css/package_search.css';
class PackageSearch extends Component{
    constructor() {
        super()
        this.state = {
            loading: false,
            sidebarIsOpen: false,

            request:'',
            pname_request: '',
            minp_request: '',
            maxp_request: '',
            arrival_request: '',
            departure_request: '',
            region_request: '',
            province_request: '',
            company_request: '',
            tags_request: '',
            page_request: '&page=1',

            Qtag_request: '',

            tags: {
                pkname: '',
                minp: '',
                maxp: '',
                arrive: '',
                depart: '',
                region: '',
                provinces: '',
                company: '',
                tags: '',
                Qtag: '',
            },

            dict_regions: '',
            dict_tags: '',
            dict_Qtags: '',
        }
    }    
    componentWillMount(){
        this.props.onRequestDictionary()
        .then((response) => {
            this.setState({
                dict_regions : response.payload.regions,
                dict_tags: response.payload.keywords,
                dict_Qtags: response.payload.travel_types,
            })
        })
    }
    handleOpenSidebar(){
        this.setState({sidebarIsOpen: true})
    }
    onPNameChange(event){   
        this.setState({
            pname_request: '&name='+event.target.value,
            tags: {...this.state.tags,pkname: event.target.value},
        })  
    }
    onMinPriceChange(event){
        this.setState({
            minp_request: '&minPrice='+event.target.value,
            tags: {...this.state.tags,minp: event.target.value},
        })    
    }
    onMaxPriceChange(event){      
        this.setState({
            maxp_request: '&maxPrice='+event.target.value,
            tags: {...this.state.tags,maxp: event.target.value},
        })  
    }
    onArrivalChange(event){
        this.setState({
            arrival_request: '&Arrival='+event.target.value,
            tags: {...this.state.tags,arrive: event.target.value},
        })  
    }
    onDepartureChange(event){
        this.setState({
            departure_request: '&Departure='+event.target.value,
            tags: {...this.state.tags,depart: event.target.value},
        })  
    }
    onTagsSelected(val){
        this.setState({
            tags_request: '&specialTag='+val,
            tags: {...this.state.tags,tags: val},
        }) 
    }
    onProvincesSelected(val){
        console.log(val)
        this.setState({
            province_request: '&province='+val,
            tags: {...this.state.tags,provinces: val},
        })        
    }
    onCompanysSelected(val){
        console.log(val)
        this.setState({
            company_request: '&company='+val,
            tags: {...this.state.tags,companys: val},
        })        
    }
    onQRegionClick(e){
        console.log(e)
        this.setState({
            province_request: '&province='+e,
            tags: {...this.state.tags,provinces: e},
            //loading:true
        },() => this.onSearchSubmit()) 
    }
    onQTagClick(e){
        console.log(e)
        this.setState({
            Qtag_request: '&travelType='+e,
            tags: {...this.state.tags,Qtag: e},
            //loading:true
        },() => this.onSearchSubmit()) 
    }
    onReset(e){
        switch (e){
            case "pkname":{
                this.setState({
                    pname_request: '',
                    page_request: '&page=1',
                    tags: {...this.state.tags,pkname: ''},
                },() => this.onSearchSubmit()) 
                break;
            }
            case "minp":{
                this.setState({
                    minp_request: '',
                    page_request: '&page=1',
                    tags: {...this.state.tags,minp: ''},
                },() => this.onSearchSubmit()) 
                break;
            }
            case "maxp":{
                this.setState({
                    maxp_request: '',
                    page_request: '&page=1',
                    tags: {...this.state.tags,maxp: ''},
                },() => this.onSearchSubmit()) 
                break;               
            }
            case "arrive":{
                this.setState({
                    arrival_request: '',
                    page_request: '&page=1',
                    tags: {...this.state.tags,arrive: ''},
                },() => this.onSearchSubmit()) 
                break;               
            }
            case "depart":{
                this.setState({
                    departure_request: '',
                    page_request: '&page=1',
                    tags: {...this.state.tags,depart: ''},
                },() => this.onSearchSubmit()) 
                break;               
            }
            case "provinces":{
                this.setState({
                    province_request: '',
                    page_request: '&page=1',
                    tags: {...this.state.tags,provinces: ''},
                },() => this.onSearchSubmit()) 
                break;               
            }
            case "tags":{
                this.setState({
                    tags_request: '',
                    page_request: '&page=1',
                    tags: {...this.state.tags,tags: ''},
                },() => this.onSearchSubmit()) 
                break;               
            }
            case "Qtag":{
                this.setState({
                    Qtag_request: '',
                    page_request: '&page=1',
                    tags: {...this.state.tags,Qtag: ''},
                },() => this.onSearchSubmit()) 
                break;               
            }
            default: {
                return console.log('defautl case reset')
            }

        }        
    }
    onChangePage(e){
        //console.log(e)
        //console.log(this.state.request)
        this.setState({
            page_request: '&page='+e,
        },() => this.onSearchSubmit())        
    }
    onSearchSubmit(){
        this.setState({
            request: 
                this.state.pname_request+
                this.state.minp_request+
                this.state.maxp_request+
                this.state.arrival_request+
                this.state.departure_request+
                this.state.province_request+
                this.state.tags_request+
                this.state.Qtag_request+
                this.state.page_request,
                loading:true,
        },() => this.getRequestLink())
    }
    getRequestLink(){
        console.log(this.state.request)
        this.props.onRequestPackage(this.state.request)
        .then(function (response) {
            console.log(response);
        })
        .then (()=> {
            this.setState({
                sidebarIsOpen: false,
                loading:false,
            })
        })
    }
    render(){
        console.log('container: '+this.props.current_page)
        return (    
            <div>         
                <Menu 
                    pageWrapId={ "page-wrap" }
                    isOpen={ this.state.sidebarIsOpen }
                    >
                    <SearchBar
                        loading={this.state.loading}
                        tags={this.state.tags}
                        dict_regions={this.state.dict_regions}
                        dict_tags={this.state.dict_tags}

                        onPNameChange={this.onPNameChange.bind(this)}
                        onMinPriceChange={this.onMinPriceChange.bind(this)}
                        onMaxPriceChange={this.onMaxPriceChange.bind(this)}
                        onSearchSubmit={this.onSearchSubmit.bind(this)}   
                        onArrivalChange={this.onArrivalChange.bind(this)}
                        onDepartureChange={this.onDepartureChange.bind(this)}
                        onTagsSelected={this.onTagsSelected.bind(this)}
                        onProvincesSelected={this.onProvincesSelected.bind(this)}
                        onCompanysSelected={this.onCompanysSelected.bind(this)}
                    />
                </Menu>
                <div id="page-wrap" className="container-fluid row layout-main bg-color-custom">   
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <SearchContent 
                            loading={this.state.loading}
                            packages={this.props.packages}
                            total_pages={this.props.total_pages}
                            current_page={this.props.current_page}
                            tags={this.state.tags}
                            dict_regions={this.state.dict_regions}
                            dict_Qtags={this.state.dict_Qtags}   

                            onOpenSidebar={this.handleOpenSidebar.bind(this)}
                            onReset={this.onReset.bind(this)}
                            handleQTagClick={this.onQTagClick.bind(this)}
                            handleQRegionClick={this.onQRegionClick.bind(this)}
                            handlePageChange={this.onChangePage.bind(this)}
                        /> 
                    </div>   
                    <div className="col-md-2"></div>          
                </div>
                <Footer />
        </div>
        )
    }
}
function mapStateToProps(state){
    return {
        packages: state.package_search.packages,
        total_pages: state.package_search.total_pages,
        current_page: state.package_search.current_page,
        //dictionary: state.package_search.dictionary,
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onRequestPackage,
        onRequestDictionary,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PackageSearch);

