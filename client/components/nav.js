import React, { Component } from 'react';
import Button from 'react-bootstrap';

export default class Nav extends Component {
	render() {
		
		$(document).ready(function(){
	    $('.modal-trigger').leanModal({
	    	opacity: 0
	    });
	  });

		return(
			<div className="navbar-fixed">
				<nav>
			    <div className="nav-wrapper">
			    	<ul className="nav-mobile left">
			    		<li className="menu dropdown-button" data-activates="dd-menu">
			    			<a href="#" className="left"><i className="large material-icons">subject</i></a>
			    			
			    		</li>
			    	</ul>
			    	
			      <a href="/" className="brand-logo center">
			      	<div className="row">
			      		<div className="col-xs-6">
			      			{/*<i className="material-icons">swap_calls</i>*/}
			      			NORMETCO
			      		</div>
			      		
			      	</div>
			      </a>
			      
			      

			      <ul id="dd-menu" className="dropdown-content">
			        <li className=""><a href="#">Services</a></li>
			        <li className=""><a href="#">Products</a></li>
			        <li className=""><a href="#">Contact Us</a></li>
			        <li className=""><a href="#">About</a></li>
			      </ul>

			      

			    </div>
			  </nav>

			</div>
		);	
	}
}