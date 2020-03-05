import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Login from "./components/Login";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
