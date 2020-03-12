import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Sky from "react-sky";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://media3.giphy.com/media/fo2dhRTmaULbStoFkX/giphy.webp?cid=790b7611941c38216e03aa35de213c65f959a1ce9d7bf3fa&rid=giphy.webp" /* You can pass as many images as you want */,
            1: "https://cdn.discordapp.com/attachments/628743072334872630/685276679303987254/Flower336.png",
            2: "https://cdn.discordapp.com/attachments/628743072334872630/685276641139621896/Cherry336.gif",
            3: "https://www.pngkit.com/png/full/661-6613192_freetoedit-cute-kawaii-pixel-pastel-rose-jfashion-png.png",
            4: "https://cdn.discordapp.com/attachments/628743072334872630/685276601503842324/Heart336.gif",
            5: "https://cdn.discordapp.com/attachments/628743072334872630/685276641139621896/Cherry336.gif",
            6: "https://media3.giphy.com/media/fo2dhRTmaULbStoFkX/giphy.webp?cid=790b7611941c38216e03aa35de213c65f959a1ce9d7bf3fa&rid=giphy.webp"
          }}
          how={
            250
          } /* Pass the number of images Sky will render chosing randomly */
          time={15} /* time of animation */
          size={"100px"} /* size of the rendered images */
          background={"palettedvioletred"} /* color of background */
        />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
