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
      <div className="dropdown">
        <button className="dropbtn">Standings</button>
        <div className="dropdown-content">
          <NavLink
            to="/2018-standings"
            activeClassName="isActive"
            className="teamsButton"
          >
            2018
          </NavLink>
          <NavLink
            to="/2017-standings"
            activeClassName="isActive"
            className="teamsButton"
          >
            2017
          </NavLink>
          <NavLink
            to="/alltime"
            activeClassName="isActive"
            className="teamsButton"
          >
            All Time Standings
          </NavLink>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn teamDrop">Teams</button>
        <div className="dropdown-content">
          <NavLink
            to="/aaron"
            activeClassName="isActive"
            className="teamsButton"
          >
            Aaron Whitehead
          </NavLink>
          <NavLink
            to="/casey"
            activeClassName="isActive"
            className="teamsButton"
          >
            Casey Ambrosius
          </NavLink>
          <NavLink
            to="/chris"
            activeClassName="isActive"
            className="teamsButton"
          >
            Chris Plog
          </NavLink>
          <NavLink to="/dan" activeClassName="isActive" className="teamsButton">
            Dan Sales
          </NavLink>
          <NavLink
            to="/jacob"
            activeClassName="isActive"
            className="teamsButton"
          >
            Jacob Hewitt
          </NavLink>
          <NavLink
            to="/jared"
            activeClassName="isActive"
            className="teamsButton"
          >
            Jared Bursik
          </NavLink>
          <NavLink to="/jon" activeClassName="isActive" className="teamsButton">
            Jon Lambert
          </NavLink>
          <NavLink
            to="/liam"
            activeClassName="isActive"
            className="teamsButton"
          >
            Liam McGee
          </NavLink>
          <NavLink
            to="/rahul"
            activeClassName="isActive"
            className="teamsButton"
          >
            Rahul Verma
          </NavLink>
          <NavLink
            to="/randy"
            activeClassName="isActive"
            className="teamsButton"
          >
            Randy Whitehead
          </NavLink>
          <NavLink
            to="/robert"
            activeClassName="isActive"
            className="teamsButton"
          >
            Robert Raczka
          </NavLink>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Drafts</button>
        <div className="dropdown-content">
          <NavLink
            to="/startup"
            activeClassName="isActive"
            className="teamsButton"
          >
            Startup Draft
          </NavLink>
          <NavLink
            to="/2018-draft"
            activeClassName="isActive"
            className="teamsButton"
          >
            2018 Draft
          </NavLink>
        </div>
      </div>
    </section>
  </header>
);

export default Header;
