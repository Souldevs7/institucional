"use client";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class OurWorks extends Component {
  render() {
    return (
      <>
        <section className="case-studies-area ptb-100 bg-fcfbfb">
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
                  src="/images/team/junior.jpg"
                  alt="Imagem 1"
                  width="200"
                  height="200"
                />
              </div>
              <div className="image-item">
                <Image
                  src="/images/team/junior.jpg"
                  alt="Imagem 2"
                  width="200"
                  height="200"
                />
              </div>
              <div className="image-item">
                <Image
                  src="/images/team/junior.jpg"
                  alt="Imagem 3"
                  width="200"
                  height="200"
                />
              </div>
              <div className="image-item">
                <Image
                  src="/images/team/junior.jpg"
                  alt="Imagem 4"
                  width="200"
                  height="200"
                />
              </div>
              <div className="image-item">
                <Image
                  src="/images/team/junior.jpg"
                  alt="Imagem 5"
                  width="200"
                  height="200"
                />
              </div>
              <div className="image-item">
                <Image
                  src="/images/team/junior.jpg"
                  alt="Imagem 6"
                  width="200"
                  height="200"
                />
              </div>
            </div>
            <div className="view-more-work">
              <Link href="/portfolio" legacyBehavior>
                <a className="btn btn-primary">Detalhes</a>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default OurWorks;
