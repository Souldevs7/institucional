"use client";
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../../i18n-config";

import Image from "next/image";
const MainBanner = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const [isOpen, setOpen] = React.useState(false);
  const dictionary = await getDictionary(lang);

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
                    <Image
                      src="/images/souldevs-logo_color-alt.png"
                      className="img-fluid"
                      width="500"
                      height="500"
                      alt="Animate image"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="main-banner-content">
                    <h1>{dictionary?.cta.title}</h1>
                    <p>{dictionary?.cta.text}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        maxWidth: "500px",
                      }}
                    >
                      <a
                        className="btn btn-primary"
                        href="https://wa.me/5531988977180?text=Ol%C3%A1%2C+tudo+bem%3F+Preciso+falar+sobre+um+desenvolvimento+de+TI"
                        target="_blank"
                      >
                        <i className="icofont-brand-whatsapp"></i>
                        {dictionary?.cta.button}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
