import React from "react";
import { connect } from "react-redux";
import Header from "../header";

function standings2017 (props) {
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
        if (item.p2Points > item.p1Points) {
          losses = losses + 1;
        }
      }
      if (item.player2 === player) {
        played = played + 1;
        pointsAgainst = pointsAgainst + item.p1Points;
        pointsFor = pointsFor + item.p2Points;
        if (item.p2Points > item.p1Points) {
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
        <h3>Points For: {pointsFor.toFixed(1)}</h3>
        <h3>Points Against: {pointsAgainst.toFixed(1)}</h3>
      </React.Fragment>
    );
  }


  return (
    <React.Fragment>
      <Header />
      <h1 className="standingsHeader">2017 Standings</h1>
      <div className="standingsSection">
        <div className="oneSection standings">
          <div className="image">
            <img src={require("../../images/trophy.jpg")} />
          </div>
          <div className="text">
            <h2>Champion: Robert Raczka</h2>
            {getPlayerGames("robert")}
          </div>
        </div>
        <div className="twoSection standings">
          <div className="text">
            <h2>Runner-Up: Randy Whitehead</h2>
            {getPlayerGames("randy")}
          </div>
        </div>
        <div className="threeSection standings">
          <div className="text">
            <h2>3. Dan Sales</h2>
            {getPlayerGames("dan")}
          </div>
        </div>
        <div className="threeSection standings">
          <div className="text">
            <h2>4. Jon Lambert</h2>
            {getPlayerGames("jon")}
          </div>
        </div>
        <div className="threeSection standings">
          <div className="text">
            <h2>5. Aaron Whitehead</h2>
            {getPlayerGames("aaron")}
          </div>
        </div>
        <div className="threeSection standings">
          <div className="text">
            <h2>6. Chris Plog</h2>
            {getPlayerGames("chris")}
          </div>
        </div>
        <div className="threeSection standings">
          <div className="text">
            <h2>7. Casey Ambrosius</h2>
            {getPlayerGames("casey")}
          </div>
        </div>
        <div className="threeSection standings">
          <div className="text">
            <h2>8. Rahul Verma</h2>
            {getPlayerGames("rahul")}
          </div>
        </div>
        <div className="threeSection standings">
          <div className="text">
            <h2>9. Jacob Hewitt</h2>
            {getPlayerGames("jacob")}
          </div>
        </div>
        <div className="threeSection standings">
          <div className="text">
            <h2>10. Jared Bursik</h2>
            {getPlayerGames("jared")}
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

export default connect(mapStateToProps)(standings2017);
