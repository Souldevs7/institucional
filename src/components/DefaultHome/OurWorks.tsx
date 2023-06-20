"use client";
import React, { Component } from "react";
import Link from "next/link";

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
                <img src="/images/team/junior.jpg" alt="Imagem 1" style={{ width: "300px", height: "300px" }} />
              </div>
              <div className="image-item">
                <img src="/images/team/junior.jpg" alt="Imagem 2" style={{ width: "300px", height: "300px" }}/>
              </div>
              <div className="image-item">
                <img src="/images/team/junior.jpg" alt="Imagem 3" style={{ width: "300px", height: "300px" }}/>
              </div>
              <div className="image-item">
                <img src="/images/team/junior.jpg" alt="Imagem 4" style={{ width: "300px", height: "300px" }}/>
              </div>
              <div className="image-item">
                <img src="/images/team/junior.jpg" alt="Imagem 5" style={{ width: "300px", height: "300px" }}/>
              </div>
              <div className="image-item">
                <img src="/images/team/junior.jpg" alt="Imagem 6" style={{ width: "300px", height: "300px" }}/>
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

