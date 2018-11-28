import React from "react";
import { connect } from "react-redux";
import Header from "../header";

function Aaron(props) {
  function getPlayerGames(player) {
    let played = 0;
    let wins = 0;
    let losses = 0;
    let pointsFor = 0;
    let pointsAgainst = 0;
    let newArray = props.games.filter(item => item.year === 2017);
    console.log(newArray);

    newArray.forEach(item => {
      if (item.player1 === player) {
        played = played + 1;
        pointsAgainst = pointsAgainst + item.p2Points;
        pointsFor = pointsFor + item.p1Points;

        if (item.p1Points > item.p2Points) {
          wins = wins + 1;
        }
        if (item.p2points > item.p1Points) {
          losses = losses + 1;
        }
      }
      if (item.player2 === player) {
        played = played + 1;
        pointsAgainst = pointsAgainst + item.p1Points;
        pointsFor = pointsFor + item.p2Points;
        if (item.p2points > item.p1Points) {
          wins = wins + 1;
        } else {
          losses = losses + 1;
        }
      }
    });

    return (
      <React.Fragment>
        <h3>Wins: {wins}</h3>
        <h3>Losses: {losses}</h3>
        <h3>Points For: {pointsFor}</h3>
        <h3>Points Against: {pointsAgainst}</h3>
      </React.Fragment>
    );
  }


  return (
    <React.Fragment>
      <Header />
      <h1 className="standingsHeader">2017 Standings</h1>
      <div className="standingsSection">
        <div className="oneSection">
          <div className="image">
            <img src={require("../../images/trophy.jpg")} />
          </div>
          <div className="text">
            <h2>Champion: Robert Raczka</h2>
            {getPlayerGames("robert")}
          </div>
        </div>
        <div className="twoSection">
          <div className="text">
            <h2>Runner-Up: Randy Whitehead</h2>
            {getPlayerGames("randy")}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    games: state.gamesReducer.games
  };
}

export default connect(mapStateToProps)(Aaron);
