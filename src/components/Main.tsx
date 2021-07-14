import React, { useState, useEffect, useRef } from "react";
import "../style/css/main.css";
import OnlyLearn from "../images/onlylearn.jpg";
import TypingHub from "../images/typinghub.jpg";
import { Power3, TweenLite, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import moment from 'moment';

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const [emailStatus, setEmailStatus] = useState<string>("");
  const [experienceYear, setExperienceYear] = useState<string | number>("");

  useEffect(() => {
    setExperienceYear(moment([2019]).fromNow(true));
  }, []);

  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // animations
  let header: any = useRef(null);
  let image: any = useRef(null);
  let logo: any = useRef(null);
  let button: any = useRef(null);
  let scroll: any = useRef(null);

  let l1: any = useRef(null);
  let l2: any = useRef(null);
  let l3: any = useRef(null);
  let l4: any = useRef(null);

  let main: any = useRef(null);

  let work: any = useRef(null);
  let info1: any = useRef(null);
  let image1: any = useRef(null);

  let info2: any = useRef(null);
  let image2: any = useRef(null);
  let paragraph: any = useRef(null);

  let skills: any = useRef(null);
  let box1: any = useRef(null);

  let about: any = useRef(null);
  let part1: any = useRef(null);
  let part2: any = useRef(null);

  let hire: any = useRef(null);
  let hireBox: any = useRef(null);

  let ham: any = useRef(null);

  useEffect(() => {
    TweenLite.to(main.current, 0, { css: { visibility: "visible" } });

    TweenLite.from(logo.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenLite.from(l1.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.5,
    });
    TweenLite.from(l2.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.6,
    });
    TweenLite.from(l3.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.7,
    });
    TweenLite.from(l4.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.8,
    });
    TweenLite.from(image.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.8,
    });
    TweenLite.from(header.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 1,
    });
    TweenLite.from(button.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 1.1,
    });
    TweenLite.from(scroll.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 1.2,
    });
    TweenLite.from(ham.current, 0.7, {
      opacity: 0,
      y: 30,
      ease: Power3.easeOut,
      delay: 0.5,
    });

    gsap.fromTo(
      work.current,
      { autoAlpha: 0 },
      {
        duration: 0.9,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: work.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      info1.current,
      { autoAlpha: 0 },
      {
        duration: 0.8,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: info1.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      image1.current,
      { autoAlpha: 0 },
      {
        duration: 0.8,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: image1.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      info2.current,
      { autoAlpha: 0 },
      {
        duration: 0.8,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: info2.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      image2.current,
      { autoAlpha: 0 },
      {
        duration: 0.8,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: image2.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      paragraph.current,
      { autoAlpha: 0 },
      {
        duration: 0.8,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: paragraph.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      skills.current,
      { autoAlpha: 0 },
      {
        duration: 0.8,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: skills.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      box1.current,
      { autoAlpha: 0 },
      {
        duration: 0.7,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: box1.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      about.current,
      { autoAlpha: 0 },
      {
        duration: 0.8,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: about.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      part1.current,
      { autoAlpha: 0 },
      {
        duration: 0.7,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: part1.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      part2.current,
      { autoAlpha: 0 },
      {
        duration: 0.7,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: part2.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      hire.current,
      { autoAlpha: 0 },
      {
        duration: 0.7,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: hire.current,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      hireBox.current,
      { autoAlpha: 0 },
      {
        duration: 0.7,
        autoAlpha: 1,
        ease: Power3.easeIn,
        scrollTrigger: {
          trigger: hireBox.current,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  let mobileStatus: boolean = false;

  const handleMobile = () => {
    mobileStatus = !mobileStatus;

    const list = document.querySelector(".links") as HTMLUListElement;
    const line1 = document.querySelector(".line1") as HTMLDivElement;
    const line2 = document.querySelector(".line2") as HTMLDivElement;
    const line3 = document.querySelector(".line3") as HTMLDivElement;
    const addon = document.querySelector(".addon") as HTMLDivElement;
    const links = document.querySelectorAll(".link")!;
    const hamburger = document.querySelector(".hamburger") as HTMLDivElement;

    if (mobileStatus) {
      addon.style.zIndex = "123";
      addon.style.opacity = ".47";

      list.classList.add("mobileUL");

      links.forEach((t) => {
        t.classList.add("mobileLink");
      });

      hamburger.classList.add("active");

      line1.style.backgroundColor = "black";
      line3.style.backgroundColor = "black";

      line2.style.transform = "translateX(-70px)";
      line2.style.opacity = "0";

      line1.style.transform = "rotate(-45deg)";
      line3.style.transform = "rotate(45deg)";
      line3.style.marginTop = "-13px";
    } else {
      if (hamburger) {
        hamburger.classList.remove("active");
        line1.style.backgroundColor = "white";
        line3.style.backgroundColor = "white";

        line2.style.transform = "translateX(0)";
        line2.style.opacity = "1";

        line1.style.transform = "rotate(0deg)";

        line3.style.transform = "rotate(0deg)";
        line3.style.marginTop = "7px";

        list.classList.remove("mobileUL");
        links.forEach((t) => {
          t.classList.remove("mobileLink");
        });

        addon.style.zIndex = "-1";
        addon.style.opacity = "0";
      }
    }
  };

  const handleExit = () => {
    mobileStatus = !mobileStatus;

    const list = document.querySelector(".links") as HTMLUListElement;
    const line1 = document.querySelector(".line1") as HTMLDivElement;
    const line2 = document.querySelector(".line2") as HTMLDivElement;
    const line3 = document.querySelector(".line3") as HTMLDivElement;
    const addon = document.querySelector(".addon") as HTMLDivElement;
    const links = document.querySelectorAll(".link")!;
    const hamburger = document.querySelector(".hamburger") as HTMLDivElement;

    if (list) {
      list.classList.remove("mobileUL");
      links.forEach((t) => {
        t.classList.remove("mobileLink");
      });
      addon.style.zIndex = "-1";
      addon.style.opacity = "0";
      hamburger.classList.remove("active");
      line1.style.backgroundColor = "white";
      line3.style.backgroundColor = "white";

      line2.style.transform = "translateX(0)";
      line2.style.opacity = "1";

      line1.style.transform = "rotate(0deg)";

      line3.style.transform = "rotate(0deg)";
      line3.style.marginTop = "7px";
    }
  };

  const handleFocus = (label: string, pxUp: string): void => {
    let l = document.querySelector<HTMLElement>(`${label}`)!;

    if (l) {
      l.style.top = `${pxUp}`;
      l.style.fontSize = ".9rem";
    }
  };

  const handleBlur = (input: string, label: string, pxDown: string): void => {
    let l = document.querySelector<HTMLElement>(`${label}`)!;
    let i = document.querySelector<HTMLInputElement>(`${input}`)!.value;
    if (l) {
      if (i === "") {
        l.style.top = `${pxDown}`;
        l.style.fontSize = "1.05rem";
      } else {
        return;
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let l1 = document.querySelector<HTMLElement>(`.nameLabel`)!;
    let l2 = document.querySelector<HTMLElement>(`.emailLabel`)!;
    let l4 = document.querySelector<HTMLElement>(`.messageLabel`)!;
    let loading = document.querySelector<HTMLElement>(".loading")!;

    if (loading) {
      loading.style.opacity = "1";
    }
    emailjs
      .sendForm(
        "service_t905imd",
        "template_7v6j319",
        e.target,
        "user_eBPDRrNR92trQmc95skaP"
      )
      .then(
        () => {
          e.target.reset();
          setEmailStatus(
            "Your email has been sent, as soon as I can I will respond. Thank you!"
          );
          loading.style.opacity = "0";
          l1.style.top = "40px";
          l2.style.top = "40px";
          l4.style.top = "30px";
          l1.style.fontSize = "1.1rem";
          l2.style.fontSize = "1.1rem";
          l4.style.fontSize = "1.1rem";
        },
        () => {
          loading.style.opacity = "0";
          setEmailStatus(
            "Something went wrong, try again or check the inputs."
          );
        }
      );
  };

  return (
    <>
      <div className="addon" onClick={handleExit}></div>
      <div className="main" ref={main}>
        <div className="nav">
          <div ref={logo}>
            <Link to="/" className="logo">
              Tudor Alexandru
            </Link>
          </div>

          <ul className="links">
            <HashLink to="#work" className="link">
              <li ref={l1}>My work</li>
            </HashLink>
            <HashLink to="#skills" className="link">
              <li ref={l2}>My skills</li>
            </HashLink>
            <HashLink to="#about" className="link">
              <li ref={l3}>About me</li>
            </HashLink>
            <HashLink to="#hire" className="link">
              <li ref={l4}>Hire me</li>
            </HashLink>
          </ul>

          <div className="hamburger" ref={ham} onClick={handleMobile}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>

        <div className="hero">
          <h1 ref={header}>I create beautiful websites with my hands</h1>
          <HashLink to="#hire">
            <button ref={button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mail"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#6f32be"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="10" y1="14" x2="21" y2="3" />
                <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              <p>Contact me</p>
            </button>
          </HashLink>

          <svg
            ref={scroll}
            className="scroll"
            width="40"
            height="77"
            viewBox="0 0 40 77"
          >
            <g id="scrollCircle" transform="translate(-253 -787)">
              <g
                id="Rectangle_12"
                transform="translate(253 787)"
                fill="none"
                stroke="#fff"
                strokeWidth="4"
              >
                <rect width="40" height="77" rx="20" stroke="none"></rect>
                <rect
                  x="2"
                  y="2"
                  width="36"
                  height="73"
                  rx="18"
                  fill="none"
                ></rect>
              </g>
              <circle
                className="circle"
                id="Ellipse_1"
                cx="11"
                cy="11"
                r="11"
                transform="translate(262 798)"
                fill="#fff"
              ></circle>
            </g>
          </svg>

          {/* keyboard ilustration (rights are reserved)*/}

          <svg
            ref={image}
            viewBox="7.426 -6.6 495.049 207.92"
            className="keyboard"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              style={{ fill: "rgb(74, 23, 155)" }}
              x="24.166"
              y="2.917"
              width="467.821"
              height="179.868"
              rx="11"
              ry="11"
            />
            <rect
              style={{ fill: "rgb(232, 232, 232)" }}
              className="wrapper"
              x="16.914"
              y="10.634"
              width="467.821"
              height="179.868"
              rx="11"
              ry="11"
            />

            <rect
              style={{ fill: "rgb(45, 138, 204)" }}
              className="key keyAnimation"
              x="29.289"
              y="23.841"
              width="40.429"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="94.359"
              y="23.841"
              width="48.463"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="153.986"
              y="23.841"
              width="48.463"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="213.923"
              y="24.723"
              width="48.463"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="273.957"
              y="25.783"
              width="48.463"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="334.358"
              y="25.783"
              width="48.463"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="395.346"
              y="25.665"
              width="70.957"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="28.399"
              y="64.531"
              width="84.983"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="123.471"
              y="64.531"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="182.526"
              y="65.413"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="242.597"
              y="66.473"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "rgb(45, 138, 204)" }}
              className="key keyAnimation"
              x="301.87"
              y="66.473"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="147.882"
              y="93.554"
              width="47.735"
              height="27.228"
              rx="5"
              ry="5"
              transform="matrix(0.999979, 0.006511, 0, 1.000021, 271.143616, -27.330996)"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="360.899"
              y="66.802"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "rgb(45, 138, 204)" }}
              className="key keyAnimation"
              x="151.595"
              y="107.629"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="211.666"
              y="107.689"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="270.939"
              y="107.689"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="245.016"
              y="93.554"
              width="79.089"
              height="27.228"
              rx="5"
              ry="5"
              transform="matrix(0.999979, 0.006511, 0, 1.000021, 143.081161, 13.252908)"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="329.968"
              y="108.018"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="30.034"
              y="105.931"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="89.615"
              y="106.931"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="151.338"
              y="149.539"
              width="191.232"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="29.777"
              y="149.841"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="89.358"
              y="149.841"
              width="48.493"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "white" }}
              className="key"
              x="352.166"
              y="149.01"
              width="50.968"
              height="27.228"
              rx="5"
              ry="5"
            />
            <rect
              style={{ fill: "rgb(45, 138, 204)" }}
              className="key keyAnimation"
              x="413.272"
              y="148.835"
              width="52.618"
              height="27.228"
              rx="5"
              ry="5"
            />
          </svg>
        </div>

        <h1 id="work" ref={work}>
          My work
        </h1>

        <div className="portfolio">
          <div className="card card1">
            <div className="info" ref={info2}>
              <h1 className="info_title">TypingHub</h1>
              <p className="info_content">
                This is my lastest project in React JS, it is a competitive
                platform for typists, it has an authentication system and there
                you can learn to improve your typing speed, I am storing the
                data using Firestore and on your profile you can see it, the
                project is still in development.{" "}
              </p>
              <h1 className="info_tech">Technologies</h1>

              <div className="technologies techMore">
                <div className="tech">React JS</div>
                <div className="tech">TypeScript</div>
                <div className="tech">SCSS</div>
                <div className="tech">Firebase</div>
                <div className="tech lastTech">APIs Integration</div>
              </div>

              <div className="buttons">
                <a
                  href="https://tudorale.github.io/typinghub/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={{ marginLeft: "0px" }}>Website</button>
                </a>
                <a
                  href="https://github.com/tudorale/typinghub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Github</button>
                </a>
              </div>
            </div>
            <a
              href="https://tudorale.github.io/typinghub/#/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="image" ref={image2}>
                <img src={TypingHub} alt="" className="card_image" />
              </div>
            </a>
          </div>

          <div className="card card2">
            <div className="info" ref={info1}>
              <h1 className="info_title">OnlyLearn</h1>
              <p className="info_content">
                This is a learning platform where you can learn Web Development
                for free, it has over 60 lessons in HTML5 and CSS3, with
                authentication system and an online text editor.
              </p>
              <h1 className="info_tech">Technologies</h1>

              <div className="technologies">
                <div className="tech">React JS</div>
                <div className="tech">Firebase</div>
                <div className="tech">CSS3</div>
              </div>

              <div className="buttons">
                <a
                  href="https://only-learn-3ff6b.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button style={{ marginLeft: "0px" }}>Website</button>
                </a>
                <a
                  href="https://github.com/tudorale/onlylearn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Github</button>
                </a>
              </div>
            </div>
            <a
              href="https://only-learn-3ff6b.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="image" ref={image1}>
                <img src={OnlyLearn} alt="" className="card_image" />
              </div>
            </a>
          </div>

          <Link to="/projects" className="more" ref={paragraph}>
            <button>All Projects</button>
          </Link>
        </div>

        <h1 id="skills" ref={skills}>
          My skills
        </h1>

        <div className="skills" ref={box1}>
          <div className="frontend">
            <h1>Front-End Development</h1>
            <p>
              In the Front-End Development field I have {experienceYear} of experience
              in the modern technologies that a developer is using, like React
              JS, React-Redux, TypeScript, JavaScript, Git, SCSS, and more, and I am
              still learning new stuff.
            </p>
          </div>
          <div className="design">
            <h1>UI/UX Design</h1>
            <p>
              I love to design and edit things, from editing photos to websites and more. I am using
              Adobe Photoshop from 2018 and for website design I am using Figma along with other softwares like Gravit Designer.
            </p>
          </div>
        </div>

        <h1 id="about" ref={about}>
          About me
        </h1>

        <p className="part1" ref={part1}>
          First of all, my name is Tudor Alexandru - Ionut and I am from
          România, my passion for Web Development started in July 2019. I
          started with HTML5 and I didn't know so much about this, but I chose
          the Front-End field because I want to show the world what I can do
          with a computer. And now I am doing freelancing on UpWork and living a good life.{" "}
        </p>
        <div className="part2" ref={part2}>
          <div className="content">
            <p>
              After a few months I knew that I am good at what I'm doing,
              actually, from the first page that I made at that time I knew that
              I can do much better. I wasn't like others at start, put some text
              and add a color and that's it, even though I didn't had the
              knowledge at that time to make something bigger, like animations,
              and I don't like to lie myself about my work, I want to make the
              things perfectly and I think I have a special eye for details.
            </p>
          </div>
        </div>

        <h1 id="hire" ref={hire}>
          Hire me
        </h1>

        <div className="hire" ref={hireBox}>
          <div className="innerHire">
            <p>
              Do you have an idea that will make you a millionare but you need a
              website? Or you have a company that needs another man in the team?{" "}
              <span>I'm here!</span>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="nameWrapper">
                <label htmlFor="name" className="nameLabel label">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  onBlur={() => handleBlur(".name", ".nameLabel", "40px")}
                  onFocus={() => handleFocus(".nameLabel", "12px")}
                  className="name"
                  id="name"
                  name="name"
                />
              </div>

              <div className="emailWrapper">
                <label htmlFor="email" className="emailLabel label">
                  Your email
                </label>
                <input
                  type="email"
                  required
                  onBlur={() => handleBlur(".email", ".emailLabel", "40px")}
                  onFocus={() => handleFocus(".emailLabel", "12px")}
                  className="email"
                  id="email"
                  name="email"
                />
              </div>

              <div className="messageWrapper">
                <label htmlFor="message" className="messageLabel label">
                  Your message
                </label>
                <textarea
                  className="message"
                  required
                  onBlur={() => handleBlur(".message", ".messageLabel", "35px")}
                  onFocus={() => handleFocus(".messageLabel", "13px")}
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#6f32be"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                  <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
                <span>Send email</span>
              </button>
            </form>

            <div className="loading"></div>
            <p className="emailStatus">{emailStatus}</p>
          </div>
        </div>

        <div className="footer">
          <p>Ⓒ {moment().format("yyyy")} Tudor Alexandru</p>
          <p>Made with love in România</p>
          <div className="icons">
            <a
              href="https://github.com/tudorale"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="github"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#6f32be"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/tudor-alexandru-a503321a3/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="linkedin"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#6f32be"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
