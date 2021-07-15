import React, { useEffect, useRef } from "react";
import "../style/css/main.css";
import OnlyLearn from "../images/onlylearn.jpg";
import TypingHub from "../images/typinghub.jpg";
import Scorpion from "../images/scorpion.jpg";
import Portfolio from "../images/portfolio.jpg";
import Frozo from "../images/frozo.jpg";
import DashBoard from "../images/dashboard.jpg";
import Motes from "../images/motes.jpg";
import { Link, useLocation } from "react-router-dom";
import Project from "./services/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { Power3, TweenLite, gsap } from "gsap";

function AllProjects() {
  // scroll to the top when the location (path) is changing
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, [])

  let main: any = useRef(null);

  let logo:any = useRef(null);
  let link:any = useRef(null);
  let header:any = useRef(null);
  let info:any = useRef(null);
  let indication:any = useRef(null);

  useEffect(() => {
    TweenLite.to(main.current, 0, { css: { visibility: "visible" } });

    TweenLite.from(logo.current, 0.9, {
      opacity: 0,
      y: 30,
      ease: Power3.easeIn,
    });

    TweenLite.from(link.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.2,
    });

    TweenLite.from(header.current, 0.6, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.4,
    });

    TweenLite.from(info.current, 0.6, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.9,
    });

    TweenLite.from(indication.current, 0.6, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 1.3,
    });
  }, [])
  return (
    <>
      <div className="allProjects__wrapper" ref={main}>
        <div className="allProjects__nav">
          <Link to="/" className="nav__logo">
            <span ref={logo}>Tudor Alexandru</span>
          </Link>
          <ul className="nav__links">
            <Link to="/" className="link" ref={link}>
              <li>Home</li>
            </Link>
          </ul>
        </div>
        <div className="allProjects__hero">
          <h1 ref={header}>Tudor Alexandru's open source projects</h1>
          <p ref={info}>
            All the projects are explained in detail on{" "}
            <a
              href="https://github.com/tudorale"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p ref={indication}>Please scroll</p>
        </div>
        <div className="allProjects__grid">
          <div data-aos="fade-up">
            <Project
              image={TypingHub}
              repo="https://github.com/tudorale/typinghub"
              title="TypingHub"
              description="TypingHub is a competitive platform for typists, where you can improve your typing speed by taking tests on different categories and gain points by taking tests to join into the top."
              website="https://tudorale.github.io/typinghub"
              maintained="yes"
              application="yes"
              react="yes"
            />
          </div>
          
          <div data-aos="fade-down">
            <Project
              image={Motes}
              repo="https://github.com/tudorale/motes"
              title="Motes"
              description="Motes is a place where you can keep all your notes in one place, the project started with the idea of a global Notes App as you have on your phone or computer, now you can keep all your notes here and you can access them on every device by going to your mote via a key."
              website="https://tudorale.github.io/motes/#/"
              maintained="yes"
              application="yes"
              react="yes"
            />
          </div>
          
          <div data-aos="fade-right">
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
          </div>
          
          <div data-aos="fade-up">
            <Project
            image={Scorpion}
            repo="https://github.com/tudorale/scorpion-theme"
            title="Scorpion Theme"
            description="Scorpion is a professional and a looking good dark theme for Visual Studio Code, with three main colors for your editor that will make you relaxed."
            website="https://marketplace.visualstudio.com/items?itemName=TudorAlexandru.scorpion"
            maintained="yes"
            extension="yes"
          />
          </div>

          <div data-aos="fade-down">
            <Project
              image={Portfolio}
              repo="https://github.com/tudorale/portfolio"
              title="Portfolio"
              description="Personal portfolio where you can find more about me, all my big open source projects, my skills and you can contact me by filling a form."
              website="https://tudorale.github.io/portfolio"
              maintained="yes"
              landing="yes"
              react="yes"
            />
          </div>
          
          <div data-aos="fade-right">
            <Project
              image={Frozo}
              repo="https://github.com/tudorale/frozo"
              title="Frozo"
              description="Frozo is a streetwear brand, made by me and my friend, who is imprinting photos into clothes, this website is the landing page for this idea."
              website="https://tudorale.github.io/frozo"
              maintained="no"
              landing="yes"
              react="yes"
            />
          </div>
          
          <div data-aos="fade-up">
            <Project
              image={DashBoard}
              repo="https://github.com/tudorale/dashboard"
              title="Dashboard"
              description='A dashboard for a non-existen company, the data is hard-coded, try using the password and username "admin" for access to the To-do system.'
              website="https://tudorale.github.io/dashboard"
              maintained="no"
              application="yes"
              react="yes"
            />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default AllProjects;
