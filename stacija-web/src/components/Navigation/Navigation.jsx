import React from "react";
import { useState } from "react";
import "../../Styles/Navigation.css";
import "../../fonts/AlfaSlabOne/AlfaSlabOne.ttf";
import "../../fonts/Monoton/Monoton-Regular.ttf";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <RxHamburgerMenu
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
      className="hamburger"
    />
  );
  const closeIcon = (
    <AiOutlineClose
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
      className="hamburger"
    />
  );
  const closeMobileMenu = () => setOpen(false);

  function close() {
    if (open === true) {
      setOpen(!open);
    } else {
      null;
    }
  }

  return (
    <div className="navigation">
      <div className="symbols">
        <Link to="/" onClick={() => close()}>
          STACIJA
        </Link>
        {open ? closeIcon : hamburgerIcon}
      </div>
      {open && <Navbar isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
}
