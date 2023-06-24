"use client";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../../i18n-config";

const OurWorks = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const dictionary = await getDictionary(lang);

	return (
		<>
			<section className="case-studies-area ptb-100 bg-fcfbfb" id="portifolio">
				<div className="container">
					<div className="section-title">
						<h2>{dictionary?.ourWork.title}</h2>
						<p>{dictionary?.ourWork.text}</p>
					</div>
					<div className="image-grid">
						<div className="image-item">
							<Image
								src="/images/Soul-Port.png"
								className="img-fluid"
								alt="Imagem 1"
								width="300"
								height="300"
								unoptimized
							/>
						</div>
						<div className="image-item">
							<Image
								src="/images/Soul-Buss.png"
								className="img-fluid"
								alt="Imagem 2"
								width="300"
								height="300"
								unoptimized
							/>
						</div>
						<div className="image-item">
							<Image
								src="/images/Soul-App.png"
								alt="Imagem 3"
								width="300"
								height="300"
								unoptimized
							/>
						</div>
						<div className="image-item">
							<Image
								src="/images/Soul-Port.png"
								className="img-fluid"
								alt="Imagem 1"
								width="300"
								height="300"
								unoptimized
							/>
						</div>
						<div className="image-item">
							<Image
								src="/images/Host.png"
								className="img-fluid"
								alt="Imagem 2"
								width="300"
								height="300"
								unoptimized
							/>
						</div>
						<div className="image-item">
							<Image
								src="/images/Soul-Mock.png"
								alt="Imagem 3"
								width="300"
								height="300"
								unoptimized
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default OurWorks;
