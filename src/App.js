import { NavLink, Route, Switch } from 'react-router-dom';
import GDPChart from './components/Chart/Chart';
import Table from './components/Table/Table';

function App() {
  return (
    <div className='grid grid-rows-page-layout'>
      <nav className='p-2 flex justify-end gap-1 bg-slate-600 shadow-xl'>
        <NavLink to="/table" className='shadow-lg bg-cyan-800 text-white px-2 py-1 rounded [&.active]:bg-cyan-700'>
          Table
        </NavLink>
        <NavLink to="/charts" className='shadow-lg bg-cyan-800 text-white px-2 py-1 rounded [&.active]:bg-cyan-700'>
          Charts
        </NavLink>
      </nav>
      <Switch>
        <Route path="/table">
          <div className='flex flex-col'>
            <h1 className='m-3 text-3xl font-bold'>React Suite Table Example</h1>
            <Table />
          </div>
        </Route>
        <Route path="/charts">
          <div className='flex flex-col'>
            <h1 className='m-3 text-3xl font-bold'>Recharts Example</h1>
            <GDPChart countries={['USA', 'CHN', 'IND', 'JPN', 'DEU']} />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
