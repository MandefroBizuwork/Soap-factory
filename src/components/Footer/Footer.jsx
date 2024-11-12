import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" class="footer bg-light shadow " >

  
    
    <div class="container footer-top" >
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="d-flex align-items-center">
            <span class="sitename">Soap factory</span>
          </a>
          <div class="footer-contact pt-3">
            <p>chercher Street</p>
            <p>Addis Ababa,Ethiopia</p>
            <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
            <p><strong>Email:</strong> <span>info@example.com</span></p>
          </div>
        </div>
    
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
          </ul>
        </div>
    
        <div class="col-lg-2 col-md-3 footer-links">
          <h4>SHOP</h4>
          <ul>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Soap</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Bath & Shower</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Face & Body</a></li>
            <li><i class="bi bi-chevron-right"></i> <a href="#">Laundry</a></li>
          </ul>
        </div>
    
        <div class="col-lg-4 col-md-12">
          <h4>Follow Us</h4>
          <p>You can follow us on the following social media</p>
          <div class="social-links d-flex">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
    
      </div>
    </div>
    
    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright 2024</span> <strong class="px-1 sitename">Soap factor</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
        Designed by <a href="">MYL group </a>
      </div>
    </div>
    
    </footer>
  )
}

export default Footer