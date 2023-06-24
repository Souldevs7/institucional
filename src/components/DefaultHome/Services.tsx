"use client";
import React, { Component } from "react";
import Link from "next/link";

import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../../i18n-config";

const Services = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const dictionary = await getDictionary(lang);

	return (
		<>
			<div className="bg-fcfbfb ptb-100 pb-60" id="services">
				<div className="container">
					<div className="section-title">
						<h2>{dictionary?.ourServices.title}</h2>
						<p className="text-justify" style={{ textAlign: "center" }}>
							{dictionary?.ourServices.subtitle}
						</p>
					</div>

					<div className="row justify-content-center ">
						<div className="col-lg-4 col-sm-6 text-center">
							<div className="service-card-one">
								<i className="pe-7s-display2 bg-6610f2 mx-auto"></i>
								<h3>
									<a>{dictionary?.ourServices.solutions.sites.title}</a>
								</h3>
								<p>{dictionary?.ourServices.solutions.sites.text}</p>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 text-center">
							<div className="service-card-one">
								<i className="pe-7s-phone bg-fc3549"></i>
								<h3>
									<a>{dictionary?.ourServices.solutions.apps.title}</a>
								</h3>
								<p>{dictionary?.ourServices.solutions.apps.text}</p>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 text-center">
							<div className="service-card-one">
								<i className="pe-7s-comment bg-13c4a1"></i>
								<h3>
									<a>{dictionary?.ourServices.solutions.consulting.title}</a>
								</h3>
								<p>{dictionary?.ourServices.solutions.consulting.text}</p>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 text-center">
							<div className="service-card-one">
								<i className="pe-7s-light bg-ffb700"></i>
								<h3>
									<a>{dictionary?.ourServices.solutions.business.title}</a>
								</h3>
								<p>{dictionary?.ourServices.solutions.business.text}</p>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 text-center">
							<div className="service-card-one">
								<i className="pe-7s-cart bg-00d280"></i>
								<h3>
									<a>{dictionary?.ourServices.solutions.systems.title}</a>
								</h3>
								<p>{dictionary?.ourServices.solutions.systems.text}</p>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 text-center">
							<div className="service-card-one">
								<i className="pe-7s-refresh-cloud bg-ff612f"></i>
								<h3>
									<a>{dictionary?.ourServices.solutions.hosting.title}</a>
								</h3>
								<p>{dictionary?.ourServices.solutions.hosting.text}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
