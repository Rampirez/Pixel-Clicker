import React from "react";

function GameButtons(props) {

    return(
        
        <img src={props.url} alt="anime girl" id={props.id}
            onClick={() => props.handleClick(props.id)}>
            
        </img>
    )
}

export default GameButtons;