/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Reviews of work
                  </h6>
                  <h3 className="wow color-font">
                    Feedback of completed work from all over the world.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="https://www.upwork.com/profile-portraits/c1skmzpD99Oe4sVvHvXliQxh8BNwZGD_l55oDPBoyBlB0LrFB_L7qk7gvowyY2OdP6" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                            Max Bratsun
                        </h6>
                        <span className="author-details">
                          Co-founder, Juanaskin
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                      Shafil did a fantastic job on our project basically exceeding our expectations. Will hire again!
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/client-img1.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Mazin Abdelrazag
                        </h6>
                        <span className="author-details">
                          IT officer of Al Wasl
                        </span>
                      </div>
                    </div>
                  </div>
                  <p> Excellent work I recommend Mr Shafil. Polite person and an excellent developer. </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="https://www.upwork.com/profile-portraits/c1H4iuC1myuwdJl_BubQ-O7U1hPsS1dA9hilzfpyT_wRKu1UvFr1TEGTt3wo9szFTg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Ash Varma
                        </h6>
                        <span className="author-details">
                          Co-founder, Lasyaa
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                      Shafil is extremely helpful and fully understands the requirement. He is an excellent developer and supported well for this Shopify project.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/clients/1.jpg" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Micheal
                        </h6>
                        <span className="author-details">
                          Co-founder, Web Design Agency Norway
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Shafil is helping us developing WordPress websites. He is very competent within the CMS and knows how to find solutions to our companies needs of design and functionality.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
