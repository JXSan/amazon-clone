import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/I/61g+CJ4YL4L._SX3000_.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="186154"
            title="The Power of One More: The Ultimate Guide to Happiness and Success"
            price={19.62}
            image="https://images-na.ssl-images-amazon.com/images/I/41bBY4sqm+L._SY344_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="451422"
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)"
            price={119.95}
            image="https://m.media-amazon.com/images/I/51oXipGnfHL._AC_SX466_.jpg"
            rating={4}
          />
          <Product
            id="943011"
            title="Bissell Crosswave Pet Pro All in One Wet Dry Vacuum Cleaner and Mop for Hard Floors and Area Rugs, 2306A"
            price={299.59}
            image="https://m.media-amazon.com/images/I/71z3BuuN8AL._AC_SX679_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="541511"
            title="Kwikset Halo Touch Contemporary Square Wi-Fi Fingerprint Smart Lock No Hub Required featuring SmartKey Security in Matte Black (99590-004)"
            price={239.0}
            image="https://m.media-amazon.com/images/I/71yMxKIl4hL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="811212"
            title="GE CYNC Smart LED Light Bulbs, Full Color, Bluetooth and Wi-Fi Enabled, Alexa and Google Home Compatible (2 Pack), Packaging May Vary"
            price={22.81}
            image="https://m.media-amazon.com/images/I/71BiWCDxLNL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="811456"
            title="SAMSUNG 65-Inch Class Neo QLED QN85A Series - 4K UHD Quantum HDR 24x Smart TV with Alexa Built-in and 6 speaker Object Tracking Sound - 60W, 2.2.2CH (QN65QN85AAFXZA, 2021 Model)"
            price={1_747.95}
            image="https://m.media-amazon.com/images/I/816z9yHvl4L._AC_SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
