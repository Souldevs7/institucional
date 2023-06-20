// @ts-nocheck
"use client";
import React, { Component } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

class About extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="text-center">
              <h1>Sobre Nós</h1>
              <p style={{ maxWidth: "800px", textAlign: "center", margin: "0 auto 2rem", color: "#474a51" }}>
                Somos uma equipe apaixonada por oferecer soluções de alta qualidade e
                inovadoras para atender às necessidades dos nossos clientes. Com anos de
                experiência no setor, estabelecemos um histórico sólido de sucesso,
                construindo relacionamentos duradouros com empresas de diferentes setores.
              </p>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content about-content-two" style={{textAlign: "right"}}>
                  <div className="section-title">
                  </div>

                  <div className="about-text">
                    <h4>Missão</h4>
                    <p>
                      Nossa missão é utilizar a tecnologia como uma ferramenta
                      poderosa para fazer do mundo um lugar melhor. Através do
                      trabalho conjunto de nossos programadores talentosos e
                      comprometidos, buscamos criar soluções inovadoras que
                      tenham um impacto positivo nas pessoas e na sociedade.
                      Nosso objetivo é utilizar a tecnologia para enfrentar
                      desafios globais, promovendo a inclusão e o progresso.
                    </p>
                  </div>

                  <div className="about-text">
                    <h4>Visão</h4>
                    <p>
                      Ser referencia internacional no fornecimento de soluções
                      tecnológicas inovadoras que transformam a maneira como as
                      pessoas vivem, trabalham e se conectam. Buscamos
                      impulsionar a inovação, criar parcerias de longo prazo com
                      os clientes e ser um parceiro confiável. Nossa visão é ser
                      uma empresa responsável, sustentável e líder no avanço de
                      soluções tecnológicas.
                    </p>
                  </div>

                  <div className="about-text">
                    <h4>Valores</h4>

                    <p>
                      Somos uma empresa inovadora, comprometida
                      com a excelência e a busca por soluções
                      tecnológicas de alto impacto. Valorizamos a
                      colaboração, diversidade e a criação de um
                      legado positivo para as gerações futuras.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                <Image
                    src="/images/group.jpg"
                    width="600"
                    height="600"
                    alt="image"
                    className="rounded-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
