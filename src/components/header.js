import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="App">
    <section className="homeBox">
      <NavLink to="/" activeClassName="isActive" className="homeButton nav">
        DSM Dynasty
      </NavLink>
    </section>
    <section className="buttonsSection">
      <NavLink
        to="/standings"
        activeClassName="isActive"
        className="standingsButton nav"
      >
        Standings
      </NavLink>
      <NavLink
        to="/teams"
        activeClassName="isActive"
        className="teamsButton nav"
      >
        Teams
      </NavLink>
      <NavLink
        to="/drafts"
        activeClassName="isActive"
        className="draftsButton nav"
        onClick={() => {
          console.log("Drafts");
        }}
      >
        Drafts
      </NavLink>
    </section>
  </header>
);

export default Header;
