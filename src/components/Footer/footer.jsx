/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>16B street, Lootha Building, Al Raffa, Dubai, UAE</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email me</h6>
                    <p><a href="mailto:shafil@shafilahmedc.dev">shafil@shafilahmedc.dev</a></p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Me</h6>
                    <p><a href="tel:+971 52 577 5990">+971 52 577 5990</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/1.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img src="/img/blog/2.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <p>
                          The Start-Up Ultimate Guide to Make Your WordPress
                          Journal.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">14 sep 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-5">
            <div className="item">
              <div className="logo">
                <img src="https://shafilahmedc.dev/portfolio/wp-content/uploads/elementor/thumbs/logo-shafilahmedc-pp7hri47bex08vv0n7qeunsyi873k9xm5gh97wnpqc.png" alt="" />
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/in/shafilahmedc/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/shafilbd" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#0" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                
                {/* <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
              <div className="copy-right">
                <p>
                  © 2022, portfolio of Shafil Ahmed. Made with passion by
                  <Link
                    href="#">
                    <a target="_blank">Shafil Ahmed</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
