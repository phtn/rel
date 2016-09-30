import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// components
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import AdminPage from './components/admin';
export default class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>

				<Nav />
				<Main />
				<Footer />
				
			</div>
		)
	}
}


render((
	<Router history={ hashHistory }>
		<Route path="/" component= { App } />
		<Route path="/admin" component ={ AdminPage } />
	</Router>
	), document.getElementById('container'));