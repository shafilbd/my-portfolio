/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import worksData from "../../data/sections/works.json";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works3 = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section id="projects" className="work-carousel2 metro section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Projects
                </h6>
                <h3 className="wow color-font">
                  Recent Projects Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <Swiper
                  className="swiper-wrapper"
                  slidesPerView={2}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  }}
                  speed={1000}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    767: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                      centeredSlides: false,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <img src="/img/projects/juanaskin.jpg" alt="" />
                        </span>
                      </div>
                      <div className="cont">
                        <h6>
                          <a
                            href={`https://juanaskin.com`} target="_blank" rel="noopener noreferrer"
                          >
                            Beauty &amp; Skin
                          </a>
                          <a
                            href="https://juanaskin.com" target="_blank" rel="noopener noreferrer"
                          >
                            Beauty &amp; Skin
                          </a>
                          
                        </h6>
                        
                        <h4>
                          {/* <Link
                            href={`/project-details2/project-details2-dark`}
                          >
                            Juanaskin E-commerce
                          </Link> */}
                          <a
                            href="https://juanaskin.com" target="_blank" rel="noopener noreferrer"
                          >
                            Juanaskin E-commerce
                          </a>
                        </h4>
                        <div className="tags">
                          <span>Shopify</span>
                          <span>jQuery</span>
                          <span>HTML/CSS3</span>
                          <span>GSAP</span>
                          <span>Polyfill</span>
                          <span>React</span>
                          <span>Liquid</span>
                        </div>
                      </div>
                      
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <img src="/img/projects/biisummit-srt.jpg" alt="" />
                        </span>
                      </div>
                      <div className="cont">
                        <h6>
                          <a
                            href="#" rel="noopener noreferrer"
                          >
                            Arranage Events in Dubai
                          </a>
                        </h6>
                        <h4>
                          <a
                            href={`#`} rel="noopener noreferrer"
                          >
                            Biisummit Event Management Co.
                          </a>
                        </h4>
                        <div className="tags">
                          <span>codeigniter</span>
                          <span>jQuery</span>
                          <span>HTML/CSS3</span>
                          <span>PHP</span>
                          <span>Bootstrap 4</span>
                          <span>MySQL</span>
                          
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <img src="/img/projects/Kast-Dubai-shrt.jpg" alt="" />
                        </span>
                      </div>
                      <div className="cont">
                        <h6>
                          <a
                            href="https://kastdubai.com" target="_blank" rel="noopener noreferrer"
                          >
                            Kast &amp; candle sellers
                          </a>
                        </h6>
                        <h4>
                          <a
                            href="https://kastdubai.com" target="_blank" rel="noopener noreferrer"
                          >
                            KastDubai
                          </a>
                        </h4>
                        <div className="tags">
                          <span>
                            Wix
                          </span>
                          <span>
                            jQuery
                          </span>
                          <span>
                            HTML/CSS3
                          </span>
                          <span>
                            ecwid
                          </span>
                          <span>
                            Stripe
                          </span>
                          
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <img src="/img/projects/lasyaa-gift-srt.jpg" alt="" />
                        </span>
                      </div>
                      <div className="cont">
                        <h6>
                          <a
                            href="https://lasyaagifts.com" target="_blank" rel="noopener noreferrer"
                          >
                            Gift &amp; Jewelry
                          </a>
                        </h6>
                        <h4>
                          <a
                            href="https://lasyaagifts.com" target="_blank" rel="noopener noreferrer"
                          >
                            Lasyaa Custom Gifts Builder
                          </a>
                        </h4>
                        <div className="tags">
                          <span>
                            Shopify
                          </span>
                          <span>
                            jQuery
                          </span>
                          <span>
                            HTML/CSS3
                          </span>
                          <span>
                          GSAP
                          </span>
                          <span>
                          Polyfill
                          </span>
                          <span>
                            Reactjs
                          </span>
                          <span>
                            Liquid
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <img src="/img/projects/dct-gulf-srt.jpg" alt="" />
                        </span>
                      </div>
                      <div className="cont">
                        <h6>
                          <a
                            href="https://dct-gulf.com" target="_blank" rel="noopener noreferrer"
                          >
                            Data center Management System
                          </a>
                        </h6>
                        <h4>
                        <a
                            href="https://dct-gulf.com" target="_blank" rel="noopener noreferrer"
                          >
                            Dct-Gulf
                          </a>
                        </h4>
                        <div className="tags">
                          <span>
                            WordPress
                          </span>
                          <span>
                            jQuery
                          </span>
                          <span>
                            HTML/CSS3
                          </span>
                          <span>
                            PHP
                          </span>
                          <span>
                            Bootstrap 4
                          </span>
                          <span>
                            MySQL
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content">
                      <div className="img">
                        <span className="imgio">
                          <span className="wow cimgio" data-delay="500"></span>
                          <img src="/img/projects/algasim-publication-srt.jpg" alt="" />
                        </span>
                      </div>
                      <div className="cont">
                        <h6>
                          <a
                            href="https://alqasimipublications.com/" target="_blank" rel="noopener noreferrer"
                          >
                            Arabic book publisher
                          </a>
                        </h6>
                        <h4>
                          <a
                            href="https://alqasimipublications.com/" target="_blank" rel="noopener noreferrer"
                          >
                            Al Qasimi Publications
                          </a>
                        </h4>
                        <div className="tags">
                          <span>
                            WordPress
                          </span>
                          <span>
                            Anime Js
                          </span>
                          <span>
                            jQuery
                          </span>
                          <span>
                            HTML/CSS3
                          </span>
                          <span>
                            PHP
                          </span>
                          <span>
                            Bootstrap 4
                          </span>
                          <span>
                            MySQL
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div
                  ref={navigationNextRef}
                  className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                >
                  <i className="ion-ios-arrow-right"></i>
                </div>
                <div
                  ref={navigationPrevRef}
                  className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                >
                  <i className="ion-ios-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works3;
