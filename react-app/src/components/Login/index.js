import React from "react";
import "./style.css";


export function Login() {
  return (
<div className="wrapper fadeInDown">
  <div id="formContent">
    

    <div className="fadeIn first">
      <img src="https://piskel-imgstore-b.appspot.com/img/f86d1082-5f00-11ea-95bd-2b8516267d01.gif" id="icon" alt="User Icon" />
    </div>

    
    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

    
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
  );
}

export default Login;