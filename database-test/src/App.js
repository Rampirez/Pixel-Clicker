import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scoreboard from "./pages/Scoreboard";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
      <Nav />
      <Switch>
          <Route exact path="/" component={Scoreboard} />
          <Route exact path="/highscore" component={Scoreboard} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
