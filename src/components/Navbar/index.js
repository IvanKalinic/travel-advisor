import React, { useRef, useState, useEffect, useCallback } from "react";
import "./index.scss";
import { Autocomplete } from "@react-google-maps/api";
import { Bars, CloseIcon, SearchIcon } from "../../assets/icons/index";
import { navs } from "../../const";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("Home");
  const ref = useRef();

  const toggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 730) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    const onBodyClicked = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      if (isOpen && event.target.tagName.toUpperCase() == "INPUT") {
        return;
      } else {
        toggle();
      }
      if (!isOpen) {
        return;
      }
    };

    document.body.addEventListener("click", onBodyClicked, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClicked);
    };
  }, [isOpen, toggle]);

  return (
    <div className={!isOpen ? "navbar-container" : "navbar-container ham"}>
      <div>
        <Link className="logo" to="/">
          Logo
        </Link>
      </div>
      <div className={!isOpen ? "menu-container" : "hamburger"}>
        <ul>
          {navs.map((nav, index) => {
            return (
              <li>
                <Link
                  to={nav.path}
                  className={nav.name === currentTab ? "tabs active" : "tabs"}
                  key={index}
                  onClick={() => setCurrentTab(nav.name)}
                >
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="searchbar-container">
        <input type="text" placeholder="Search..." />
        <div className="icon">
          <SearchIcon />
        </div>
      </div>
      <div className="menu-bars" ref={ref}>
        {!isOpen ? <Bars onClick={toggle} /> : <CloseIcon onClick={toggle} />}
      </div>
    </div>
  );
};

export default Navbar;
