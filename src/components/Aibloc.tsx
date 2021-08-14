import React from 'react'
import "../style/css/main.css";
import { Link } from "react-router-dom";
import ImageOne from "./case-studies/aibloc/image1.png";
import ImageTwo from "./case-studies/aibloc/image2.png";
import ImageThree from "./case-studies/aibloc/image3.png";
import ImageFour from "./case-studies/aibloc/image4.png";
import ImageFive from "./case-studies/aibloc/image5.png";
import ImageSix from "./case-studies/aibloc/image6.png";

function Aibloc() {
    return (
        <div className="wrapper">
            <h1>Landing Page for <span>Ai Bloc</span> Start-up</h1>
            <Link to="/">Go Home</Link>
            <a
                href="https://github.com/tudorale/aibloc"
                target="_blank"
                rel="noreferrer"
            >Visit project GitHub</a>
            <a
                href="#"
                rel="noreferrer"
            >Visit website - Not available</a>   
            <h2>Brief Summary</h2>
            <p><span>Ai Bloc</span> is a non-code platform where you can build Data Science and Machine Learning programs, the client wanted a good and beautiful landing page for this start-up.</p>
            <p>
                At first, I started designing a wireframe in Figma, the client was happy about it and then we went to the coding process. I used mainly React JS as the best option as the client was fine with it, I used also different libraries such as GSAP, AOS, Typed.js for animations. The illustrations from the landing page were edited in Adobe Photoshop to match the color scheme.
            </p>

            <div className="imageWrapper">
                <img alt="" src={ImageOne} />
                <h1>Hero section, with an interactiv demo from the product.</h1>
            </div>

            <h3 className="special">What was my role on this project?</h3>
            <p>As the recruiter for this one time project wanted a Front-End Developer, with experience in React JS, I handled the coding of the landing page but also the design of it.</p>
            <h3>What technologies I used?</h3>
            <p>For the coding process I used <span>React JS</span> with the following libraries: <span>GSAP</span>, <span>AOS</span>, <span>React Slick</span> and <span>Typed JS</span>.</p>
            <p>To design the wireframe and a mockup for the landing page I used <span>Figma</span>.</p>

            <p></p>

            <div className="imageWrapper">
                <img alt="" src={ImageTwo} />
                <h1>Section two, about the first feature, along with a carousel with videos.</h1>
            </div>

            <h3 className="special">A walkthrough my process</h3>
            <p>The project started with a wireframe made in Figma, after the client review it, I started adding more features, illustrations and icons to make the design look better. After the mock up for the landing page was done I started the coding process.</p>
            <p>As I said I made this project in React JS as the client had his platform also on React JS, this will help the client to implement the landing page to his main project, the coding process took around <span>72 hours</span> of coding, the first day I added the content for the website, the second day we found illustrations and made carousel for the videos that were provided by the client, and in the final day I made the website fully responsive.</p>
            <p>The landing page turned out as a beautiful responsive website with animations and a great user experience as you can see in the images below.</p>
        
            <div className="imageWrapper fourImages">
                <img alt="" src={ImageThree} />
                <img alt="" src={ImageFour} />
                <img alt="" src={ImageFive} />
                <img alt="" src={ImageSix} />
            </div>

            <div className="footerContent">
                <Link to="/">Go Home</Link>
                <a
                    href="https://github.com/tudorale/aibloc"
                    target="_blank"
                    rel="noreferrer"
                >Visit project GitHub</a>     
                
                <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                >Visit website - Not available</a> 
            </div>

               
        </div>
    )
}

export default Aibloc
