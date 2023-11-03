/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import React, { Component } from "react";

import Header from "./components/Header";
import Service from "./components/Service";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default class App extends Component {
  componentDidMount() {
    // Inisialisasi Owl Carousel di sini
    $(" .owl-carousel ").owlCarousel({
      loop: true,
      margin: 20,
      autoWidth: true,
      autoHeight: true,
      nav: true,
      center: true,
      dots: false,
      navText: [
        "<img width='32px' src='/images/Leftbutton.png'>",
        "<img  width='32px' src='/images/Rightbutton.png'>",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
          loop: true,
          autoWidth: true,
          autoHeight: true,
        },
        600: {
          items: 1,
          nav: true,
          loop: true,
          autoWidth: true,
          autoHeight: true,
        },
      },
    });
    $(".owl-carousel1").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 3,
          nav: false,
        },
        1000: {
          items: 5,
          nav: true,
          loop: false,
        },
      },
    });
  }

  render() {
    return (
      <>
        <Header />
        <Service />
        <Feature />
        <Testimonial />
        <CallToAction />
        <FAQ />
        <Footer />
      </>
    );
  }
}
