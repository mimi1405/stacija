import React from "react";
import { useEffect } from "react";
import "../../fonts/Monoton/Monoton-Regular.ttf";
import { Link } from "react-router-dom";
import UeberMich from "../../Pages/UeberMich";

export default function Navbar(props) {
  useEffect(() => {
    for (const link of document.getElementsByClassName("link")) {
      link.onmousemove = (e) => {
        const decimal = e.clientX / link.offsetWidth;

        const basePercent = 80,
          percentRange = 20,
          adjustablePercent = percentRange * decimal;

        const lightRedPercent = basePercent + adjustablePercent;

        link.style.setProperty("--light-red-percent", `${lightRedPercent}%`);
      };
    }
  }, []);
  return (
    <div className="container">
      <Link
        to="/"
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className="link"
      >
        <p>Über mich</p>
      </Link>
      <Link
        to="projekte"
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className="link"
      >
        <p>Projekte</p>
      </Link>
      <Link
        to="kontakt"
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className="link"
      >
        <p>Kontakt</p>
      </Link>
      <Link
        to="/shop"
        onClick={() => props.isMobile && props.closeMobileMenu()}
        className="link"
      >
        <p>Shop</p>
      </Link>
    </div>
  );
}
