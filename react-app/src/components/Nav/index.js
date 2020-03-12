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
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Game
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Leaderboard
            </a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li>
        <audio className="" src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/RoccoW/RoccoW_-_Singles/RoccoW_-_Nontinde_Vendor_Theme.mp3" autoplay='true' controls>
          <p>
            If you are reading this, it is because your browser does not support
            the audio element.{" "}
          </p>
        </audio>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;