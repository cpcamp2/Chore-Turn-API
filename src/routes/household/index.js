import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Tabs from 'preact-material-components/Tabs';
import 'preact-material-components/Tabs/style.css';



class Household extends Component {
  render ({ household }) {
    return (
      <div>
        <h1>Household: { household }</h1>
        <Tabs className='demo-tabs' indicator-accent={true}>
          <Tabs.Tab href="/household">Details</Tabs.Tab>
          <Tabs.Tab href="/household">Members</Tabs.Tab>
          <Tabs.Tab href="/household">Chores</Tabs.Tab>
        </Tabs>
      </div>
    );
  }
}

export default Household;
