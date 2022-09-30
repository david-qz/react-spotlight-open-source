import { NavLink, Route, Switch } from 'react-router-dom';
import GDPChart from './components/Chart/Chart';
import Table from './components/Table/Table';

function App() {
  return (
    <div className='grid grid-rows-page-layout'>
      <nav className='p-2 flex justify-center gap-1'>
        <NavLink to="/table" className='bg-blue-300 px-2 py-1 rounded [&.active]:bg-blue-400'>
          Table
        </NavLink>
        <NavLink to="/charts" className='bg-blue-300 px-2 py-1 rounded [&.active]:bg-blue-400'>
          Charts
        </NavLink>
      </nav>
      <Switch>
        <Route path="/table">
          <div className='flex flex-col'>
            <h1 className='m-3 text-3xl font-bold'>Table Library</h1>
            <Table />
          </div>
        </Route>
        <Route path="/charts">
          <div className='flex flex-col'>
            <h1 className='m-3 text-3xl font-bold'>Chart Library</h1>
            <GDPChart countries={['USA', 'CHN', 'IND', 'JPN', 'DEU']} />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
