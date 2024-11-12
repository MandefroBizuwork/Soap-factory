import React from 'react'
import pimag from "../../assets/img/productDesc.PNG"

const About = () => {
  return (
    <>
  
    <section id="about" class="about section">

   
      <div class="container section-title" data-aos="fade-up">
        <h2>About Us</h2>
      </div>

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
            The Soap Factory is proud to offer high-quality handcrafted bath, body and home products, featured in timeless fragrances and made with plant based ingredients. We stock our shelves with clean, simple and effective goods that outperform big box brands and our competitors.
            </p>
            <img src={pimag}></img>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>We started this business for the opportunity to make a difference outside of our small town and serve local communities and charities. As a customer-driven brand, our products are determined by your feedback! We'd like to personally invite you to stop by to try our all-natural products today.  </p>
            <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
          </div>

        </div>

      </div>

    </section>
      
    </>
  )
}

export default About
