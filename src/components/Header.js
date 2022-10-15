import React from "react";

const Header = () => {
  return (
    <header class="site-header sticky-header transparent-header topbar-transparent">
      <div class="header-topbar d-none d-sm-block">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-auto">
              <ul class="contact-info">
                <li>
                  <a href="/#">
                    <i class="far fa-envelope"></i>{" "}
                    <span
                      class="__cf_email__"
                      data-cfemail="14676164647b6660547379757d783a777b79"
                    >
                      givingahand@gmail.com
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i class="far fa-map-marker-alt"></i> Adidoadin, Lomé - Togo
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-auto d-none d-md-block">
              <ul class="social-icons">
                <li>
                  <a href="/#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i class="fab fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="/#">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-wrapper">
        <div class="container">
          <div class="navbar-inner">
            <div class="site-logo">
              <a href="index.html">
                <img src="images/WhwotKQcH8NC.png" alt="Funden" />
              </a>
            </div>
            <div class="nav-menu">
              <ul>
                <li class="current">
                  <a href="index.html">Accueil</a>
                </li>
                <li>
                  <a href="project-1.html">Projets</a>
                </li>
                <li>
                  <a href="events.html">Events</a>
                </li>
                <li>
                  <a href="news-standard.html">Nouvelles</a>
                </li>
                <li>
                  <a href="/#">A propos</a>
                </li>
                <li>
                  <a href="contact.html">Contacts</a>
                </li>
              </ul>
            </div>
            <div class="navbar-extra d-flex align-items-center">
              <a
                href="events.html"
                class="main-btn nav-btn d-none d-sm-inline-block"
              >
                Donner <i class="far fa-arrow-right"></i>
              </a>
              <a href="/#" class="nav-toggler">
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-menu-panel">
        <div class="panel-logo">
          <a href="index.html">
            <img src="images/UEqldeNyUyjf.png" alt="Funden" />
          </a>
        </div>
        <ul class="panel-menu">
          <li class="current">
            <a href="index.html">Accueil</a>
          </li>
          <li>
            <a href="project-1.html">Projets</a>
          </li>
          <li>
            <a href="events.html">Events</a>
          </li>
          <li>
            <a href="news-standard.html">Nouvelles</a>
          </li>
          <li>
            <a href="/#">A propos</a>
          </li>
          <li>
            <a href="contact.html">Contacts</a>
          </li>
        </ul>
        <div class="panel-extra">
          <a href="/#" class="main-btn btn-white">
            Donner <i class="far fa-arrow-right"></i>
          </a>
        </div>
        <a href="/#" class="panel-close">
          <i class="fal fa-times"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
