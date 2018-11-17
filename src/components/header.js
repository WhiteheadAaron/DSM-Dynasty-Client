import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="App">
    <section className="homeBox">
      <NavLink to="/" className="homeButton">
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
      <div class="dropdown">
        <button class="dropbtn">Teams</button>
        <div class="dropdown-content">
          <NavLink to="/aaron" activeClassName="isActive" className="teamsButton">Aaron Whitehead</NavLink>
          <NavLink to="/casey" activeClassName="isActive" className="teamsButton">Casey Ambrosius</NavLink>
          <NavLink to="/chris" activeClassName="isActive" className="teamsButton">Chris Plog</NavLink>
          <NavLink to="/dan" activeClassName="isActive" className="teamsButton">Dan Sales</NavLink>
          <NavLink to="/jacob" activeClassName="isActive" className="teamsButton">Jacob Hewitt</NavLink>
          <NavLink to="/jared" activeClassName="isActive" className="teamsButton">Jared Bursik</NavLink>
          <NavLink to="/jon" activeClassName="isActive" className="teamsButton">Jon Lambert</NavLink>
          <NavLink to="/liam" activeClassName="isActive" className="teamsButton">Liam McGee</NavLink>
          <NavLink to="/rahul" activeClassName="isActive" className="teamsButton">Rahul Verma</NavLink>
          <NavLink to="/randy" activeClassName="isActive" className="teamsButton">Randy Whitehead</NavLink>
          <NavLink to="/robert" activeClassName="isActive" className="teamsButton">Robert Raczka</NavLink>
        </div>
      </div>
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
