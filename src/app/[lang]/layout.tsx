import "../../styles/bootstrap.min.css";
import "animate.css";
import "../../styles/icofont.min.css";
import "../../styles/pe-icon-7-stroke.css";
// import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-image-lightbox/style.css";
import "../../styles/style.css";
import "../../styles/responsive.css";
import "../../styles/rtl.css";
import { i18n } from "../../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

import { Inter, Saira, Open_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter-font",
});
const saira = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--saira-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--open-sans-font",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html
      lang={params.lang}
      style={{ overflowX: "hidden", padding: "0 0 0 0" }}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} ${saira.variable} ${openSans.variable}`}
        style={{ overflowX: "hidden", padding: "0 0 0 0" }}
      >
        {children}
      </body>
    </html>
  );
}