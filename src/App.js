import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>
    <div>
      <Header />
      <section class="hero-area-one">
        <div class="hero-text">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-10">
                <span class="tagline wow fadeInUp" data-wow-delay="0.3s">
                  Giving A Hand
                </span>
                <h1 class="title wow fadeInUp" data-wow-delay="0.4s">
                  Contribuer à l'avancement du Royaume en impactant des vies
                </h1>
                <a
                  href="project-1.html"
                  class="main-btn wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  Explorer les projets <i class="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="hero-shapes">
            <div class="hero-line-one">
              <img src="images/WlxGGL5a0D7H.png" alt="Line" />
            </div>
            <div class="hero-line-two">
              <img src="images/VZuscH2FE69A.png" alt="Line" />
            </div>
            <div class="dot-one"></div>
            <div class="dot-two"></div>
          </div>
        </div>
        <div class="hero-images">
          <div
            class="hero-img image-small fancy-bottom wow fadeInLeft"
            data-wow-delay="0.6s"
          >
            <img src="images/hBFyNLPX2XgZ.jpg" alt="Image12" />
          </div>
          <div class="hero-img main-img wow fadeInUp" data-wow-delay="0.5s">
            <img src="images/oe9XXcSciV75.jpg" alt="Image13" />
          </div>
          <div
            class="hero-img image-small fancy-top wow fadeInRight"
            data-wow-delay="0.7s"
          >
            <img src="images/UCH2FbxvOqcc.jpg" alt="Image14" />
          </div>
        </div>
      </section>

      <section class="popular-categories section-gap">
        <div class="container">
          <div class="categories-header">
            <div class="row align-items-center justify-content-between">
              <div class="col-auto">
                <div class="common-heading mb-30">
                  <span class="tagline">
                    <i class="fas fa-plus"></i> nos domaines d'actions
                    <span class="heading-shadow-text">Catégories</span>
                  </span>
                  <h2 class="title">Les Catégories populaires</h2>
                </div>
              </div>
              <div class="col-auto">
                <a href="project-1.html" class="main-btn mb-30">
                  Voir les catégories <i class="far fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="row justify-content-center fancy-icon-boxes">
            <div
              class="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0s"
            >
              <div class="fancy-box-item mt-30">
                <div class="icon">
                  <i class="flaticon-reading-book"></i>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="project-details.html">Education</a>
                  </h4>
                  <p>Ecoles, Primaire & Secondaire</p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="fancy-box-item mt-30">
                <div class="icon">
                  <i class="flaticon-stethoscope"></i>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="project-details.html">Médecine & Santé</a>
                  </h4>
                  <p>School, Collage & University</p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="fancy-box-item mt-30">
                <div class="icon">
                  <i class="flaticon-tshirt-1"></i>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="project-details.html">Habillement</a>
                  </h4>
                  <p>School, Collage & University</p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="fancy-box-item mt-30">
                <div class="icon">
                  <i class="flaticon-video-camera"></i>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="project-details.html">Video & Films</a>
                  </h4>
                  <p>School, Collage & University</p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="fancy-box-item mt-30">
                <div class="icon">
                  <i class="flaticon-project-management"></i>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="project-details.html">Technologie</a>
                  </h4>
                  <p>School, Collage & University</p>
                </div>
              </div>
            </div>
            <div
              class="col-xl-4 col-md-6 col-sm-10 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div class="fancy-box-item mt-30">
                <div class="icon">
                  <i class="flaticon-salad"></i>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="project-details.html">Nutrition</a>
                  </h4>
                  <p>School, Collage & University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about-section-one">
        <div class="container">
          <div class="row align-items-center justify-content-lg-start justify-content-center">
            <div class="col-xl-6 col-lg-7 col-md-9">
              <div class="about-img">
                <img src="images/YiKdtlsd2MPj.jpg" alt="Image15" />
              </div>
            </div>
            <div class="col-xl-4 col-lg-5 col-md-10 offset-xl-1">
              <div class="about-text mt-md-70 mb-md-50">
                <div class="common-heading mb-30">
                  <span class="tagline">
                    <i class="fas fa-plus"></i> qui sommes nous?
                    <span class="heading-shadow-text">A propos de nous</span>
                  </span>
                  <h2 class="title">Pourquoi nous choisir?</h2>
                </div>
                <p>
                  La mission principale de l'église est le salut des âmes, et
                  dans cette logique, il ya ceux qui vont sur le terrain, il y a
                  ceux qui ont du temps pour prier pour ceux qui sont sur le
                  terrain et il y a ceux qui peuvent donner (don financier ou en
                  nature) pour non seulement aider ceux qui sont sur le terrain
                  mais aussi témoigner l'amour de Christ que nous prêchons aux
                  païens.
                </p>
                <div class="author-note wow fadeInUp">
                  <ul>
                    <li>
                      <i class="far fa-check"></i>Agence de Financement
                      participatif à but non lucratif
                    </li>
                    <li>
                      <i class="far fa-check"></i> Nous réussissons les projets{" "}
                    </li>
                  </ul>
                  <div class="author-info">
                    <div class="author-img">
                      <img src="images/geTJCeDACag4.jpg" alt="Image16" />
                    </div>
                    <h5 class="name">Michel H. Heart</h5>
                    <span class="title">CEO & Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="project-section project-section-extra-gap secondary-bg">
        <div class="container-fluid fluid-extra-padding">
          <div class="common-heading text-center color-version-white mb-60">
            <span class="tagline">
              <i class="fas fa-plus"></i> Projets populaires
              <span class="heading-shadow-text">Nos projets</span>
            </span>
            <h2 class="title">Explorer nos projets</h2>
          </div>
          <div class="row project-slider-one project-items project-style-one no-shadow">
            <div class="col">
              <div class="project-item">
                <div class="thumb thumb01"></div>
                <div class="content">
                  <div class="cats">
                    <a href="/#">Vidéo & Films</a>
                  </div>
                  <div class="author">
                    <img src="images/geTJCeDACag4.jpg" alt="Thumb1" />
                    <a href="/#">James W. Barrows</a>
                  </div>
                  <h5 class="title">
                    <a href="project-details.html">
                      Best Romantic & Action English Movie Release in 2022.
                    </a>
                  </h5>
                  <div class="project-stats">
                    <div class="stats-value">
                      <span class="value-title">
                        Levée de fonds de <span class="value">$59,689</span>
                      </span>
                      <span class="stats-percentage">79%</span>
                    </div>
                    <div class="stats-bar" data-value="79">
                      <div class="bar-line"></div>
                    </div>
                  </div>
                  <span class="date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="project-item">
                <div class="thumb thumb02"></div>
                <div class="content">
                  <div class="cats">
                    <a href="/#">Education</a>
                  </div>
                  <div class="author">
                    <img src="images/Jpj6FGVms1BC.jpg" alt="Thumb2" />
                    <a href="/#">James W. Barrows</a>
                  </div>
                  <h5 class="title">
                    <a href="project-details.html">
                      Needs Close Up Students Class Room In University
                    </a>
                  </h5>
                  <div class="project-stats">
                    <div class="stats-value">
                      <span class="value-title">
                        Levée de fonds de<span class="value">$59,689</span>
                      </span>
                      <span class="stats-percentage">87%</span>
                    </div>
                    <div class="stats-bar" data-value="87">
                      <div class="bar-line"></div>
                    </div>
                  </div>
                  <span class="date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="project-item">
                <div class="thumb thumb03"></div>
                <div class="content">
                  <div class="cats">
                    <a href="/#">Technologie</a>
                  </div>
                  <div class="author">
                    <img src="images/dI1SXCoGaG40.jpg" alt="Thumb3" />
                    <a href="/#">James W. Barrows</a>
                  </div>
                  <h5 class="title">
                    <a href="project-details.html">
                      Original Shinecon VR Pro Virtual Reality 3D Glasses VRBOX
                    </a>
                  </h5>
                  <div class="project-stats">
                    <div class="stats-value">
                      <span class="value-title">
                        Levée de fonds de <span class="value">$59,689</span>
                      </span>
                      <span class="stats-percentage">85%</span>
                    </div>
                    <div class="stats-bar" data-value="85">
                      <div class="bar-line"></div>
                    </div>
                  </div>
                  <span class="date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="project-item">
                <div class="thumb thumb04"></div>
                <div class="content">
                  <div class="cats">
                    <a href="/#">Habillement</a>
                  </div>
                  <div class="author">
                    <img src="images/geTJCeDACag4.jpg" alt="Thumb4" />
                    <a href="/#">James W. Barrows</a>
                  </div>
                  <h5 class="title">
                    <a href="project-details.html">
                      Fundraising For The People And Causes You Care About
                    </a>
                  </h5>
                  <div class="project-stats">
                    <div class="stats-value">
                      <span class="value-title">
                        Levée de fonds de <span class="value">$59,689</span>
                      </span>
                      <span class="stats-percentage">83%</span>
                    </div>
                    <div class="stats-bar" data-value="83">
                      <div class="bar-line"></div>
                    </div>
                  </div>
                  <span class="date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="project-item">
                <div class="thumb thumb05"></div>
                <div class="content">
                  <div class="cats">
                    <a href="/#">Santé</a>
                  </div>
                  <div class="author">
                    <img src="images/Jpj6FGVms1BC.jpg" alt="Thumb5" />
                    <a href="/#">James W. Barrows</a>
                  </div>
                  <h5 class="title">
                    <a href="project-details.html">
                      COVID-19 Vaccine Have Already Begun Introduced Countries
                    </a>
                  </h5>
                  <div class="project-stats">
                    <div class="stats-value">
                      <span class="value-title">
                        Levée de fonds de <span class="value">$59,689</span>
                      </span>
                      <span class="stats-percentage">93%</span>
                    </div>
                    <div class="stats-bar" data-value="93">
                      <div class="bar-line"></div>
                    </div>
                  </div>
                  <span class="date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="project-item">
                <div class="thumb thumb06"></div>
                <div class="content">
                  <div class="cats">
                    <a href="/#">Business</a>
                  </div>
                  <div class="author">
                    <img src="images/dI1SXCoGaG40.jpg" alt="Thumb6" />
                    <a href="/#">James W. Barrows</a>
                  </div>
                  <h5 class="title">
                    <a href="project-details.html">
                      Mobile First Is Just Not Goodies Enough Meet Journey
                    </a>
                  </h5>
                  <div class="project-stats">
                    <div class="stats-value">
                      <span class="value-title">
                        Levée de fonds de <span class="value">$59,689</span>
                      </span>
                      <span class="stats-percentage">70%</span>
                    </div>
                    <div class="stats-bar" data-value="70">
                      <div class="bar-line"></div>
                    </div>
                  </div>
                  <span class="date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="project-item">
                <div class="thumb thumb07"></div>
                <div class="content">
                  <div class="cats">
                    <a href="/#">Technology</a>
                  </div>
                  <div class="author">
                    <img src="images/geTJCeDACag4.jpg" alt="Thumb7" />
                    <a href="/#">James W. Barrows</a>
                  </div>
                  <h5 class="title">
                    <a href="project-details.html">
                      Fundraising For The People And Causes You Care About
                    </a>
                  </h5>
                  <div class="project-stats">
                    <div class="stats-value">
                      <span class="value-title">
                        Levée de fonds de<span class="value">$59,689</span>
                      </span>
                      <span class="stats-percentage">81%</span>
                    </div>
                    <div class="stats-bar" data-value="81">
                      <div class="bar-line"></div>
                    </div>
                  </div>
                  <span class="date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="project-item">
                <div class="thumb thumb08"></div>
                <div class="content">
                  <div class="cats">
                    <a href="/#">Mobile Kits</a>
                  </div>
                  <div class="author">
                    <img src="images/Jpj6FGVms1BC.jpg" alt="Thumb8" />
                    <a href="/#">James W. Barrows</a>
                  </div>
                  <h5 class="title">
                    <a href="project-details.html">
                      COVID-19 Vaccine Have Already Begun Introduced Countries
                    </a>
                  </h5>
                  <div class="project-stats">
                    <div class="stats-value">
                      <span class="value-title">
                        Levée de fonds de <span class="value">$59,689</span>
                      </span>
                      <span class="stats-percentage">73%</span>
                    </div>
                    <div class="stats-bar" data-value="73">
                      <div class="bar-line"></div>
                    </div>
                  </div>
                  <span class="date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="project-item">
                <div class="thumb thumb09"></div>
                <div class="content">
                  <div class="cats">
                    <a href="/#">Business</a>
                  </div>
                  <div class="author">
                    <img src="images/dI1SXCoGaG40.jpg" alt="Thumb9" />
                    <a href="/#">James W. Barrows</a>
                  </div>
                  <h5 class="title">
                    <a href="project-details.html">
                      Mobile First Is Just Not Goodies Enough Meet Journey
                    </a>
                  </h5>
                  <div class="project-stats">
                    <div class="stats-value">
                      <span class="value-title">
                        Levée de fonds de <span class="value">$59,689</span>
                      </span>
                      <span class="stats-percentage">75%</span>
                    </div>
                    <div class="stats-bar" data-value="75">
                      <div class="bar-line"></div>
                    </div>
                  </div>
                  <span class="date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="counter-section-one mt-negative">
        <div class="container primary-bg">
          <div class="row counter-boxes justify-content-xl-between justify-content-center">
            <div class="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div class="counter-box mb-40 icon-left">
                <div class="icon white-color">
                  <i class="flaticon-crowdfunding"></i>
                </div>
                <div class="content white-color">
                  <div class="count-wrap">
                    <span class="count">3598</span>
                    <span class="suffix">+</span>
                  </div>
                  <h6 class="title">We’ve Project Complate</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div class="counter-box mb-40 icon-left">
                <div class="icon white-color">
                  <i class="flaticon-crowdfunding"></i>
                </div>
                <div class="content white-color">
                  <div class="count-wrap">
                    <span class="count">9634</span>
                    <span class="suffix">+</span>
                  </div>
                  <h6 class="title">Global Partners</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div class="counter-box mb-40 icon-left">
                <div class="icon white-color">
                  <i class="flaticon-crowdfunding"></i>
                </div>
                <div class="content white-color">
                  <div class="count-wrap">
                    <span class="count">8565</span>
                    <span class="suffix">+</span>
                  </div>
                  <h6 class="title">Awards Winning</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div class="counter-box mb-40 icon-left">
                <div class="icon white-color">
                  <i class="flaticon-crowdfunding"></i>
                </div>
                <div class="content white-color">
                  <div class="count-wrap">
                    <span class="count">4756</span>
                    <span class="suffix">+</span>
                  </div>
                  <h6 class="title">Active Volunteer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials-section section-gap">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-xl-4 col-lg-6 col-md-8 col-sm-10">
              <div class="testimonials-content mb-lg-50">
                <div class="common-heading mb-30">
                  <span class="tagline">
                    <i class="fas fa-plus"></i> FeedBacks des bénéficiares
                    <span class="heading-shadow-text">Témoignages</span>
                  </span>
                  <h2 class="title">Pourquoi nous choisir</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan totam rem aperiam eaque ipsa
                  quae abillo inventore verit quasi architecto beatae vitae
                  dicta sunt
                </p>
                <a href="testimonial.html" class="main-btn mt-35">
                  Voir tous les témoignages <i class="far fa-arrow-right"></i>
                </a>

                <div
                  class="testimonial-author-boxes wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <h6>Bénéficiaires les plus populaires</h6>
                  <ul class="author-images">
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Donald L. Juarez"
                    >
                      <a href="/#">
                        <img src="images/geTJCeDACag4.jpg" alt="user one" />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Evan A. Ethridge"
                    >
                      <a href="/#">
                        <img src="images/Jpj6FGVms1BC.jpg" alt="user one" />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Donald L. Lewis"
                    >
                      <a href="/#">
                        <img src="images/dI1SXCoGaG40.jpg" alt="user one" />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Marcus L. Duncan"
                    >
                      <a href="/#">
                        <img src="images/DnGahJDePyNl.jpg" alt="user one" />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="Evan A. Ethridge"
                    >
                      <a href="/#">
                        <img src="images/egTSvNxY8pul.jpg" alt="user one" />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="M. Jon Doe"
                    >
                      <a href="/#">
                        <img src="images/GxiyEKmNcLaM.jpg" alt="user one" />
                      </a>
                    </li>
                    <li
                      data-tooltip="true"
                      data-placement="top"
                      data-original-title="More"
                    >
                      <a href="/#" class="more-icon">
                        <i class="far fa-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-10">
              <div class="testimonial-boxes square-shape">
                <div class="row  justify-content-center">
                  <div class="col-lg-6 col-md-6 col-sm-10">
                    <div
                      class="testimonial-box-one wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <div class="author-info">
                        <div class="author-img">
                          <img src="images/geTJCeDACag4.jpg" alt="Thumb10" />
                        </div>
                        <div>
                          <h5 class="name">Howard A. Guest</h5>
                          <p class="position">Web Developer</p>
                        </div>
                      </div>
                      <p class="testimonial-desc">
                        Quis autem vel eum reprehenderit quiea voluptate velit
                        essenih lestiae conseqatur veillum dolorem
                      </p>
                      <div class="rating-wrap">
                        <span>Rating</span>
                        <ul>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div class="author-info">
                        <div class="author-img">
                          <img src="images/dI1SXCoGaG40.jpg" alt="Thumb11" />
                        </div>
                        <div>
                          <h5 class="name">Howard A. Guest</h5>
                          <p class="position">Web Developer</p>
                        </div>
                      </div>
                      <p class="testimonial-desc">
                        Quis autem vel eum reprehenderit quiea voluptate velit
                        essenih lestiae conseqatur veillum dolorem
                      </p>
                      <div class="rating-wrap">
                        <span>Rating</span>
                        <ul>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-10">
                    <div
                      class="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div class="author-info">
                        <div class="author-img">
                          <img src="images/Jpj6FGVms1BC.jpg" alt="Thumb12" />
                        </div>
                        <div>
                          <h5 class="name">Howard A. Guest</h5>
                          <p class="position">Web Developer</p>
                        </div>
                      </div>
                      <p class="testimonial-desc">
                        Quis autem vel eum reprehenderit quiea voluptate velit
                        essenih lestiae conseqatur veillum dolorem
                      </p>
                      <div class="rating-wrap">
                        <span>Rating</span>
                        <ul>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="testimonial-box-one mt-30 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div class="author-info">
                        <div class="author-img">
                          <img src="images/DnGahJDePyNl.jpg" alt="Thumb13" />
                        </div>
                        <div>
                          <h5 class="name">Howard A. Guest</h5>
                          <p class="position">Web Developer</p>
                        </div>
                      </div>
                      <p class="testimonial-desc">
                        Quis autem vel eum reprehenderit quiea voluptate velit
                        essenih lestiae conseqatur veillum dolorem
                      </p>
                      <div class="rating-wrap">
                        <span>Rating</span>
                        <ul>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="emergency-project-with-cta">
        <div class="container">
          {/* <!-- Call to Action --> */}
          <div class="cta-box cta-double-content thumb010">
            <div class="row justify-content-center">
              <div class="col-xl-4 col-lg-5 col-md-9">
                <div class="content">
                  <h2 class="cta-title">
                    Obtenez du financement et du soutien
                  </h2>
                  <p>
                    Sed perspiciatis unde omniste natus error sit voluptatem
                    accusantium doloremque laudan totamrem aperiam eaque quae
                    abille
                  </p>
                  <a href="events.html" class="main-btn">
                    Ajouter un projet <i class="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-xl-2 col-lg-1 cta-double-content-gap"></div>
              <div class="col-xl-4 col-lg-5 col-md-9">
                <div class="content">
                  <h2 class="cta-title">
                    Accéder aux données et aux informations
                  </h2>
                  <p>
                    Sed perspiciatis unde omniste natus error sit voluptatem
                    accusantium doloremque laudan totamrem aperiam eaque quae
                    abille
                  </p>
                  <a href="events.html" class="main-btn">
                    Visiter<i class="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="emergency-project-slider">
          <div class="container">
            <div class="common-heading text-center mb-60">
              <span class="tagline">
                <i class="fas fa-plus"></i> Faire un don
                <span class="heading-shadow-text">Donner</span>
              </span>
              <h2 class="title">Besoins d'urgences</h2>
            </div>
            <div class="row project-slider-two project-items project-style-four">
              <div class="col">
                <div class="project-item">
                  <div class="thumb thumb011"></div>
                  <div class="content">
                    <div class="cats">
                      <a href="/#">Santé</a>
                    </div>

                    <div class="author">
                      <img src="images/geTJCeDACag4.jpg" alt="Thumb14" />
                      <a href="/#">James W. Barrows</a>
                    </div>

                    <h5 class="title">
                      <a href="project-details.html">
                      Collecte de fonds pour les personnes et les causes qui vous intéressent
                      </a>
                    </h5>
                    <div class="project-stats">
                      <div class="stats-value">
                        <span class="value-title">
                          Levée de fonds de <span class="value">$59,689</span>
                        </span>
                        <span class="stats-percentage">83%</span>
                      </div>
                      <div class="stats-bar" data-value="90">
                        <div class="bar-line"></div>
                      </div>
                    </div>
                    <span class="date">
                      <i class="far fa-calendar-alt"></i> 25 February 2021
                    </span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="project-item">
                  <div class="thumb thumb012"></div>
                  <div class="content">
                    <div class="cats">
                      <a href="/#">Santé</a>
                    </div>

                    <div class="author">
                      <img src="images/geTJCeDACag4.jpg" alt="Thumb15" />
                      <a href="/#">James W. Barrows</a>
                    </div>

                    <h5 class="title">
                      <a href="project-details.html">
                      Collecte de fonds pour les personnes et les causes qui vous intéressent
                      </a>
                    </h5>
                    <div class="project-stats">
                      <div class="stats-value">
                        <span class="value-title">
                          Levée de fonds de <span class="value">$59,689</span>
                        </span>
                        <span class="stats-percentage">83%</span>
                      </div>
                      <div class="stats-bar" data-value="90">
                        <div class="bar-line"></div>
                      </div>
                    </div>
                    <span class="date">
                      <i class="far fa-calendar-alt"></i> 25 February 2021
                    </span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="project-item">
                  <div class="thumb thumb013"></div>
                  <div class="content">
                    <div class="cats">
                      <a href="/#">Covid -19</a>
                    </div>

                    <div class="author">
                      <img src="images/geTJCeDACag4.jpg" alt="Thumb16" />
                      <a href="/#">James W. Barrows</a>
                    </div>

                    <h5 class="title">
                      <a href="project-details.html">
                        Fundraising For The People And Causes You Car About
                      </a>
                    </h5>
                    <div class="project-stats">
                      <div class="stats-value">
                        <span class="value-title">
                          Raised of <span class="value">$59,689</span>
                        </span>
                        <span class="stats-percentage">83%</span>
                      </div>
                      <div class="stats-bar" data-value="90">
                        <div class="bar-line"></div>
                      </div>
                    </div>
                    <span class="date">
                      <i class="far fa-calendar-alt"></i> 25 February 2021
                    </span>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="project-item">
                  <div class="thumb thumb014"></div>
                  <div class="content">
                    <div class="cats">
                      <a href="/#">Covid -19</a>
                    </div>

                    <div class="author">
                      <img src="images/geTJCeDACag4.jpg" alt="Thumb17" />
                      <a href="/#">James W. Barrows</a>
                    </div>

                    <h5 class="title">
                      <a href="project-details.html">
                        Fundraising For The People And Causes You Car About
                      </a>
                    </h5>
                    <div class="project-stats">
                      <div class="stats-value">
                        <span class="value-title">
                          Raised of <span class="value">$59,689</span>
                        </span>
                        <span class="stats-percentage">83%</span>
                      </div>
                      <div class="stats-bar" data-value="90">
                        <div class="bar-line"></div>
                      </div>
                    </div>
                    <span class="date">
                      <i class="far fa-calendar-alt"></i> 25 February 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="partners-section section-gap section-border-bottom">
        <div class="container">
          <div class="common-heading mb-30">
            <span class="tagline">
              <i class="fas fa-plus"></i> Our Partners
              <span class="heading-shadow-text">Partners</span>
            </span>
            <h2 class="title">Trusted Partners</h2>
          </div>
          <div class="row partners-logos-one">
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="logo mt-30">
                <a href="/#">
                  <img src="images/MRmS4QCxNMu0.png" alt="Image1" />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="logo mt-30">
                <a href="/#">
                  <img src="images/EkVP03wlKWpY.png" alt="Image2" />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="logo mt-30">
                <a href="/#">
                  <img src="images/IXQI4HBF7e8S.png" alt="Image3" />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="logo mt-30">
                <a href="/#">
                  <img src="images/OQEoVAYS7EHe.png" alt="Image4" />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="logo mt-30">
                <a href="/#">
                  <img src="images/iSgh7WdtAFE2.png" alt="Image5" />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="logo mt-30">
                <a href="/#">
                  <img src="images/Xt9jGSLjSWaj.png" alt="Image6" />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="logo mt-30">
                <a href="/#">
                  <img src="images/5tzz8lIlAkPz.png" alt="Image7" />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="logo mt-30">
                <a href="/#">
                  <img src="images/b9xCqjFjBgLn.png" alt="Image8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="latest-blog-section section-gap">
        <div class="container">
          <div class="common-heading text-center mb-30">
            <span class="tagline">
              <i class="fas fa-plus"></i> Latest News & Blog
              <span class="heading-shadow-text">News Blog</span>
            </span>
            <h2 class="title">Get Every Single Update</h2>
          </div>
          <div class="row justify-content-center latest-blog-posts style-one">
            <div
              class="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="latest-post-box mt-30">
                <div class="post-thumb">
                  <img src="images/aL84y8LXC9Fp.jpg" alt="Image9" />
                </div>
                <div class="post-content">
                  <a href="/#" class="post-date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </a>
                  <h6 class="title">
                    <a href="news-details.html">
                      Standing Out From Crowds mproving Mobile Experience
                    </a>
                  </h6>
                  <a href="news-details.html" class="post-link">
                    Read More <i class="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="latest-post-box mt-30">
                <div class="post-thumb">
                  <img src="images/jyBjDDOfw9i4.jpg" alt="Image10" />
                </div>
                <div class="post-content">
                  <a href="/#" class="post-date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </a>
                  <h6 class="title">
                    <a href="news-details.html">
                      Five Rules Of App Localization China Money Dating And App
                      Store
                    </a>
                  </h6>
                  <a href="news-details.html" class="post-link">
                    Read More <i class="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 col-sm-9 col-11 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="latest-post-box mt-30">
                <div class="post-thumb">
                  <img src="images/UfIoH0T3ctHN.jpg" alt="Image11" />
                </div>
                <div class="post-content">
                  <a href="/#" class="post-date">
                    <i class="far fa-calendar-alt"></i> 25 February 2021
                  </a>
                  <h6 class="title">
                    <a href="news-details.html">
                      How To Use Underlined Text Improve User Experience
                    </a>
                  </h6>
                  <a href="news-details.html" class="post-link">
                    Read More <i class="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
