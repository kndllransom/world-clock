import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MyTimezones from './pages/MyTimezones'
import { useState } from 'react';

function App() { 
  const [timezones, setTimezones] = useState([])
  
  return (
    <Router>
      <div className="App">
        <h1>World Clock</h1>
        <Switch>
          <Route path="/" exact>
            <Home setTimezones={setTimezones} timezones={timezones}/>
          </Route>
          <Route path="/timezones" exact>
            <MyTimezones setTimezones={setTimezones} timezones={timezones} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
