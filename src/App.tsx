import logo from './logo.svg';
import './App.css';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h1" component="h2">
          Todo App
        </Typography>
      </header>
    </div>
  );
}

export default App;

