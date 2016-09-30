import { Meteor } from 'meteor/meteor';
import { Messages } from '/collections/messages.js';

Meteor.startup(() => {

  Meteor.methods({
  	insertNewMessage(name, email, message) {
  		var msgs = Messages.insert({
  			name: name,
  			email: email,
  			message: message,
  			createdAt: new Date()
  		});
  		return msgs;
  	}
  })

});
