import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


class ContactUs extends Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			message: '',
		};
	}
	handleSend() {
		Meteor.call('insertNewMessage', this.state.name, this.state.email, this.state.message)
		Bert.alert({
			type: 'success',
			title: 'Message Sent',
			message: 'Thank you for contacting us.',
			style: 'fixed-bottom',
			icon: 'fa-check'
		});
	}
	updateName() {
		var nameInput = this.refs.nameInput;
		var nameVal = nameInput.value;
		this.setState({name: nameVal});
	}
	updateEmail() {
		var emailInput = this.refs.emailInput;
		var emailVal = emailInput.value;
		this.setState({email: emailVal});
	}
	updateMessage() {
		var messageInput = this.refs.messageInput;
		var messageVal = messageInput.value;
		this.setState({message: messageVal});
	}
	render() {
		
		return (
			<div>
			<div className="row contact-div">
				<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header"><i className="large material-icons contact">email</i>Contact Us</div>
			      <div className="collapsible-body">


			      	<div className="row">
						    <form className="col s12">
						      <div className="row">
						        <div className="input-field col s12">
						          <input ref="nameInput" id="name" type="text" className="validate" onChange={this.updateName.bind(this)}/>
						          <label htmlFor="name">Name</label>
						        </div>
						      </div>
						      <div className="row">
						        <div className="input-field col s12">
						          <input ref="emailInput" id="email" type="text" className="validate" onChange={this.updateEmail.bind(this)}/>
						          <label htmlFor="email">Email</label>
						        </div>
						      </div>
						      <div className="row">
						        <div className="input-field col s12">
						          <input ref="messageInput" id="message" type="text" className="validate" onChange={this.updateMessage.bind(this)} />
						          <label htmlFor="message">Message</label>
						        </div>
						      </div>
						      <div className="row center">
						      	<a className="btn btn-default "
						      			onClick={ this.handleSend.bind(this) }
						      	>
						      	<span>send</span>

						      	</a>  
						      </div>
						    </form>
						  </div>


			      </div>
			    </li>
			  </ul>
			</div>
			</div>
		)
	}

}
export default ContactUs;