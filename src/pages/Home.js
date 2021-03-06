import React from "react";
import { Link } from "react-router-dom";
import Afbeelding from "../assets/afbeelding.jpeg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Afbeelding})` }}>
      <div className="headerContainer">
        <h1>Hinzen bestratingen</h1>
        <p>Welkom op onze website</p>
        <Link to="/gallery">
          <button>Bekijk onze werken</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
