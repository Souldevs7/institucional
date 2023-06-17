"use client";
import React, { Component } from "react";
import Image from "next/image";
class WorkProcess extends Component {
  render() {
    return (
      <>
        <section className="work-process-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>Nosso Processo de Trabalho</h2>
              <p>
                A criação de uma tecnologia passa por etapas como pesquisa,
                 identificação de necessidades, definição de requisitos e 
                 desenvolvimento de funcionalidades.
              </p>
            </div>

            <div className="work-process">
              <Image
                src="/images/man-mobile.png"
                width="490"
                height="940"
                alt="logo"
              />

              <div className="work-process-list">
                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-display1"></i>
                  </div>
                  <h3>Planejamento</h3>
                  <span>Análise técnica</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-display2"></i>
                  </div>
                  <h3>Desenvolvimento</h3>
                  <span>Escalabilidade do sistema</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-airplay"></i>
                  </div>
                  <h3>Usabilidade</h3>
                  <span>interação ao usuário</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-note2"></i>
                  </div>
                  <h3>Testes e qualidade</h3>
                  <span>Testes de desempenho</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-light"></i>
                  </div>
                  <h3>Manutenção</h3>
                  <span>Atualizações de segurança</span>
                </div>

                <div className="single-work-process">
                  <div className="icon">
                    <i className="pe-7s-sun"></i>
                  </div>
                  <h3>Arquitetura</h3>
                  <span>Padrão/Tecnologias</span>
                </div>
              </div>

              <Image
                src="/images/circle.png"
                width="1000"
                height="1000"
                className="rotateme circle-image"
                alt="image"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default WorkProcess;
