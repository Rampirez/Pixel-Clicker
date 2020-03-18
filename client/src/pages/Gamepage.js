import React, { Component } from "react";
import ToggleBox from "./../components/ToggleBox";
import Vehicles from "./../components/Vehicles";

class Gamepage extends Component {
  render() {
    return (
      <div>
        <ToggleBox title="Show Game">
          <Vehicles />
        </ToggleBox>{" "}
      </div>
    );
  }
}

export default Gamepage;
