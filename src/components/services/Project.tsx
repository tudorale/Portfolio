import React from "react";
import "../../style/css/main.css";
function Project(props: any) {

  return (
    <div className="project project1">
        <div className="partOne">
            <h1 className="project__title">{props.title}</h1>
            <p className="project__desciption">{props.description}</p>
            <div className="project__buttons">
                <a href={props.website} target="_blank" rel="noreferrer">
                    <button>Website</button>
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
