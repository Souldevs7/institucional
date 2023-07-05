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
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
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

export const metadata = {
  title: "Souldevs",
  description: "Souldevs - Creating codes with soul",
};

export function generateStaticParams() {
  return [{ locale: "br" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../locales/${locale}/translation.json`))
      .default;
  } catch (error) {
    console.log(error);
  }

  return (
    <html lang={locale} style={{ overflowX: "hidden", padding: "0 0 0 0" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body
        className={`${inter.variable} ${saira.variable} ${openSans.variable}`}
        style={{ overflowX: "hidden", padding: "0 0 0 0" }}
      >
        <NextIntlClientProvider locale={locale} messages={messages ?? {}}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
