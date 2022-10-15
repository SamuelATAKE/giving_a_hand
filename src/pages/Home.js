import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../custom_styles/Home.css";

const Home = () => {
  return (
    <div>
      <div id="preloader">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <div class="object" id="object_one"></div>
            <div class="object" id="object_two"></div>
            <div class="object" id="object_three"></div>
            <div class="object" id="object_four"></div>
          </div>
        </div>
      </div>
      <Header />

    
      <Footer />
    </div>
  );
};

export default Home;
