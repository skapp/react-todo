import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import ToDo from './Pages/ToDo/ToDo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/todo" component={ToDo} />
        <Route path="/" exact={true} component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

