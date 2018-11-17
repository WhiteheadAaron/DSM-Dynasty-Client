import React from "react";
import './dropdown.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Standings from "./components/standings";
import Drafts from "./components/drafts";
import NotFound from "./components/notfound";
import Aaron from './components/players/aaron';
import Hewitt from './components/players/hewitt';
import Jon from './components/players/jon';
import Plog from './components/players/plog';
import Liam from './components/players/liam';
import Dan from './components/players/dan';
import Casey from './components/players/casey';
import Robert from './components/players/robert';
import Rahul from './components/players/rahul';
import Randy from './components/players/randy';
import Bur from './components/players/bur';

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/standings" component={Standings} exact />
        <Route path="/drafts" component={Drafts} exact />
        <Route path="/aaron" component={Aaron} exact />
        <Route path="/jacob" component={Hewitt} exact />
        <Route path="/jon" component={Jon} exact />
        <Route path="/chris" component={Plog} exact />
        <Route path="/liam" component={Liam} exact />
        <Route path="/dan" component={Dan} exact />
        <Route path="/casey" component={Casey} exact />
        <Route path="/robert" component={Robert} exact />
        <Route path="/rahul" component={Rahul} exact />
        <Route path="/randy" component={Randy} exact />
        <Route path="/jared" component={Bur} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
