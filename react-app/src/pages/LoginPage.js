import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./../components/Login";
import Sky from "react-sky";

class LoginPage extends Component {
  render() {
    return (
      <div>
        
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://cdn.pixabay.com/photo/2016/03/31/20/40/baby-1295959_960_720.png" /* You can pass as many images as you want */,
            1: "https://cdn.discordapp.com/attachments/628743072334872630/685276679303987254/Flower336.png",
            2: "https://cdn.discordapp.com/attachments/628743072334872630/685276641139621896/Cherry336.gif",
            3: "https://www.pngkit.com/png/full/661-6613192_freetoedit-cute-kawaii-pixel-pastel-rose-jfashion-png.png",
            4: "https://cdn.discordapp.com/attachments/628743072334872630/685276601503842324/Heart336.gif",
            5: "https://cdn.discordapp.com/attachments/628743072334872630/685276641139621896/Cherry336.gif"
          }}
          how={
            160
          } /* Pass the number of images Sky will render chosing randomly */
          time={300} /* time of animation */
          size={"100px"} /* size of the rendered images */
          background={"palettedvioletred"} /* color of background */
        />
        <Login />
        
      </div>
    );
  }
}

export default LoginPage;
