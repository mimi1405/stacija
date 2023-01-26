import React from "react";
import { BsInstagram } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import {BsDiscord} from 'react-icons/bs'
import TypeWriter from "typewriter-effect";
import Footer from "../components/Footer";
import '../Styles/Kontakt.css'

export default function Kontakt() {
  return (
    <>
      <section id="contact-container">
        <div className="writer-wrapper">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter.typeString("Hier findest du mich! :)").start();
            }}
          />
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/stazzzija/">
            <BsInstagram className="contact-icon" />
          </a>
          <a href="mailto:anastasija.lukic@mail.ch">
            <TfiEmail className="contact-icon" />
          </a>
          <a href="https://discord.com/users/#4715">
            <BsDiscord className="contact-icon" />
          </a>
        </div>
      </section>
      <Footer/>
    </>
  );
}
