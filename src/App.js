import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import GDPChart from './components/Chart/Chart';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <GDPChart countries={['USA', 'CHN', 'IND', 'JPN', 'DEU']} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
