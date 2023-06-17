"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
library.add(fab);

class Team extends Component {
  render() {
    return (
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Nosso Time</h2>
            <p>
              Nosso time é composto por profissionais altamente habilidosos e
              experientes, com expertise em diversas áreas-chave. Temos
              especialistas em desenvolvimento de software, design de
              interfaces, gerenciamento de projetos e análise de dados.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/felipe.jpeg"
                  alt="Imagem do Felipe"
                  className="rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="team-caption">
                  <h3>Felipe abreu</h3>
                  <p>Product Owner</p>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/feliperabreu/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>                                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/junior.jpg"
                  alt="Imagem do Junior"
                  className="rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="team-caption">
                  <h3>Luiz Junior</h3>
                  <p>Tech Leader</p>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/luiz-carlos-s-c-junior-a5582983/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/LSCJunior"
                        target="_blank"
                        style={{ color: "inherit" }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/luiz.png"
                  alt="Imagem do Luiz"
                  className="rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="team-caption">
                  <h3>Luiz Brogliatto</h3>
                  <p>Desenvolvedor Frontend</p>
                  <ul>
                    <li>
                      <a href="linkedin.com/in/luiz0067" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/luiz0067yahoo"
                        target="_blank"
                        style={{ color: "inherit" }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/mayke.jpg"
                  alt="Imagem do Mayke"
                  className="rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="team-caption">
                  <h3>Mayk Gonçalves</h3>
                  <p>Desenvolvedor Full Stack e Artista Digital</p>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/mayktg/"  target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/MaykTG/"
                        target="_blank"
                        style={{ color: "inherit" }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/thiago.jpeg"
                  alt="Imagem do Thiago"
                  className="rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="team-caption">
                  <h3>Thiago Pê</h3>
                  <p>FullStack Developer</p>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/thiago-borges-b230b7141/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/IDarkLoad"
                        target="_blank"
                        style={{ color: "inherit" }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/vinicius.jpg"
                  alt="Imagem do Vinicius"
                  className="rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="team-caption">
                  <h3>Carlos Borges</h3>
                  <p>Fullstack developer</p>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/vinicius-p%C3%AA-borges-baab17191/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/TheVinizzz"
                        target="_blank"
                        style={{ color: "inherit" }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>                   
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/Will.png"
                  alt="Imagem do William"
                  className="rounded-circle"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="team-caption">
                  <h3>William Santos</h3>
                  <p>Full-stack developer</p>
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/william-santos-5a5776bb/" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/wilkhp29"
                        target="_blank"
                        style={{ color: "inherit" }}
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

