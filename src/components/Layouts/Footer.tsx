"use client";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    
    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/" legacyBehavior>
                      <a>
                        <Image
                          src="https://souldevs.online/admin/media/logo/souldevs-logo_color.svg"
                          width="320"
                          height="100"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="linkedin.com" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h3>Entrar em contato</h3>

                  <ul className="get-in-touch">
                    <li>
                      <i className="icofont-home"></i> 2750 Quadra Street
                      Victoria, Canada.
                    </li>
                    <li>
                      <i className="icofont-live-support"></i>
                      <a href="tel:+324-9442-515">+55 31 98897-7180</a>
                    </li>
                    <li>
                      <i className="icofont-envelope"></i>
                      <a href="mailto:contato@souldevs.online">contato@souldevs.online</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
