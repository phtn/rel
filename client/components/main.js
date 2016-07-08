import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		$(document).ready(function(){
      $('.parallax').parallax();
    });

		return(
			<div>
				<div className="parallax-container">
					<div className="parallax">
						<img src="../parallax1.jpg" />
					</div>
				</div>
				<div className="section white">
					<div className="row container">
						<h2 className="header"> Parallax</h2>
						<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
						
						<div className="card blue-grey darken-1">
							<div className="card-content white-text">
								<span className="card-title"> Title </span>
								<p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
							</div>
							<div className="card-action">
								<a href="#">Link 1</a>
								<a href="#">Link 2</a>
							</div>

						</div>
					</div>
				</div>

				<div className="parallax-container">
					<div className="parallax">
						<img src="../parallax2.jpg" />
					</div>
				</div>
				<div className="section white">
					<div className="row container">
						<h2 className="header"> Parallax 2</h2>
						<p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>

						<div className="card blue-grey darken-1">
							<div className="card-content white-text">
								<span className="card-title"> Title </span>
								<p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
							</div>
							<div className="card-action">
								<a href="#">Link 1</a>
								<a href="#">Link 2</a>
							</div>
						</div>
							
					</div>
				</div>

			</div>
		)	
	}
}