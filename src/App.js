import './App.css';
import RichTextEditor from './Components/Slate/RichTextEditor';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App-container">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <h1>Rich Text</h1>
              <RichTextEditor />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
