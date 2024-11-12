import React from "react";

const Header = () => {
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top" style={{lineHeight:"5px"}}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="index.html" className="logo d-flex align-items-center me-auto">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src="assets/img/logo.png" alt="" />
            <h1 className="sitename">Soap factory</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>

              <li className="dropdown d-flex">
                <a href="#"><span>Locations</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul className=" ul">
                  <li><a href="#">Addis Abeba</a></li>
                  <li><a href="#">Hawassa</a></li>
                  <li><a href="#">Gonder</a></li>
                  <li><a href="#">Debrebirhan</a></li>
                  <li><a href="#">Adama</a></li>
                </ul>
              </li>

              <li className="dropdown ">
                <a href="#"><span>Shop</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
               <div className=" ul d-flex">
               <ul className="d-flex flex-column">
                  <li><a href="#"><strong>Face & Body</strong></a></li>
                  <li><a href="#">Body Butter</a></li>
                  <li><a href="#">Body Oil</a></li>
                  <li><a href="#">Body Spray</a></li>
                  <li><a href="#">Cuticle Balm</a></li>
                  <li><a href="#">Lip Balm</a></li>
                  <li><a href="#">Nasal Inhaler</a></li>
                </ul>
                <ul className="d-flex flex-column">
                  <li><a href="#"><strong>Bath & Shower</strong></a></li>
                  <li><a href="#">Bubble Truffles</a></li>
                  <li><a href="#">Salt Bath</a></li>
                  <li><a href="#">Shampoo Bar</a></li>
                  <li><a href="#">Bath Bomb</a></li>
                </ul>
                <ul className="d-flex flex-column">
                  <li><a href="#"><strong>Laundry</strong></a></li>
                  <li><a href="#">Fragrance Booster Oil</a></li>
                  <li><a href="#">Wool Dryer Ball</a></li>
                  <li><a href="#">Liquid Laundry</a></li>
                  <li><a href="#">Laundry Trial Pack</a></li>
                  <li><a href="#">Laundry Samples</a></li>
                </ul>
               </div>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          
        </div>
        <div className="d-inline-flex align-items-center mx-5 gap-5">
          <a  className="" href="#signup">Sign up</a>
     <div style={{maxWidth:"100px",position:"relative"}}>
     <i style={{color:"white",fontSize:"50px"}} class="bi bi-cart"></i> 
     <span style={{position:"absolute",top:"12",color:"white",left:"0", padding:"0 13px"}}>0</span>
     </div>
        </div>
      </header>
    </>
  );
};

export default Header;
