"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from "react";
import Link from "next/link";

class Team extends Component {
  render() {
    return (
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Nosso Time</h2>
            <p>
              Nosso time é composto por profissionais altamente habilidosos e experientes, com expertise em diversas áreas-chave. Temos especialistas em desenvolvimento de software, design de interfaces, gerenciamento de projetos e análise de dados.
            </p>
          </div>

          <div className="row justify-content-center">
            

            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/circle-team2.jpg"
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Johnson Lee</h3>
                  <p>Backend Specialist</p>
                  <ul>
                    <li>
                      <a href="linkedin.com" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/" target="_blank">
                        <i className="icofont-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/circle-team3.jpg"
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Williams Smith</h3>
                  <p>Front-end Specialist</p>
                  <ul>
                    <li>
                      <a href="linkedin.com" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/" target="_blank">
                        <i className="icofont-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="team-card text-center">
                <img
                  src="/images/team/circle-team4.jpg"
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>David Miller</h3>
                  <p>Reactjs Specialist</p>
                  <ul>
                    <li>
                      <a href="linkedin.com" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/" target="_blank">
                        <i className="icofont-dribbble"></i>
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
                  alt="Image"
                  className="rounded-circle"
                />

                <div className="team-caption">
                  <h3>Luiz Brogliatto </h3>
                  <p>Frontend Especialista</p>
                  <ul>
                    <li>
                      <a href="linkedin.com/in/luiz0067" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    
                    <li>
                      <a href="https://github.com/luiz0067yahoo" target="_blank">
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/" target="_blank">
                        <FontAwesomeIcon icon="fa-brands fa-github" />
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
