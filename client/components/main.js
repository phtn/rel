import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		$(document).ready(function(){
      $('.parallax').parallax();
    });
		const about =  `Our purpose is to create long term value through quality service and development,
										commitment to health, safety and environment to our innovative customers.`
		return(
			<div>
				<div className="parallax-container">
					<div className="parallax">
						<img src="../parallax2.jpg" />
					</div>
				</div>
				<div className="section white">
					<div className="row container">
						<h4 className="header"> Northern Metalfab Technology Corporation</h4>
						<hr />
						<blockquote className="grey-text text-darken-3 lighten-3">{ about }</blockquote>
						
						<br />

						<div className="card">
							<div className="card-content">
								<span className="card-title"> WE VALUE </span>
								<ul className="collection value-ul">
									<li className="collection-item value-li">
										<span className="title"> Safety & Environment </span>
										<p> An overriding commitment to health, safety, environmental responsibility and sustainable development.</p>
									</li>
									<li className="collection-item">
										<span className="title">Integrity</span>
										<p>Commitment to target completion and delivery</p>
									</li>
									<li className="collection-item">
										<span className="title">High Performance</span>
										<p>The excitement and fulfillment of achieving superior business results and stretching our capabilities</p>
									</li>
									<li className="collection-item">
										<span className="title">Win-Win Relationships</span>
										<p>Having relationship which focuses on the creation of value of all parties.</p>
									</li>
									<li className="collection-item">
										<span className="title">Courage</span>
										<p>Accepting the responsibility to inspire and deliver positive change in the face of adversity</p>
									</li>
									<li className="collection-item">
										<span className="title">Respect</span>
										<p>The Embracing of diversity, enriched by openness, sharing, trust, teamwork and involvement.</p>
									</li>
								</ul>
							</div>
							

						</div>
					</div>
				</div>

				<div className="parallax-container">
					<div className="parallax">
						<img src="../parallax3.jpg" />
					</div>
				</div>
				<div className="section white">
					<div className="row container">
						<h2 className="header"> Engineering Services</h2>
						<hr />
						<blockquote className="grey-text text-darken-3 lighten-3">All Services are Completed in the highest Quality of Engineering expertise.</blockquote>
						
						<div className="row">

							<div className="col s12 l6">
								<div className="card card-services small">
									<div className="card-image">
										<img className="card-img activator" src="../services1.jpg"/>
									</div>
									<div className="card-reveal">
										<span className="card-title"> Engineering Design </span>
									</div>
									<div className="card-content">
										<span className="card-title services"> Engineering Design </span>
									</div>
								</div>
							</div>

							<div className="col s12 l6">
								<div className="card card-services small">
									<div className="card-image">
										<img className="card-img activator" src="../services2.jpg"/>
									</div>
									<div className="card-reveal">
										<span className="card-title"> Installation of Machinery </span>
									</div>
									<div className="card-content">
										<span className="card-title services"> Installation of Machinery </span>
									</div>
								</div>
							</div>

							<div className="col s12 l6">
								<div className="card card-services small">
									<div className="card-image">
										<img className="card-img activator" src="../services3.jpg"/>
									</div>
									<div className="card-reveal">
										<span className="card-title"> Electrical Engineering </span>
									</div>
									<div className="card-content">
										<span className="card-title services"> Electrical Engineering </span>
									</div>
								</div>
							</div>

							<div className="col s12 l6">
								<div className="card card-services small">
									<div className="card-image">
										<img className="card-img activator" src="../services4.jpg"/>
									</div>
									<div className="card-reveal">
										<span className="card-title"> Metal Fabrication </span>
									</div>
									<div className="card-content">
										<span className="card-title services"> Metal Fabrication </span>
									</div>
								</div>
							</div>

						</div>
							
					</div>
				</div>

			</div>
		)	
	}
}