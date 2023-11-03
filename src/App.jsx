/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import React, { Component } from "react";

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
        <main>
          <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container">
              <a href="index.html">
                <img
                  className="navbar-brand"
                  src="images/logo.png"
                  alt=""
                  style={{ width: "100px", height: "34px" }}
                />
              </a>
              <button
                className="btn btn-white navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title fw-bold"
                    style={{ marginLeft: "20px" }}
                    id="offcanvasRightLabel"
                  >
                    BCR
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body justify-content-end">
                  <ul className="navbar-nav mr-2 mb-lg-0">
                    <li className="nav-item mx-3 my-1">
                      <a className="nav-link" href="#ourservices">
                        Our Sevices
                      </a>
                    </li>
                    <li className="nav-item mx-3 my-1">
                      <a className="nav-link ml" href="#whyus">
                        Why Us
                      </a>
                    </li>
                    <li className="nav-item mx-3 my-1">
                      <a className="nav-link" href="#testimonial">
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item mx-3 my-1">
                      <a className="nav-link" href="#faq">
                        FAQ
                      </a>
                    </li>
                  </ul>
                  <button className="btn btn-register mx-3 my-1">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <section className="mobil">
            <div className="container-xxl">
              <div className="row">
                <div
                  className="col-lg-5  mx-lg-5 col-xl-5 col-xxl-5 mx-md-0 "
                  style={{ paddingTop: "100px" }}
                >
                  <h2 className="fw-bold" style={{ paddingRight: "10px" }}>
                    Sewa & Rental Mobil Terbaik di kawasan Depok
                  </h2>
                  <p style={{ paddingRight: "40px" }}>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.{" "}
                  </p>
                  <a href="cars.html" className="btn btn-utama">
                    Mulai Sewa Mobil
                  </a>
                </div>
                <div
                  className="col-lg-5 col-xl-6 col-xxl-6 mt-lg-3"
                  style={{ paddingTop: "50px" }}
                >
                  <img
                    className=""
                    width="100%"
                    src="images/img_car.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        <section className="content" id="ourservice">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="img"
                  style={{ height: "428px" }}
                  src="images/img_service.png"
                  alt=""
                />
              </div>
              <div className="col-lg-6" style={{ paddingTop: "15px" }}>
                <h2 className="fw-bold fs-4" style={{ paddingRight: "200px" }}>
                  Best Car Rental for any kind of trip in Depok!
                </h2>
                <p style={{ fontSize: "14px", paddingRight: "30px" }}>
                  Sewa mobil di Depok bersama Binar Car Rental jaminan harga
                  lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                  kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                  wedding, meeting, dll.
                </p>
                <div className=" list-check ">
                  <p>
                    <img
                      src="images/Group_53.svg"
                      style={{ marginRight: "16px" }}
                      alt=" "
                    />{" "}
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </p>
                </div>
                <div className="list-check ">
                  <p>
                    <img
                      src="images/Group_53.svg"
                      style={{ marginRight: "16px" }}
                      alt=" "
                    />{" "}
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </p>
                </div>
                <div className="list-check ">
                  <p>
                    <img
                      src="images/Group_53.svg"
                      style={{ marginRight: "16px" }}
                      alt=" "
                    />{" "}
                    Sewa Mobil Jangka Panjang Bulanan
                  </p>
                </div>
                <div className="list-check ">
                  <p>
                    <img
                      src="images/Group_53.svg"
                      style={{ marginRight: "16px" }}
                      alt=" "
                    />{" "}
                    Gratis Antar - Jemput Mobil di Bandara
                  </p>
                </div>
                <div className="list-check ">
                  <p>
                    <img
                      src="images/Group_53.svg"
                      style={{ marginRight: "16px" }}
                      alt=" "
                    />{" "}
                    Layanan Airport Transfer / Drop In Out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why" id="whyus">
          <div className="container ">
            <div className="row ">
              <h2 className="fw-bold">Why Us ?</h2>
              <p style={{ marginTop: "16px" }}>
                Mengapa harus pilih Binar Car Rental
              </p>
            </div>
            <div className="row " style={{ marginTop: "40px" }}>
              <div className="col-lg-3 ">
                <div className="card-why">
                  <img src="images/icon_complete.svg " alt=" " />
                  <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                    Mobil Lengkap
                  </h2>
                  <p style={{ lineHeight: "20px" }}>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="card-why">
                  <img src="images/icon_price.svg " alt=" " />
                  <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                    Harga Murah
                  </h2>
                  <p className="fs-6" style={{ lineHeight: "20px" }}>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
              <div className=" col-lg-3 ">
                <div className="card-why ">
                  <img src="images/icon_24hrs.svg " alt=" " />
                  <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                    Layanan 24 Jam
                  </h2>
                  <p style={{ lineHeight: "20px" }}>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className="card-why ">
                  <img src="images/icon_professional.svg " alt=" " />
                  <h2 style={{ fontSize: "16px", marginTop: "16px" }}>
                    Sopir Profesional
                  </h2>
                  <p style={{ lineHeight: "20px" }}>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bagiancarousel" id="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center my-5">
                <h1 className="fw-bold">Testimonial</h1>
                <p className="mt-3">
                  Berbagai review positif dari para pelanggan kami
                </p>
              </div>
            </div>
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="card mb-3">
                  <div className=" row py-5 px-2 mx-2 ">
                    <div className="col-lg-3 text-lg-center px-3 ">
                      <br />
                      <img
                        src="images/img_photo.png "
                        className="img-fluid rounded-circle "
                        width="80px "
                        alt="... "
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      />
                    </div>
                    <div className="col-lg-9 text-center text-md-center">
                      <div className="card-body ">
                        <img
                          src="images/Rate.png "
                          alt=" "
                          className="w-25 mb-3 mb-lg-2"
                        />
                        <p className="card-text ">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="fw-bold ">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card mb-3">
                  <div className=" row py-5 px-2 mx-2 ">
                    <div className="col-lg-3 text-lg-center px-3 ">
                      <br />
                      <img
                        src="images/img_photo1.png "
                        className="img-fluid rounded-circle "
                        width="80px "
                        alt="... "
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      />
                    </div>
                    <div className="col-lg-9 text-md-center text-md-center">
                      <div className="card-body ">
                        <img
                          src="images/Rate.png "
                          alt=" "
                          className="w-25 mb-3 mb-lg-2 "
                        />
                        <p className="card-text ">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="fw-bold ">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card mb-3">
                  <div className=" row py-5 px-2 mx-2 ">
                    <div className="col-lg-3 text-lg-center px-3 ">
                      <br />
                      <img
                        src="images/img_photo.png "
                        className="img-fluid rounded-circle "
                        width="80px "
                        alt="... "
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      />
                    </div>
                    <div className="col-lg-9 text-md-center text-md-center">
                      <div className="card-body ">
                        <img
                          src="images/Rate.png "
                          alt=" "
                          className="w-25 mb-3 mb-lg-2 "
                        />
                        <p className="card-text ">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="fw-bold ">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card mb-3">
                  <div className=" row py-5 px-2 mx-2 ">
                    <div className="col-lg-3 text-lg-center px-3 ">
                      <br />
                      <img
                        src="images/img_photo.png "
                        className="img-fluid rounded-circle "
                        width="80px "
                        alt="... "
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      />
                    </div>
                    <div className="col-lg-9 text-md-center text-md-center">
                      <div className="card-body ">
                        <img
                          src="images/Rate.png "
                          alt=" "
                          className="w-25 mb-3 mb-lg-2 "
                        />
                        <p className="card-text ">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="fw-bold ">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sewa">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-lg-center text-center py-5">
                <h1 className="text-white fw-bold">
                  Sewa Mobil di Depok Sekarang
                </h1>
                <p className="text-white pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <button className="btn btn-utama mt-4">Mulai Sewa Mobil</button>
              </div>
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 title-faq">
                <h2 className="fw-bold">Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="col-lg-7">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Apa saja syarat yang dibutuhkan?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first items accordion body.</strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate class that we use to style each element.
                        These class control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our
                        default variables. Its also worth noting that just about
                        any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-3">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the second items accordion body.
                        </strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate class that we use to style each element.
                        These class control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our
                        default variables. Its also worth noting that just about
                        any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-3">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the third items accordion body.</strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate class that we use to style each element.
                        These class control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our
                        default variables. Its also worth noting that just about
                        any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-3">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Apakah Ada biaya antar-jemput?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the third items accordion body.</strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate class that we use to style each element.
                        These class control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our
                        default variables. Its also worth noting that just about
                        any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-3">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Bagaimana jika terjadi kecelakaan
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the third items accordion body.</strong>{" "}
                        It is hidden by default, until the collapse plugin adds
                        the appropriate class that we use to style each element.
                        These class control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our
                        default variables. Its also worth noting that just about
                        any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3 mx-auto">
                <p className="fw-light">
                  Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000{" "}
                </p>
                <p className="fw-light">binarcarrental@gmail.com </p>
                <p>081-233-334-808</p>
              </div>
              <div className="col-md-3 mx-auto">
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
              </div>
              <div className="col-md-3 mx-auto">
                <p className="fw-light">Connect With Us</p>
                <p>
                  <img className="mx-1" src="images/icon_facebook.svg" alt="" />
                  <img
                    className="mx-1"
                    src="images/icon_instagram.svg"
                    alt=""
                  />
                  <img className="mx-1" src="images/icon_twitter.svg" alt="" />
                  <img className="mx-1" src="images/icon_mail.svg" alt="" />
                  <img className="mx-1" src="images/icon_twitch.svg" alt="" />
                </p>
              </div>
              <div className="col-md-3 mx-auto">
                <p>Copyright Binar 2022</p>
                <img src="images/logo.png" alt="" width="100px" />
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
