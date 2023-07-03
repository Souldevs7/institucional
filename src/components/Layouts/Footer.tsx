"use client";
import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = async () => {
  const t = useTranslations();

  return (
    <>
      <footer className="footer-area" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="#navbar">
                    <Image
                      src="https://soudevs.online/admin/media/logo/souldevs-logo_white.svg"
                      width="320"
                      height="100"
                      alt="image"
                    />
                  </Link>
                </div>
                <p style={{ color: "#eceeef" }}>
                  {t("footerInfo.companyText")}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6"></div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3 style={{ color: "#eceeef" }}>
                  {t("footerInfo.contactMessage")}
                </h3>

                <ul className="get-in-touch">
                  <li>
                    <a
                      href="tel:+55 31 98897-7180"
                      style={{ color: "#eceeef" }}
                    >
                      +55 31 98897-7180
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contato@souldevs.online"
                      style={{ color: "#eceeef" }}
                    >
                      contato@souldevs.online
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
