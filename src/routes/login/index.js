import { h, Component } from 'preact';
// import './App.css';
// import $ from 'jquery';
import { Link } from 'preact-router/match';

class Login extends Component {

  render() {
    return (
      <div className="log-in">
        <br></br>
        <br/>
        <h2>Log In</h2>
        <br/>
        <input type="submit" value="Log in with Facebook"/>
        <p> -OR- </p>
        {/* <form action="/action_page.php" method="get"> */}
        <ul>
          <li> Email: <input type="text" name="email"/> </li> <br/>
          <li> Password: <input type="password" name="password"/> </li> <br/>
          <input type="submit" value="Log In"/>
          <br></br>
            <Link activeClassName="password" href="/signup/">Forgot Your Password?</Link>

        </ul>
        {/* </form> */}
      </div>
    );
  }
}

export default Login;
