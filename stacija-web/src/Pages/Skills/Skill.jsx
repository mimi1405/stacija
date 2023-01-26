import React from "react";
import "../../Styles/Skills.css";

export default function Skill({ skill, icon, link }) {
  return (
    <>
      <a href={link}>
        <div className="skill">
          <div className="skill-icon">{icon}</div>
          <p className="skill-subtitle">{skill}</p>
        </div>
      </a>
    </>
  );
}
