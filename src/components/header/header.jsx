import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <p>Star DB</p>
      </h3>
      <ul className="d-flex">
        <li>
          <p>People</p>
        </li>
        <li>
          <p>Planets</p>
        </li>
        <li>
          <p>Starships</p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
