import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//...
import leftArrow from "../../assets/icons/arrow_left.svg";
import rightArrow from "../../assets/icons/right_arow.svg";
import './MySlide.css'
import ImageCards from "./ImageCards";
import {images} from "./Imagedata"

import { soaps } from "./Imagedata";
function MySlide() {
  return (

      <div className="container-fluid d-flex justify-content-center" data-aos="zoom-out">
        <Carousel className="container-fluid"
      showIndicators   
      
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button onClick={clickHandler} className="btn btn-left">
                 <img src={leftArrow} alt="Previous" />
              </button>
            )
          );
        }}
          renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="btn btn-right" onClick={clickHandler}>
                 <img src={rightArrow} alt="next" />
              </button>
            )
          );
        }}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
          ariaLabel={"Image carousel"}
          useKeyboardArrows={true}
          statusFormatter={() => ""}
        >
          {soaps.map((data, key) => (
            <div className="container d-flex justify-content-center p-5  ">
              
              <ImageCards 
              image={data.image}
              title={data.Title}
              description={data.Description}
              
              />
              
               </div>
          
            ))}
        </Carousel>
      </div>
    
  
  );
}

export default MySlide;
