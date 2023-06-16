import React, { Component } from "react";
import Image from "next/image";
class WorkProcess extends Component {
  render() {
    return (
      <section className="work-process-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Work Process</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="work-process">
            <Image
              src="/images/man-with-mobile.png"
              width="320"
              height="50"
              alt="logo"
            />

            <div className="work-process-list">
              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>Surface</h3>
                <span>Visual Design</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-display2"></i>
                </div>
                <h3>Skeleton</h3>
                <span>Wireframes</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-airplay"></i>
                </div>
                <h3>Structure</h3>
                <span>Screen Flow</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-note2"></i>
                </div>
                <h3>Scope</h3>
                <span>Requirements</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-light"></i>
                </div>
                <h3>User Research</h3>
                <span>User Research</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-sun"></i>
                </div>
                <h3>Implement</h3>
                <span>Lunch/Analyse</span>
              </div>
            </div>

            <Image
              src="/images/circle.png"
              width="320"
              height="50"
              className="rotateme circle-image"
              alt="image"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default WorkProcess;
