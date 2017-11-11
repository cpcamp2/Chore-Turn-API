import { h, Component } from 'preact';
import $ from 'jquery';

class Signup extends Component {
    handleClick = (e) => {
      e.preventDefault();
      console.log(this.password.value)
       var firstName = this.first_name;
       var lastName = this.last_name;
       var userName = this.userName;
       var email = this.email;
       var password = this.password;

      $.ajax({
        url: 'http://localhost:3000/users',
        type: 'POST',
        data: { user: { first_name: firstName, last_name: lastName, userName: userName, email: email, password: password } },
        success: (response) => {
          console.log('it worked!', response);
        },
        error: (response) => {
          console.log('it failed', response);
        }
        });
      }

      render() {
        return (
          <div className="sign-up">
            <br></br>
            <br/>
            <h2>Sign Up</h2>
            <br/>
            <form onSubmit={this.handleClick} method="get">
            <ul>
              <li> First name: <input ref={a => this.first_name = a} type="text" name="first_name"/> </li> <br/>
              <li> Last name: <input ref={b => this.last_name = b} type="text" name="last_name"/> </li> <br/>
              <li> Username: <input ref={ c => this.username = c} type="text" name="userName"/> </li> <br/>
              <li> Email: <input ref={d => this.email = d} type="text" name="email"/> </li> <br/>
              <li> Password: <input ref={e => this.password = e} type="password" name="password"/> </li> <br/>
            <input type="submit" value="Sign Up"/>
            </ul>
            </form>
          </div>
          )
        }
}

export default Signup;
