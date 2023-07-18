import Star from "../assets/images/cute_star.png";
//import { useState } from "react";
import "../assets/styles/styles.css";

function Header({ user }) {
  //const [user, setUser] = useState("Joe");

  return (
    <header className="header">
      <img src={Star} alt="logo" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
