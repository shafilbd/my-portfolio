import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
// import LightTheme from "../../layouts/Light";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
import Services5 from "../../components/Services5/services5";
// import WorksStyle4 from "../../components/Works-style4/works-style4";
import Works3 from "../../components/Works3/works3";
import AboutUs5 from "../../components/About-us5/about-us5";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import SContactForm from "../../components/s-contact-form/s-contact-form";
import PricePackages from "../../components/Price-packages/price-packages";


const Homepage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme mobileappstyle>
      
      <Navbar nr={navbarRef} lr={logoRef} />
      <FreelancreIntro />
      <Services5  />
      <Works3 />
      <AboutUs5 />
      <PricePackages/>
      <FullTestimonials showHead />
      {/* <Blogs2 /> */}
      {/* <SContactForm noLine /> */}
      <Footer />
      
    </DarkTheme>
  );
};

export default Homepage;