"use client";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class OurWorks extends Component {
  render() {
    return (
      <>
        <section className="case-studies-area ptb-100 bg-fcfbfb" id="portifolio">
          <div className="container">
            <div className="section-title">
              <h2>Nosso Trabalho</h2>
              <p>
                Comprometidos com a excelência, entregamos resultados que
                superam expectativas, garantindo que cada projeto seja executado
                com qualidade, inovação e dedicação
              </p>
            </div>
            <div className="image-grid">
              <div className="image-item">
                <Image
                  src="/images/Soul-Port.png"
                  className="img-fluid"
                  alt="Imagem 1"
                  width="300"
                  height="300"
                  unoptimized
                />
              </div>
              <div className="image-item">
                <Image
                  src="/images/Soul-Buss.png"
                  className="img-fluid"
                  alt="Imagem 2"
                  width="300"
                  height="300"
                  unoptimized
                />
              </div>
              <div className="image-item">
                <Image
                  src="/images/Soul-App.png"
                  alt="Imagem 3"
                  width="300"
                  height="300"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default OurWorks;
