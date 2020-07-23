import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import UserRepos from "./components/RepositoriesPage";
import Home from "./components/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/userRepos" exact component={UserRepos}></Route>
      </Switch>
    </Router>
  );
}

export default App;
