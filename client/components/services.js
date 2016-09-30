import React, { Component } from 'react';

class Services extends Component {
	render() {
		return (
			<div>
				
				<div className="section white">
					<div className="row container">
						<h2 className="header header-name"> Engineering Services</h2>
						<hr className="divider"/>
					</div>
				</div>

				<div className="section white">
					<div className="row container">
						
						<div className="row">

							<div className="col s12 l6">
								<div className="card card-services small">
									<div className="card-image">
										<img className="card-img activator" src="../services1.jpg"/>
									</div>
									<div className="card-reveal">
										<span className="card-title">Engineering and Design 
											<i className="small material-icons right close-reveal">keyboard_arrow_down</i>
										</span>
										<span className="right"></span>
										<ul className="collection">
											<li className="collection-item">Erection of Steel Structures</li>
											<li className="collection-item">Installation & Commisioning of Transport System</li>
											<li className="collection-item">Installation of Mill Master Gears and Pinion</li>
											<li className="collection-item">Overhauling and Repair of Philadelphia Gears adn Vertical Raw Mills</li>
											<li className="collection-item">Alignment of Machineries</li>
											<li className="collection-item">Electrostatic Precipicators</li>
											<li className="collection-item">Refactory Works</li>
											<li className="collection-item">Steam Piping and Cladding Works</li>
											<li className="collection-item">ID Fans / Blowers / Structural Members</li>
										</ul>
									</div>
									<div className="card-content">
										<span className="card-title services activator"> Engineering & Design </span>
										{/*<span className="right"><i className="material-icons medium more-icon activator ">info_outline</i></span>*/}
									</div>
								</div>
							</div>

							<div className="col s12 l6">
								<div className="card card-services small">
									<div className="card-image">
										<img className="card-img activator" src="../services2.jpg"/>
									</div>
									<div className="card-reveal">
										<span className="card-title"> Machinery Installations <i className="small material-icons right close-reveal">keyboard_arrow_down</i> </span>
										<ul className="collection">
											<li className="collection-item">KILNS</li>
											<li className="collection-item">Mills</li>
											<li className="collection-item">Cruchers</li>
											<li className="collection-item">Conveyor Buckets</li>
											<li className="collection-item">Elevators</li>
											<li className="collection-item">Electrostatic Precipicators</li>
											<li className="collection-item">Coal Mills</li>
											<li className="collection-item">Dryers</li>
											<li className="collection-item">ID Fans / Blowsers / Structural Members</li>
										</ul>
									</div>
									<div className="card-content">
										<span className="card-title services activator"> Machinery Installations </span>
									</div>
								</div>
							</div>

							<div className="col s12 l6">
								<div className="card card-services small">
									<div className="card-image">
										<img className="card-img activator" src="../maintenance.jpg"/>
									</div>
									<div className="card-reveal">
										<span className="card-title">Maintenace<i className="small material-icons right close-reveal">keyboard_arrow_down</i> </span>
										<ul className="collection">
											<li className="collection-item">Gear Alignments</li>
											<li className="collection-item">Conveyor Servicing</li>
										</ul>
									</div>
									<div className="card-content">
										<span className="card-title services activator"> Maintenance Works </span>
									</div>
								</div>
							</div>

							<div className="col s12 l6">
								<div className="card card-services small">
									<div className="card-image">
										<img className="card-img activator" src="../services4.jpg"/>
									</div>
									<div className="card-reveal">
										<span className="card-title"> Metal Fabrication <i className="small material-icons right close-reveal">keyboard_arrow_down</i> </span>
										<ul className="collection">
											<li className="collection-item">Conveying Equipment</li>
											<li className="collection-item">Bucket Eleveators</li>
											<li className="collection-item">Vibrating Screens</li>
											<li className="collection-item">Kiln Shell Air Separators</li>
											<li className="collection-item">Electrostatic Precipicators</li>
											<li className="collection-item">Dryers</li>
											<li className="collection-item">Fan Impeller and Casing</li>
											<li className="collection-item">Dust Collector</li>
											<li className="collection-item">Built-up beam / Structural Members</li>
										</ul>
									</div>
									<div className="card-content">
										<span className="card-title services activator"> Metal Fabrication </span>
										
									</div>
								</div>
							</div>

						</div>
						
						<div>
						</div>
					</div>
				</div>


			</div>
		)
	}
}
export default Services;