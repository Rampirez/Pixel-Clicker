import React from "react";
import "./style.css";

export function Leaderboard() {
  return (
    <div className="wrapper fadeInDown">
        <div id="formContent">
        <h1 className= "fadeIn first">Leaderboard</h1>
        <ol>
            <li>Player 1</li>
            <hr></hr>
            <li>Player 2</li>
            <hr></hr>
            <li>Player 3</li>
        </ol>
        </div>
    </div>
  );
}

export default Leaderboard;