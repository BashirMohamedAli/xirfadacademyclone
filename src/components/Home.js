import React from "react";
import "./Navbar.css";
import launch from "./img/launch.png";

function Home() {
  return (
    <div className="section">
      <div className="col1">
        <img src={launch} className="launch" />
      </div>
      <div className="col2">
        <h1>
          School for thinkers <br /> and designers 🚀
        </h1>
        <p>
          Digital age is here, learn the most important <br /> skills online 🎉
        </p>
      </div>
    </div>
  );
}

export default Home;
