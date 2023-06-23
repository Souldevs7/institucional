// @ts-nocheck

import React, { useEffect } from "react";
import Link from "../../utils/ActiveLink";
import Image from "next/image";
import { getDictionary } from "../../get-dictionary";
const Navbar = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const dictionary = await getDictionary(lang);

  const toggleNavbar = () => {
    setCollapsed((old) => !old);
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="#services">
                    <a className="nav-link">{dictionary?.services}</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#quemsomos">
                    <a className="nav-link">{dictionary?.who_we_are}</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#portifolio">
                    <a className="nav-link">{dictionary?.portfolio}</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#parceiros">
                    <a className="nav-link">{dictionary?.partners}</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#contact">
                    <a className="nav-link">{dictionary?.contact}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
