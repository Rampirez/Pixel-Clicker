import React from "react";
import "./style.css";

export function Nav() {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg navbar-light justify-content-between">
      <a className="navbar-brand" href="#">
        Pixel Clicker
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="gamepage">
              Game
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="leaderboard">
              Leaderboard
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li>
            <iframe width="100%" height="50" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/598897581&color=%23bf7e79&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;