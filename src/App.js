import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Standings from "./components/standings";
import Teams from "./components/teams";
import Drafts from "./components/drafts";
import NotFound from "./components/notfound";

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/standings" component={Standings} exact />
        <Route path="/teams" component={Teams} exact />
        <Route path="/drafts" component={Drafts} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
