import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

// components
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';

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

ReactDOM.render(<App />, document.getElementById('container'));