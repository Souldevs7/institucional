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
                          src="https://souldevs.online/admin/media/logo/souldevs-logo_white.svg"
                          width="320"
                          height="100"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <p style={{color:"#eceeef"}}>
                  Nossa empresa de tecnologia impulsiona a inovação, 
                  transformando o mundo digital com soluções inteligentes.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h3 style={{color:"#eceeef"}}>
                    Entrar em contato</h3>

                  <ul className="get-in-touch">
                    <li>
                      <a href="estado" style={{color:"#eceeef"}}>
                        Rio de Janeiro, Brasil.</a>
                    </li>
                    <li>
                      <a href="tel:+55 31 98897-7180" style={{color:"#eceeef"}}>
                        +55 31 98897-7180</a>
                    </li>
                    <li>
                      <a href="mailto:contato@souldevs.online" style={{color:"#eceeef"}}>
                        contato@souldevs.online</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
