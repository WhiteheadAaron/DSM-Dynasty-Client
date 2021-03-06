import React, { Component } from "react";
import { connect } from "react-redux";
import "./dropdown.css";
import "./draft.css";
import './2017Standings.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notfound";
import Aaron from "./components/players/aaron";
import Hewitt from "./components/players/hewitt";
import Jon from "./components/players/jon";
import Plog from "./components/players/plog";
import Liam from "./components/players/liam";
import Dan from "./components/players/dan";
import Casey from "./components/players/casey";
import Robert from "./components/players/robert";
import Rahul from "./components/players/rahul";
import Randy from "./components/players/randy";
import Bur from "./components/players/bur";
import Startup from "./components/drafts/startup";
import draft2018 from "./components/drafts/2018";
import standings2017 from "./components/standings/2017";
import standings2018 from "./components/standings/2018";
import allTimeStandings from "./components/standings/alltime";
import { getGamesAction } from "./actions/games";

class AppRouter extends Component {
  componentDidMount() {
    this.props.dispatch(getGamesAction());
  }


  
  render() {
    
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" component={Home} exact />
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
            <Route path="/startup" component={Startup} exact />
            <Route path="/2018-draft" component={draft2018} exact />
            <Route path="/2017-standings" component={standings2017} />
            <Route path="/2018-standings" component={standings2018} />
            <Route path="/alltime" component={allTimeStandings} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AppRouter);
