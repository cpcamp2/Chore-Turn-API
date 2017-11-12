import { h, Component } from 'preact';
// import style from './style';
// import $ from 'jquery';


export default class AddChore extends Component {
	render() {
		return (
			<div className= "addchore" >
        <br></br>
        <br></br>
				<h1>Add Chores to your household</h1>
	        <ul>
            <p>Your added members will receive an invitation email to household [household_name] shortly.</p>
            <br></br>
            <p>In the meantime, try adding a few chores to your household.</p>
	        <input type="submit" value="Skip"/>
          <br></br>
          <input type="submit" value="Add Chores"/>
	        </ul>
	    </div>
		);
  }
}
