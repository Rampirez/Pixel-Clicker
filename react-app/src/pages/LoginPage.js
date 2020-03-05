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
            0: "https://cdn1.iconfinder.com/data/icons/miscellaneous-43/48/ghost-512.png" /* You can pass as many images as you want */,
            1: "https://lh3.googleusercontent.com/proxy/sllv6MMqAXvqT0OQBewhoY0nDGIRktJPlDMjhBpWAJdtuizIqj-ny4V7fB4imZL7YljySjMw-jq-Un49Nyd5Qm3vQaHV-LzyOiIMpKFOAGmbCsX70Dl3Sw",
            2: "https://i.dlpng.com/static/png/6462980_preview.png",
            3: "https://www.pngkit.com/png/full/661-6613192_freetoedit-cute-kawaii-pixel-pastel-rose-jfashion-png.png",
            4: "https://lh3.googleusercontent.com/proxy/jnkxJilt9T_p5C08cVJdSwXPTzo7R2SsbabkLDmPienVuGwum01NvihH7CfCKBJK8tcohkfF1LsmaCsWMFJbjAPGPg",
            5: "https://25.media.tumblr.com/a9a32e3a1110245055adf31838a1c0f4/tumblr_mtsqeujax01rni86yo1_500.gif",
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
