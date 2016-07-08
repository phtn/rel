import React, { Component } from 'react';
import Button from 'react-bootstrap';

export default class Nav extends Component {
	render() {
		return(
			<div className="navbar-fixed">
				<nav>
			    <div className="nav-wrapper">
			      <a href="#" className="brand-logo"><i className="large material-icons">android</i></a>
			      <ul id="nav-mobile" className="right">
			        <li><a href="#">About</a></li>
			        <li><a href="#">Projects</a></li>
			        <li><a href="#">Careers</a></li>
			      </ul>
			    </div>
			  </nav>
			</div>
		);	
	}
}