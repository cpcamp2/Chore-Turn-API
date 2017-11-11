import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
import Signup from '../routes/signup';
import Login from '../routes/login';
import NewUser from '../routes/newuser';
import AddMember from '../routes/addmember';
import AddChore from '../routes/addchore';

// import Devise from 'devise';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Login path="/login/" />
					<Signup path="/signup/" />
					<NewUser path="/newuser/" />
					<AddMember path="/addmember/" />
					<AddChore path="/addchore/" />
				</Router>
			</div>
		);
	}
}
