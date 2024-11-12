import React from "react";
import Carousels from "../Carousels/Carousels";
import About from "../About/About";
import Service from "../Services/Service";
import Team from "../Teams/Teams";
import Products from "../Products/Products";
import Contact from "../ContactUs/Contact";
import MySlide from "../Carousels/MySlide";
import Hero from "../../images/heroBanner.jpg";
import Heroimage from "../../assets/img/heroimage.jpg";
import zIndex from "@mui/material/styles/zIndex";
import SignUp from "../SignUp";

const Main = () => {
  return (
    <div className="main" style={{ display: "block" }}>
      <section id="hero" className="hero section dark-background">
        <img
          src={Hero}
          alt="Hero Background"
          data-aos="fade-in"
          className="aos-init aos-animate"
          style={{
            opacity: "1",
            position: "absolute",
            inset: 0,
            display: "block",
            width: "100%",
            height: "100%",
            zIndex: "1",
            objectFit: "cover",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: "3",
           
            opacity: "0.5",
            padding: "30px",
            marginTop: "50px",
          }}
        >
          <div className="row gy-4">
            <div
              className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
              data-aos="zoom-out"
            >
              <h1>Quality soap made in our factory</h1>
              <p>The Soap Factory Welcomes You</p>
              <div className="d-flex">
                <a href="#about" className="btn-get-started">
                  Go to our products
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src={Heroimage}
                className="img-fluid animated"
                alt="Hero Display"
                width="100%"
                height={300}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            zIndex: "-1",

            width: "100%",
            overflow: "hidden",
            marginTop: "-10%",
            border: "none",
            strokeWidth: "0px",
          }}
          class="custom-shape-divider-bottom-1638549227"
        >
          <svg
            style={{ border: "none", opacity: "1" }}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              style={{ border: "none", fill: "#3D4D6A" }}
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Carousel and Other Sections */}
      <section id="slide">    <MySlide /></section>
  
     <section id= "path"> <div
        style={{
          position: "relative",
          bottom: "0",
          left: "0",
          zIndex: "-1",

          width: "100%",
          overflow: "hidden",
          marginTop: "-2%",
          border: "none",
          strokeWidth: "0px",
        }}
        class="custom-shape-divider-bottom-1638549227"
      >
        <svg
          style={{ border: "none", opacity: "1" }}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            style={{ border: "none", fill: "#3D4D6A" }}
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          ></path>
        </svg>
      </div></section>
      {/* <Service /> */}
  <section id="products">    <Products /></section>
  <section id="products">    <About /></section>
  <section id="products">    <Contact /></section>   
  <section id="signup">    <SignUp /></section>  

    </div>
  );
};

export default Main;
