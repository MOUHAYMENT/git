import React from "react";
import "./styles.css";

function Nav() {
  return (
    <div id="Nav">
      <h1>Akel</h1>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">PORTFOLIO</a>
        </li>
        <li>
          <a href="#">SERVICE</a>
        </li>
        <li>
          <a href="#">PAGES</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a id="contact" href="#">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
