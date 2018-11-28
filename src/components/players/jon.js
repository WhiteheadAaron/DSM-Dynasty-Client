import React from "react";
import { connect } from 'react-redux';
import Header from "../header";


function Jon (props) {
  function getPlayerGames(player) {

    let played = 0;
    let wins = 0;
    let losses = 0;
    let pointsFor = 0;
    let pointsAgainst = 0;    
    let newArray = props.games;

    
    newArray.forEach(item => {
      
      if (item.player1 === player) {
        
        played = played + 1;
        pointsAgainst = pointsAgainst + item.p2Points;
        pointsFor = pointsFor + item.p1Points;
        
        if (item.p1Points > item.p2Points) {
          console.log('test')
          wins = wins + 1;
        }
        if (item.p2points > item.p1Points) {
          console.log('test2');
          losses = losses + 1;
        }
      }
      if (item.player2 === player) {
        console.log('goodbye');
        played = played + 1;
        pointsAgainst = pointsAgainst + item.p1Points;
        pointsFor = pointsFor + item.p2Points;
        if (item.p2points > item.p1Points) {
          wins = wins + 1;
        }
        else {
          losses = losses + 1;
        }
      }
    })

    return {
      played,
      wins,
      losses,
      pointsFor,
      pointsAgainst
    }
  }

  let myObj = getPlayerGames("jon");

  return (
    <div>
      <Header />
      <h1>Jon Page</h1>
      <h2>Wins: {myObj.wins}</h2>
      <h2>Losses: {myObj.losses}</h2>
      <h2>Points For: {myObj.pointsFor}</h2>
      <h2>Points Against: {myObj.pointsAgainst}</h2>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    games: state.gamesReducer.games
  };
}

export default connect(mapStateToProps)(Jon);
