/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";

const FreelancreIntro = ({ sliderRef, blackStar }) => {
  return (
    <header id="home" className="freelancre valign">
      <Particles
                  id="particles-js"
                  options={blackStar ? particlesBlackConfig : particlesConfig}
                />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src="/img/shafil.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h1 className="cd-headline clip">
                Hello, My name is Shafil Ahmed Chowdhury i love design and develop something 
                next level of 
                <span
                  style={{ fontSize: "35px", lineHeight: "49px", marginLeft: "10px" }}
                  className="cd-words-wrapper"
                > 
                  <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings: [
                        "Web Apps",
                        "Mobile Apps",
                        "Awesome Design"
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>05</h3>
                </div>
                <div className="text valign">
                  <p>
                    Years <br /> Of Experience
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>50</h3>
                </div>
                <div className="text valign">
                  <p>
                    Projects Completed <br /> World Wide
                  </p>
                </div>
              </li>

              <li className="mail-us">
                <a href="mailto:your@email.com?subject=Subject">
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Get In Touch</p>
                        <h6><a href="mailto:shafil@shafilahmedc.dev">shafil@shafilahmedc.dev</a></h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default FreelancreIntro;
