import React , {Component} from 'react';
import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router';
import '../static/css/pagination.css'; 

export default class Pagination extends Component {
    onChangePage(val){
        return () => this.props.onChangePage(val)
    }
    renderPages(){   
        const oneRow = [];    
        for(var i = 1; i <= this.props.total_pages; i++) {
            oneRow.push(
                <li className="page-item" >
                    <button className="page-link"
                    onClick={this.onChangePage(i)}>{i}</button>
                </li>    
            )
        }
        return oneRow
    }
    renderPreviousPage(cur_page){
        if (cur_page-1 >= 1){
            return (
                <li className="page-item">
                    <Link className="page-link" 
                        to={`/package/page=${cur_page-1}`} 
                        onClick={this.onChangePage(cur_page-1)}>                        
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                    </Link>
                </li>
            )
        }
        else {
            return (
                <li className="page-item">
                    <Link className="page-link" 
                        to={`/package/page=${1}`} 
                        onClick={this.onChangePage(1)}>                        
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                    </Link>
                </li>
            )
        }
    }
    renderNextPage(cur_page){
        if (cur_page+1 <= this.props.total_pages){
            return (
                <li className="page-item">
                    <Link className="page-link" 
                        to={`/package/page=${cur_page+1}`} 
                        onClick={this.onChangePage(cur_page+1)}>                        
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Previous</span>
                    </Link>
                </li>
            )
        }
        else {
            return (
                <li className="page-item">
                    <Link className="page-link" 
                        to={`/package/page=${this.props.total_page}`} 
                        onClick={this.onChangePage(this.props.total_page)}>                        
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                    </Link>
                </li>
            )
        }
    }
    render(){
        return (
            <nav className="pagination-layout-custom">
            <ul className="pagination justify-content-center">

                {this.renderPreviousPage(this.props.current_page)}

                {this.renderPages()}

                {this.renderNextPage(this.props.current_page)}

            </ul>
        </nav>
        )
    }
}