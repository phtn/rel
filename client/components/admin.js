import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../../collections/messages.js';

class AdminPage extends Component {
	showReceivedMsgs () {
		return this.props.messages.map((msgs)=> (
				<li key={msgs._id} className="collection-item animated fadeInDown">
					<div className="col-xs-3">Name: {msgs.name}</div>
					<div className="col-xs-3">Email: {msgs.email}</div>
					<div className="col-xs-3">Message: {msgs.message}</div>
					<div className="col-xs-3">Date: {msgs.createdAt.toString()}</div>
				</li>
		));
	}
	render() {
		
		Meteor.subscribe('showMessages')

		return (
			<div className="container-fluid">
				<div className="navbar-fixed">
									<nav>
								    <div className="nav-wrapper">
								    	
								      <a href="/admin" className="brand-logo center">
								      	<div className="row">
								      		<div className="col-xs-6">
								      			Admin Page
								      		</div>
								      	</div>
								      </a>
								    
								    </div>
								  </nav>
								</div>

				<div className="container-fluid">
					<ul className="collection">
						{this.showReceivedMsgs()}
					</ul>
				</div>
			</div>
		)
	}
}
export default AdminPage;

AdminPage.propTypes = {
	messages: React.PropTypes.array
};

export default createContainer(()=> {
	return {
		messages: Messages.find().fetch().reverse()
	}
}, AdminPage);