import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import NotMatch from './Components/NotMatch/NotMatch';
import UserDetail from './Components/UserDetail/UserDetail';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/user/:userId">
          <UserDetail></UserDetail>
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
