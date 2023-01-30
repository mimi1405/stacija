import React, { useState } from "react";
import "../Styles/UeberMich.css";
import TypeWriter from "typewriter-effect";
import VideoBG from "../components/Video/VideoBG";
import Image from "../assets/StacyNormal.png";
import Stripe from "../components/Stripe/Stripe";
import Dots from "../assets/dots.mp4";
import GatewayVideoMobile from "../assets/gatewayvid_Mobile.mp4";
import GatewayVideoDesktop from "../assets/gatewayvid_Desktop.mp4";
import RussianSeat from "../assets/me222.jpg";
import RussianSeatTwo from "../assets/me222otherversion.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdFindInPage } from "react-icons/md";
import Skelet from "../components/SkeletonLoader/Skelet";

export default function UeberMich() {
  const [isLoading, setIsLoading] = useState(true);

  function checkDevice() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return GatewayVideoMobile;
    } else {
      return GatewayVideoDesktop;
    }
  }
  return (
    <div style={{ maxWidth: "100vw" }}>
      <section id="hello">
        <div className="hello-container">
          <div className="sayHi">
            <TypeWriter
              options={{
                strings: [
                  "Hello!",
                  "Hi!",
                  "Zdravo!",
                  "Hola!",
                  "Salut!",
                  "Grüezi!",
                  "Bongiorno!",
                  "Привет!",
                  "Hej!",
                  "Merhaba!",
                  "Hei!",
                  "Bonjour!",
                  "Hey!",
                  "Welcome!",
                  "مرحبًا",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h1>
            Ich bin <span id="name">Anastasija Lukic.</span>
          </h1>
        </div>
      </section>
      <section id="hello">
        <div className="description-container">
          <p>
            Ich lebe in der <br /> Schweiz und mache eine Ausbildung als
            Graphikerin in Zürich.
            <br /> Zurzeit beschäftige ich mich <br /> mit 3D - Render und{" "}
            <br />
            Fashion Design.
          </p>
        </div>
      </section>
      <section id="hello">
        <VideoBG source={Dots} />
        <div className="image-wrapper">
          {isLoading && <Skelet seperations={1} />}
          <img src={Image} onLoad={() => setIsLoading(false)} />
        </div>
      </section>
      <section>
        <Stripe />
      </section>
      <section id="hello" className="about">
        <div className="aboutMe">
          <div className="image">
            <a href="https://www.instagram.com/stazzzija/">
              {isLoading && <Skelet seperations={1} />}
              <img onLoad={() => setIsLoading(false)} className="card" />
            </a>
          </div>
          <div className="text">
            <p>
              Ich bin eine 17-jährige Künstlerin mit lockigem Haar und einer
              positiven Ausstrahlung. Viele nennen mich bei meinem
              Künstlernamen, Stacija. Mit mir kann man in einer angenehmen
              Atmosphäre kreative Projekte kreieren. Sieh dir meine Skills an!
            </p>
            <Link to="/skills" id="skill-route">
              <div className="skills-route-btn">
                <p>Zu den Skills</p>
                <MdFindInPage />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="hello">
        <VideoBG source={checkDevice()} />
      </section>
      <Footer />
    </div>
  );
}
