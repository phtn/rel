import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Services from './services.js';
import Products from './products.js';
import ContactUs from './contact.js';

export default class Main extends Component {
	render() {
		$(document).ready(function(){
      $('.parallax').parallax();
    });

    Meteor.subscribe('showMessages');

    
		
		return(
			<div>
				<div className="parallax-container">
					<div className="parallax">
						<img src="../parallax2.jpg" />
					</div>
				</div>
				<Services />
				<Products />
				<ContactUs />

			</div>
		)	
	}
}