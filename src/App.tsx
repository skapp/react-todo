import Dashboard from './Pages/Dashboard';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact={true} component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

