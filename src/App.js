import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./components/main";
import CreateEdit from "./components/create-edit";
import NotFound from "./components/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/edit" component={CreateEdit} />
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
}

export default App;
