import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/HomePage";
import UserRepos from "./components/RepositoriesPage";
import DetailedRepo from "./components/DetailedRepo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/user-repos" exact component={UserRepos}></Route>
        <Route path="/detailed-repo" exact component={DetailedRepo}></Route>
      </Switch>
    </Router>
  );
}

export default App;
