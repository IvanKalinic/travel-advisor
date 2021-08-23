import React, { useState } from "react";
import "./index.scss";
import { Autocomplete } from "@react-google-maps/api";
import { SearchIcon } from "../../assets/icons/index";

const Navbar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="navbar-container">
      <div className="logo">Logo</div>
      <div class="menu-container">
        <ul>
          <li>Home</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="searchbar-container">
        <input type="text" placeholder="Search..." />
        <div className="icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
