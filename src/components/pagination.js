import React , {Component} from 'react';
//import { Link } from 'react-router-dom';
import $ from 'jquery';
//import { Redirect } from 'react-router';
import '../static/css/pagination.css'; 

export default class Pagination extends Component {
    onChangePage(val){
        $('html, body').scrollTop(0);
        return () => this.props.onChangePage(val)
    }
    renderPages(){   
        const oneRow = [];    
        for(var i = 1; i <= this.props.total_pages; i++) {
            if (i === this.props.current_page){
                oneRow.push(
                    <li className="page-item active">
                        <button 
                            className="page-link"
                            onClick={this.onChangePage(i)}>
                        {i}
                        </button>
                    </li>    
                )
            }
            else {
                oneRow.push(
                    <li className="page-item">
                        <button 
                            className="page-link"
                            onClick={this.onChangePage(i)}>
                        {i}
                        </button>
                    </li>    
                )
            }
        }
        return oneRow
    }
    renderPreviousPage(){  
        return (
            <li className="page-item">
                <button 
                    className="page-link"
                    onClick={this.onChangePage(this.props.current_page-1)}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
                </button>                
            </li>
        )
    }
    renderNextPage(){      
        if (this.props.current_page+1 <= this.props.total_pages){
            return (
                <li className="page-item">
                    <button 
                        className="page-link"
                        onClick={this.onChangePage(this.props.current_page+1)}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Previous</span>
                    </button>                
                </li>
            )
        }
        else {
            return(
                <li className="page-item">
                    <button 
                        className="page-link"
                        onClick={this.onChangePage(this.props.total_pages)}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Previous</span>
                    </button>                
                </li>
            )
        }
    }
    render(){
        return (
            <nav className="pagination-layout-custom">
            <ul className="pagination justify-content-center">

                {this.renderPreviousPage()}

                {this.renderPages()}

                {this.renderNextPage()}

            </ul>
        </nav>
        )
    }
}