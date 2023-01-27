/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutSkillsProgress from "../../common/aboutSkillsProgress";

const AboutUs5 = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector(".about-cr .skills-box"),
      document.querySelectorAll(".skill-progress .progres"),
      document.querySelector(".about-cr")
    );
  }, []);
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/projects/my-setup.jpg" alt="" />
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font">360 DEVELOPMENT</h3>
              <h5 className="co-tit mb-15">
                Love to solve Real-life problems 
              </h5>
              <p>
                Automation, Authentication, collect data and business anaylitcs are most coding area of mine.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">UI / UX Design - Adobe XD, Figma, html/css, jQuery, ReactJs</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-35">Development Tools i used - PHP, Python, NodeJs, Numpy</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
                <div className="mb-35">
                    <a download href="https://shafilahmedc.dev/resume/Resume-of-SAC.pdf" className="butn-bord-red rounded buton"><span>Download CV</span></a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
