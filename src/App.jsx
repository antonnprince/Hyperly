import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Create from './Create';
import Dash from './Dash';

function App() {
  return (
    <Router>
      <div className="flex flex-row bg-slate-200">
        <Nav />
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/dashboard">
            <Dash />
          </Route>
          {/* Default route */}
          <Route path="/">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
