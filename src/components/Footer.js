import React from "react";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="footer-content-area">
        <div class="container">
          <div class="footer-widgets">
            <div class="row justify-content-between">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="widget about-widget">
                  <div class="footer-logo">
                    <img src="images/UEqldeNyUyjf.png" alt="Funden" />
                  </div>
                  <p>
                    Contribuer à l'avancement du Royaume en impactant des vies
                  </p>
                  <div class="newsletter-form">
                    <h5 class="form-title">Rejoindre notre NewsLetters</h5>
                    <form action="SaveWeb2zip-order.php" method="POST">
                      <input type="text" placeholder="Adresse mail" />
                      <button type="submit">
                        <i class="far fa-arrow-right"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-5 col-sm-6">
                <div class="widget nav-widget">
                  <h4 class="widget-title">Les projets</h4>
                  <ul>
                    <li>
                      <a href="project-1.html">Medical & Health</a>
                    </li>
                    <li>
                      <a href="project-2.html">Educations</a>
                    </li>
                    <li>
                      <a href="project-1.html">Technology</a>
                    </li>
                    <li>
                      <a href="project-3.html">Web Development</a>
                    </li>
                    <li>
                      <a href="project-2.html">Food & Clothes</a>
                    </li>
                    <li>
                      <a href="project-1.html">Video & Movies</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6">
                <div class="widget nav-widget">
                  <h4 class="widget-title">Support</h4>
                  <ul>
                    <li>
                      <a href="about.html">Politique de confidentialité</a>
                    </li>
                    <li>
                      <a href="contact.html">Conditions</a>
                    </li>
                    <li>
                      <a href="company-overview.html">Company</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ et conditions</a>
                    </li>
                    <li>
                      <a href="contact.html">Contactez-nous</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-auto col-md-5 col-sm-8">
                <div class="widget contact-widget">
                  <h4 class="widget-title">Contactez-nous</h4>
                  <ul class="info-list">
                    <li>
                      <span class="icon">
                        <i class="far fa-phone"></i>
                      </span>
                      <span class="info">
                        <span class="info-title">Numéro de téléphone</span>
                        <a href="/#">+00022899999999</a>
                      </span>
                    </li>
                    <li>
                      <span class="icon">
                        <i class="far fa-envelope-open"></i>
                      </span>
                      <span class="info">
                        <span class="info-title">Adresse mail</span>
                        <a href="/#">
                          <span
                            class="__cf_email__"
                            data-cfemail="3f4c4a4f4f504d4b7f58525e5653115c5052"
                          >
                            givingahand@gmail.com
                          </span>
                        </a>
                      </span>
                    </li>
                    <li>
                      <span class="icon">
                        <i class="far fa-map-marker-alt"></i>
                      </span>
                      <span class="info">
                        <span class="info-title">Localisation</span>
                        <a href="/#">Adidoadin, Lomé - Togo</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-area">
            <div class="row flex-md-row-reverse">
              <div class="col-md-6">
                <ul class="social-icons">
                  <li>
                    <a href="/#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
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
              <div class="col-md-6">
                <p class="copyright-text">
                  © 2022 <a href="/#">GivingAHand</a>. Touts droits réservés
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
