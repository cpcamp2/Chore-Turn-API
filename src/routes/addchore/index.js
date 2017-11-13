import { h, Component } from 'preact';
// import style from './style';

export default class AddChore extends Component {
  // handleClick = (e) => {
  //   e.preventDefault();
  //     // console.log(this.name.value)
  //     var name = this.name;
  //     var duration = this.duration;
  //     var status = this.status;
  //     var date = this.date;

  //     $.ajax({
  //       url: 'http://localhost:3000/chores',
  //       type: 'POST',
  //       data: { chore: { name: name, duration: duraction, status: status, date: date } },
  //       success: (response) => {
  //         console.log('it worked!', response);
  //       },
  //       error: (response) => {
  //         console.log('it failed', response);
  //       }
  //       });
  //     }






//Notes: Needs logic on click to redirect to a page that will allow user to choose chore household
//That will redirect to a page that shows multiple chores. Then a page that will allow you to select the optional duration
//Then it will redirect to the google calendar page.
//Form below. Break down into parts for add and edit form.

//**************************************************************************//
  // <div className="add-chore">
  //   <br></br>
  //   <br/>
  //   <h2>add chore</h2>
  //   <br/>
  //   <form onSubmit={this.handleClick} method="get">
  //   <ul>
  //     <li> Name: <input ref={a => this.name = a} type="text"/> </li> <br/>
  //     <li> Duration: <input ref={b => this.duration = b} type="text"/> </li> <br/>
  //     <li> status: <input ref={ c => this.status = c} type="text"/> </li> <br/>
  //     <li> date: <input ref={d => this.date = d} type="text"/> </li> <br/>
  //   <input type="submit" value="add chore"/>
  //   </ul>
  //   </form>
  // </div>
//**************************************************************************//

  //Code below is for the chore form to contact the API.

//**************************************************************************//
    // handleClick = (e) => {
    //   e.preventDefault();
    //   var url = 'http://localhost:3000/chores',
    //       data= JSON.stringify({
    //         chore: {
    //           name: this.name.value,
    //           duration: this.duration.value,
    //           status: this.status.value,
    //           date: this.date.value,
    //         }
    //       });

    //     fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: data
    //     })
    //     .then( res => res.json())
    //     .then( jsonRes => console.log(jsonRes))
    //     .catch( err => console.log(err))
    // }
//**************************************************************************//

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
