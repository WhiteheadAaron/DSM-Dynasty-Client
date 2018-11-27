import React from "react";
import { connect } from "react-redux";
import { filter } from "../../actions/draft";
import Header from "../header";

function draft2018(props) {
  let draftPicks = [
    {
      pick: 1.01,
      player: "Saquon Barkley",
      img: "saquon",
      drafter: "Jared"
    },
    {
      pick: 1.02,
      player: "Derrius Guice",
      img: "guice",
      drafter: "Dan"
    },
    {
      pick: 1.03,
      player: "Ronald Jones",
      img: "ronald",
      drafter: "Aaron"
    },
    {
      pick: 1.04,
      player: "Rashaad Penny",
      img: "rashaad",
      drafter: "Casey"
    },
    {
      pick: 1.05,
      player: "DJ Moore",
      img: "djmoore",
      drafter: "Chris"
    },
    {
      pick: 1.06,
      player: "Kerryon Johnson",
      img: "kerryon",
      drafter: "Aaron"
    },
    {
      pick: 1.07,
      player: "Calvin Ridley",
      img: "ridley",
      drafter: "Aaron"
    },
    {
      pick: 1.08,
      player: "Royce Freeman",
      img: "freeman",
      drafter: "Dan"
    },
    {
      pick: 1.09,
      player: "Nick Chubb",
      img: "chubb",
      drafter: "Aaron"
    },
    {
      pick: 1.1,
      player: "Sony Michel",
      img: "sony",
      drafter: "Robert"
    }
  ];

  let draftPicks2 = [
    {
      pick: 2.01,
      player: "Anthony Miller",
      drafter: "Jared"
    },
    {
      pick: 2.02,
      player: "Mike Gesicki",
      drafter: "Jared"
    },
    {
      pick: 2.03,
      player: "Courtland Sutton",
      drafter: "Jon"
    },
    {
      pick: 2.04,
      player: "Christian Kirk",
      drafter: "Casey"
    },
    {
      pick: 2.05,
      player: "James Washington",
      drafter: "Chris"
    },
    {
      pick: 2.06,
      player: "Michael Gallup",
      drafter: "Jon"
    },
    {
      pick: 2.07,
      player: "Hayden Hurst",
      drafter: "Jon"
    },
    {
      pick: 2.08,
      player: "Dallas Goedert",
      drafter: "Dan"
    },
    {
      pick: 2.09,
      player: "Kalen Ballage",
      drafter: "Randy"
    },
    {
      pick: 2.1,
      player: "Antonio Callaway",
      drafter: "Robert"
    },
    {
      pick: 3.01,
      player: "Josh Rosen",
      drafter: "Jared"
    },
    {
      pick: 3.02,
      player: "DJ Chark",
      drafter: "Jacob"
    },
    {
      pick: 3.03,
      player: "Lamar Jackson",
      drafter: "Rahul"
    },
    {
      pick: 3.04,
      player: "Dante Pettis",
      drafter: "Casey"
    },
    {
      pick: 3.05,
      player: "Josh Allen",
      drafter: "Chris"
    },
    {
      pick: 3.06,
      player: "Baker Mayfield",
      drafter: "Aaron"
    },
    {
      pick: 3.07,
      player: "Jaylen Samuels",
      drafter: "Randy"
    },
    {
      pick: 3.08,
      player: "John Kelly",
      drafter: "Aaron"
    },
    {
      pick: 3.09,
      player: "Deon Cain",
      drafter: "Randy"
    },
    {
      pick: 3.1,
      player: "Nyheim Hines",
      drafter: "Robert"
    },
    {
      pick: 4.01,
      player: "Sam Darnold",
      drafter: "Jared"
    },
    {
      pick: 4.02,
      player: "Peyton Barber",
      drafter: "Jacob"
    },
    {
      pick: 4.03,
      player: `J'Mon Moore`,
      drafter: "Rahul"
    },
    {
      pick: 4.04,
      player: "Ito Smith",
      drafter: "Casey"
    },
    {
      pick: 4.05,
      player: "Roc Thomas",
      drafter: "Chris"
    },
    {
      pick: 4.06,
      player: "Keke Coutee",
      drafter: "Aaron"
    },
    {
      pick: 4.07,
      player: "Jordan Wilkins",
      drafter: "Jon"
    },
    {
      pick: 4.08,
      player: "Bo Scarbrough",
      drafter: "Dan"
    },
    {
      pick: 4.09,
      player: "Dalton Schultz",
      drafter: "Randy"
    },
    {
      pick: 4.1,
      player: "Chase Edmonds",
      drafter: "Robert"
    }
  ];
  function generateHtml() {
    let newArr = draftPicks.map((item, index) => {
      return (
        <div key={index} className={`playerSection pick${item.pick}`}>
          <h3>
            {item.pick}. {item.player}
          </h3>
          <h4>Drafted by: {item.drafter}</h4>
          <div className="imgBox">
            <img
              src={require(`../../images/${item.img}.jpg`)}
              alt={`${item.player}`}
            />
          </div>
        </div>
      );
    });
    return newArr;
  }

  function generateSmallHtml() {
    let newArr = draftPicks2.map((item, index) => {
      return (
        <div key={index} className={`playerSmallSection pick${item.pick}`}>
          <h3>
            {item.pick}. {item.player}
          </h3>
          <h4>Drafted by: {item.drafter}</h4>
        </div>
      );
    });
    return newArr;
  }

  function generateFilterHtml() {
    let newArr = draftPicks.filter(
      item => item.drafter === props.filterReducer.filter.item
    );
    let newArr2 = newArr.map((item, index) => {
      return (
        <div key={index} className={`playerSection pick${item.pick}`}>
          <h3>
            {item.pick}. {item.player}
          </h3>
          <div className="imgBox">
            <img
              src={require(`../../images/${item.img}.jpg`)}
              alt={`${item.player}`}
            />
          </div>
        </div>
      );
    });
    return newArr2;
  }

  function generateSmallFilterHtml() {
    let newArr = draftPicks2.filter(
      item => item.drafter === props.filterReducer.filter.item
    );
    let newArr2 = newArr.map((item, index) => {
      return (
        <div key={index} className={`playerSmallSection pick${item.pick}`}>
          <h3>
            {item.pick}. {item.player}
          </h3>
        </div>
      );
    });
    return newArr2;
  }

  const playerDropDown = () => {
    let players = [
      "Aaron",
      "Casey",
      "Chris",
      "Dan",
      "Jacob",
      "Jared",
      "Jon",
      "Rahul",
      "Randy",
      "Robert"
    ];

    let newArr = players.map((item, index) => {
      return (
        <button
          key={index}
          onClick={() => {
            props.dispatch(filter({ item }));
          }}
          className="teamsButton"
          data-close-on-click="true"
        >
          {item}
        </button>
      );
    });

    return (
      <header role="banner" className="draftHeader">
        <h2 className="drafth1">2018 Rookie Draft</h2>
        <div className="dropdown filterDrop" data-close-on-click="true">
          <button className="dropbtn filterButt" data-close-on-click="true">
            Filter
          </button>
          <div className="dropdown-content" data-close-on-click="true">
            <button
              onClick={() => {
                props.dispatch(filter(null));
              }}
              className="teamsButton"
              data-close-on-click="true"
            >
              No Filter
            </button>
            {newArr}
          </div>
        </div>
      </header>
    );
  };

  if (!props.filterReducer.filter) {
    return (
      <React.Fragment>
        <Header />
        {playerDropDown()}
        <section className="draftGrid">{generateHtml()}</section>
        <section className="smallDraftGrid">{generateSmallHtml()}</section>
      </React.Fragment>
    );
  }

  if (props.filterReducer.filter) {
    return (
      <div className="filterBox">
        <Header />
        {playerDropDown()}
        <h3>{props.filterReducer.filter.item}</h3>
        <section className="draftGrid">{generateFilterHtml()}</section>
        <section className="smallDraftGrid">
          {generateSmallFilterHtml()}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(draft2018);