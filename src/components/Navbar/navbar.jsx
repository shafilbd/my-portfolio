/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const   Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          {/* <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a> */}
          <a className="logo">
            <img src="https://shafilahmedc.dev/portfolio/wp-content/uploads/elementor/thumbs/logo-shafilahmedc-pp7hri47bex08vv0n7qeunsyi873k9xm5gh97wnpqc.png" alt="logo" />
          </a>
          
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
              {/* <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span> */}
              {/* <div className="dropdown-menu">
                <Link href={`/homepage/home1-dark`}>
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href={`/homepage/home2-dark`}>
                  <a className="dropdown-item">Creative Agency</a>
                </Link>
                <Link href={`/homepage/home5-dark`}>
                  <a className="dropdown-item">Digital Agency</a>
                </Link>
                <Link href={`/homepage/home4-dark`}>
                  <a className="dropdown-item">Business One Page</a>
                </Link>
                <Link href={`/homepage/home3-dark`}>
                  <a className="dropdown-item">Corporate Business</a>
                </Link>
                <Link href={`/homepage/home6-dark`}>
                  <a className="dropdown-item">Modern Agency</a>
                </Link>
                <Link href={`/homepage/home7-dark`}>
                  <a className="dropdown-item">Freelancer</a>
                </Link>
                <Link href={`/homepage/home8-dark`}>
                  <a className="dropdown-item">Architecture</a>
                </Link>
              </div> */}
            </li>
            <li className="nav-item">
              
                <a className="nav-link" href="#skills">Skills</a>
              
            </li>
            <li className="nav-item">
              
                <a className="nav-link" href="#projects">Projects</a>
              
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#experiences">Experiences</a>
            </li>
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href={`/showcase/showcase-dark`}>
                  <a className="dropdown-item">Showcase Parallax</a>
                </Link>
                <Link href={`/showcase4/showcase4-dark`}>
                  <a className="dropdown-item">Showcase Carousel</a>
                </Link>
                <Link href={`/showcase3/showcase3-dark`}>
                  <a className="dropdown-item">Showcase Circle</a>
                </Link>
                <Link href={`/works/works-dark`}>
                  <a className="dropdown-item">Portfolio Masonry</a>
                </Link>
                <Link href={`/works2/works2-dark`}>
                  <a className="dropdown-item">Portfolio Filtering</a>
                </Link>
                <Link href={`/works3/works3-dark`}>
                  <a className="dropdown-item">Portfolio Gallery</a>
                </Link>
              </div>
            </li> */}
            <li className="nav-item" onClick={handleDropdown}>
              <span className="nav-link">
                Blog
              </span>
              {/* <div className="dropdown-menu">
                <Link href={`/blog/blog-dark`}>
                  <a className="dropdown-item">Blog Standerd</a>
                </Link>
                <Link href={`/blog-list/blog-list-dark`}>
                  <a className="dropdown-item">Blog List</a>
                </Link>
                <Link href={`/blog-grid/blog-grid-dark`}>
                  <a className="dropdown-item">Blog Grid</a>
                </Link>
                <Link href={`/blog-details/blog-details-dark`}>
                  <a className="dropdown-item">Blog Details</a>
                </Link>
              </div> */}
            </li>
            <li className="nav-item">
              <Link href={`#contact`}>
                <a className="nav-link" href="#contact">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
