import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 10
	};

	// // gets called when this route is navigated to
	// componentDidMount() {
	// 	// start a timer for the clock:
	// 	this.timer = setInterval(this.updateTime, 1000);
	// }
	//
	// // gets called just before navigating away from the route
	// componentWillUnmount() {
	// 	clearInterval(this.timer);
	// }
	//
	// // update the current time
	// updateTime = () => {
	// 	this.setState({ time: Date.now() });
	// };
	//
	// increment = () => {
	// 	this.setState({ count: this.state.count+1 });
	// };

	// Note: `user` comes from the URL, courtesy of our router
	render() {
		return (
			<div className="household-timeline">
				<br></br>
				<br/>
				<h2>User Timeline</h2>
				<br/>
				<ol>
					<li> Household </li>
					<li> Household </li>
				</ol>
			</div>
		)
	}
}
