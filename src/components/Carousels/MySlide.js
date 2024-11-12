import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { images } from "./Imagedata";

function MySlide() {
  return (
    <>
      <section id="clients" class="clients section  " style={{opacity:"0.8",backgroundColor:"#4F514C"}}>
        <div class="container" data-aos="zoom-out">
          <div class="swiper init-swiper">
            <div class="swiper-wrapper align-items-center">
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showThumbs={false}
                ariaLabel={"Image carousel"}
                useKeyboardArrows={true}
              >
                {images.map((image, k) => {
                  return (
                    <>
                      <div class="swiper-slide">
                        <img
                          class="d-block w-100"
                          src={image}
                          alt="Image 1"
                          width={"100%"}
                          height={"300"}
                          key={k}
                          style={{ opacity: "1" }}
                        />
                      </div>
                    </>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MySlide;
