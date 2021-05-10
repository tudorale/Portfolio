import React from "react";
import "../style/css/main.css";
import OnlyLearn from "../images/onlylearn.jpg";
import JustType from "../images/justtype.jpg";
import Scorpion from "../images/scorpion.jpg";
import Portfolio from "../images/portfolio.jpg";
import Frozo from "../images/frozo.jpg";
import DashBoard from "../images/dashboard.jpg";
import { Link } from "react-router-dom";
import Project from "./services/Project";

function AllProjects() {
  return (
    <>
      <div className="allProjects__wrapper">
        <div className="allProjects__nav">
          <Link to="/" className="nav__logo">
            Tudor Alexandru
          </Link>
          <ul className="nav__links">
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
          </ul>
        </div>
        <div className="allProjects__hero">
          <h1>Tudor Alexandru's open source projects</h1>
          <p>
            All the projects are explained in detail on{" "}
            <a
              href="https://github.com/tudorale"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>Please scroll</p>
        </div>
        <div className="allProjects__grid">
          <Project
            image={JustType}
            repo="https://github.com/tudorale/justtype"
            title="JustType"
            description="JustType is a competitive platform for typists, where you can improve your typing speed by taking tests on different categories and gain points by taking tests to join into the top."
            website="https://tudorale.gihub.io/justtype"
            maintained="yes"
            application="yes"
            react="yes"
          />

          <Project
            image={OnlyLearn}
            repo="https://github.com/tudorale/onlylearn"
            title="OnlyLearn"
            description="OnlyLearn, a free platform where you can learn Web Development for free with more than 60 lessons in HTML5, CSS3 & Responsive Design, and a text editor where you can practice."
            website="https://only-learn-3ff6b.web.app/"
            maintained="kinda"
            application="yes"
            react="yes"
          />

          <Project
            image={Scorpion}
            repo="https://github.com/tudorale/scorpion-theme"
            title="Scorpion Theme"
            description="Scorpion is a professional and a looking good dark theme for Visual Studio Code, with three main colors for your editor that will make you relaxed."
            website="https://marketplace.visualstudio.com/items?itemName=TudorAlexandru.scorpion"
            maintained="yes"
            extension="yes"
          />

          <Project
            image={Portfolio}
            repo="https://github.com/tudorale/portfolio"
            title="Portfolio"
            description="Personal portfolio where you can find more about me, all my big open source projects, my skills and you can contact me by filling a form."
            website="https://tudorale.gihub.io/portfolio"
            maintained="yes"
            landing="yes"
            react="yes"
          />

          <Project
            image={Frozo}
            repo="https://github.com/tudorale/frozo"
            title="Frozo"
            description="Frozo is a streetwear brand, made by me and my friend, who is imprinting photos into clothes, this website is the landing page for this idea."
            website="https://tudorale.gihub.io/frozo"
            maintained="kinda"
            landing="yes"
            react="yes"
          />

          <Project
            image={DashBoard}
            repo="https://github.com/tudorale/dashboard"
            title="Dashboard"
            description='A dashboard for a non-existen company, the data is hard-coded, try using the password and username "admin" for access to the To-do system.'
            website="https://tudorale.gihub.io/dashboard"
            maintained="no"
            application="yes"
            react="yes"
          />
        </div>
      </div>
    </>
  );
}

export default AllProjects;
