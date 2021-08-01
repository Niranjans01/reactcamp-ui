import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from './Profile';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/profile" component={Profile} />
</Switch>
</div>
    </Router>
  );
}

export default App;
