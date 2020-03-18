import React, { Component } from "react";
import gbuttons from "./buttons.json";
import GameButtons from "./GameButtons.js";

class Vehicles extends Component {
  state = {
    gbuttons,
    gbutton: {},
    score: 0,
    randomNum:0
  };


  handleClick = (id, x) => {
    //var photo = [false, false, false, false, false, false, false, false, false, false];
    console.log("Have a nice day!");
    this.state.score++;
    console.log(this.state.score);
    //add point
    //database point
    this.random();
    this.buttonGen();
  };

  random(){
    this.state.randomNum = Math.floor(Math.random() * 3);
    console.log("So random xddd :" +this.state.randomNum);

  }

  buttonGen(){
       this.setState({
           gbutton: gbuttons[this.state.randomNum]
       });

  }


  render() {
    this.random();


    return (
      <div>
        
        <GameButtons            
        url={this.state.gbutton.url}
        id={this.state.gbutton.id}
        key={this.state.gbutton.key}
        handleClick={this.handleClick}></GameButtons>
         
       

        <div>
          <img
            src="https://cdn.discordapp.com/attachments/680859704276156426/683394299169210368/waifuThumbsup.gif"
            alt="waifu"
          ></img>{" "}
        </div>
        <div>Points:</div>

        <div></div>
      </div>
    );
  }
}

export default Vehicles;
