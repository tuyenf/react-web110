import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Form from './components/FormInput';
import DataTable from './components/DataTable';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/datatable" component={DataTable} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
