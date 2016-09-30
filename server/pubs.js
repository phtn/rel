import { Meteor } from 'meteor/meteor';
import { Messages } from '/collections/messages.js';

Meteor.publish('showMessages', ()=> {
	return Messages.find();
});