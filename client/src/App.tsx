import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Create from "./pages/create";
import Detail from "./pages/detail";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail" exact>
          <Detail />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
