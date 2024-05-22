import React from "react";
import "./style.css";
function Header() {
  return (
    <div>
      {" "}
      <header>
        <h3>FOODLY</h3>
        <nav>
          <a href="#">Home</a>
          <a href="#">FOOD & DRINKS</a>
          <a href="#">TESTIMONIALS</a>
          <a href="#">NEWS</a>
          <a href="#" id="join-us-link">
            JOIN US
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
