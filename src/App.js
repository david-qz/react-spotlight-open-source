import { Redirect, Route, Switch } from 'react-router-dom';
import GDPChart from './components/Chart';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen grid grid-rows-page-layout'>
      <Header />
      <Switch>
        <Route path="/table">
          <div className='flex flex-col'>
            <h1 className='m-3 text-3xl font-bold'>React Suite Table</h1>
            <Table />
          </div>
        </Route>
        <Route path="/charts">
          <div className='flex flex-col'>
            <h1 className='m-3 text-3xl font-bold'>Recharts</h1>
            <GDPChart countries={['USA', 'CHN', 'IND', 'JPN', 'DEU']} />
          </div>
        </Route>
        <Route path="/">
          <Redirect to="/table" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
