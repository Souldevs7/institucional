"use client";
import React, { Component, useState } from "react";
import Image from "next/image";

import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../../i18n-config";

const Partner = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const dictionary = await getDictionary(lang);

	return (
		<section className="partner-area pt-100 pb-60" id="parceiros">
			<div className="container">
				<div className="section-title">
					<h2>{dictionary?.ourPartners}</h2>
					<div className="image-grid">
						<div className="image-item">
							<Image
								src="/images/ignite.png"
								className="img-fluid"
								alt="Imagem 1"
								width="200"
								height="200"
								unoptimized
							/>
						</div>
						<div className="image-item">
							<Image
								src="/images/lithium.png"
								className="img-fluid"
								alt="Imagem 1"
								width="200"
								height="200"
								unoptimized
							/>
						</div>
						<div className="image-item">
							<Image
								src="/images/BYJR.png"
								className="img-fluid"
								alt="Imagem 1"
								width="200"
								height="200"
								unoptimized
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Partner;
