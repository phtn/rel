import React, { Component } from 'react';
import Button from 'react-bootstrap';

export default class Nav extends Component {
	render() {
		
		/*$('.dropdown-button').dropdown({
			constrain_width: false;
		});*/

		return(
			<div className="navbar-fixed">
				<nav>
			    <div className="nav-wrapper">
			    	<ul className="nav-mobile left">
			    		<li className="menu dropdown-button" data-activates="dd-menu">
			    			<a href="#" className="left"><i className="large material-icons">subject</i></a>
			    			MENU
			    		</li>
			    	</ul>
			    	
			      <a href="/" className="brand-logo center">NORMETCO</a>
			      <a href="#" className="right inquire"><i className="large material-icons">question_answer</i></a>
			      <ul id="dd-menu" className="dropdown-content">
			        <li className=""><a href="#">ABOUT</a></li>
			        <li className=""><a href="#">PROJECTS</a></li>
			        <li className=""><a href="#">CAREERS</a></li>
			      </ul>
			    </div>
			  </nav>
			</div>
		);	
	}
}