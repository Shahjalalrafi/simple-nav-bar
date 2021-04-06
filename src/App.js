import './App.css';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path='/'>
            <Navbar />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
