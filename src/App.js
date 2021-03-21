import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home-page";
import PillsList from "./pills-list-page";
import ModalPills from "./modal-pills-page";
import TrackerList from "./tracker-list-page";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/medicamentos" component={PillsList} />
        <Route path="/seguimiento" component={TrackerList} />
      </Switch>
    </Router>
  );
}

export default App;
