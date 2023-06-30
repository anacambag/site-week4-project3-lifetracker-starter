import * as React from "react";
import "./NavLinks.css";
import { Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <div className="nav-links">
      <Link to="/activity">
        <a className="chakra-link css-74uit1">
          Activity
        </a>
      </Link>

      <Link to="/exercise">
        <a className="chakra-link css-74uit1" >
          Exercise
        </a>
      </Link>

      <Link to="/nutrition">
        <a className="chakra-link css-74uit1">
          Nutrition
        </a>
      </Link>

      <Link to="/sleep">
        <a className="chakra-link css-74uit1">
          Sleep
        </a>
      </Link>
    </div>
  );
}
