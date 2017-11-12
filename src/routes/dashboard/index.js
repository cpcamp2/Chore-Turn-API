import { h, Component } from 'preact';


export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: ["dbc", "house"]
    }
  }
  render() {
    return(
      <div>
        {this.state.locations.map( (place) => {
          return <p>{place}</p>
        })}
        <p>{this.props.test}</p>
        <h1>hello its working</h1>
      </div>
    )
  }
}
