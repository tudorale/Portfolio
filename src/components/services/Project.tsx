import React from "react";
import "../../style/css/main.css";
function Project(props: any) {
  return (
    <div className="project project1">
      <div className="partOne">
        <h1 className="project__title">{props.title}</h1>
        <p className="project__description">{props.description}</p>
        <div className="project__tags">
          {props.maintained === "yes" ? (
            <div className="tag">
              <img
                alt="Maintenance"
                src="https://img.shields.io/maintenance/yes/2022?style=flat-square"
              />
            </div>
          ) : null}
          {props.maintained === "kinda" ? (
            <div className="tag">
              <img
                alt="Maintenance"
                src="https://img.shields.io/maintenance/yes/2025?color=yellow&style=flat-square"
              />
            </div>
          ) : null}
          {props.maintained === "no" ? (
            <div className="tag">
              <img
                alt="Maintenance"
                src="https://img.shields.io/maintenance/no/2021?style=flat-square"
              />
            </div>
          ) : null}

          {props.application === "yes" ? (
            <div className="tag">
              <img
                alt="Application"
                src="https://img.shields.io/badge/type-application-blueviolet?style=flat-square"
              />
            </div>
          ) : null}

          {props.extension === "yes" ? (
            <div className="tag">
              <img
                alt="Extension"
                src="https://img.shields.io/badge/type-extension-informational?style=flat-square"
              />
              <img
                alt="Visual Studio Marketplace Installs - Azure DevOps Extension"
                src="https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/TudorAlexandru.scorpion?style=flat-square"
              ></img>
              <img
                alt="Visual Studio Marketplace Rating (Stars)"
                src="https://img.shields.io/visual-studio-marketplace/stars/tudoralexandru.scorpion?style=flat-square"
              />
            </div>
          ) : null}

          {props.landing === "yes" ? (
            <div className="tag">
              <img
                alt="Landing Page"
                src="https://img.shields.io/badge/type-landing page-orange?style=flat-square"
              />
            </div>
          ) : null}
          {props.react === "yes" ? (
            <div className="tag">
              <img
                alt="React JS"
                src="https://img.shields.io/badge/framework-react js-ff69b4?style=flat-square"
              />
            </div>
          ) : null}
        </div>
        <div className="project__buttons">
          <a href={props.website} target="_blank" rel="noreferrer">
            <button>
              {props.extension === "yes" ? "Marketplace" : "Website"}
            </button>
          </a>
          <a href={props.repo} target="_blank" rel="noreferrer">
            <button>Github</button>
          </a>
        </div>
      </div>

      <div className="partTwo">
        <img src={props.image} alt="" className="project__image" />
      </div>
    </div>
  );
}

export default Project;
