"use client";
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const MainBanner = () => {
  const [isOpen, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="hero-banner it-banner overly hero-bg4">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="animate-banner-image">
                    <img
                      src="/images/animate-banner-img1.jpg"
                      alt="Animate image"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1>We're an IT agency</h1>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <Link href="/contact" legacyBehavior>
                      <a className="btn btn-primary">Get Started</a>
                    </Link>

                    <Link href="/#play-video" legacyBehavior>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="btn btn-secondary"
                      >
                        <i className="icofont-ui-play"></i> How it works
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* If you want to change the video need to update below videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="_ysd-zHamjk"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default MainBanner;
