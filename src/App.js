import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


// import './bootstrap-5/css/bootstrap.min.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'



import './assets/css/main.css'
import About from "./components/About/About";
import Service from "./components/Services/Service";
import Team from "./components/Teams/Teams";
import Products from "./components/Products/Products";
import Contact from "./components/ContactUs/Contact";

function App() {
  
  return (
   <div >
   <Header/>
   <Main/>
   <Footer/>


{/* 
     <Router>
    <Routes>
        {/* <Route path='/' element={<Main/>} /> */}
        {/* <Route path='/auth' element={<Signin/>} />
        <Route path='/payments' element={<Payment/>} />
        <Route path='/Order' element={<Order/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Category/:catgryName' element={<CategoryResult/>} />
        <Route path='/products/:ProductID' element={<ProductDetail/>} />
       */}


    {/* </Routes>
   </Router> */} 
    </div>
  );
}

export default App;
