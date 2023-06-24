"use client";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../../components/Layouts/Navbar"));
const MainBanner = dynamic(
  () => import("../../components/ItAgency/MainBanner")
);
const About = dynamic(() => import("../../components/DefaultHome/About"));
const OurWorks = dynamic(() => import("../../components/DefaultHome/OurWorks"));
const Services = dynamic(() => import("../../components/DefaultHome/Services"));

const Team = dynamic(() => import("../../components/Common/Team"));

const Partner = dynamic(() => import("../../components/Common/Partner"));
const Footer = dynamic(() => import("../../components/Layouts/Footer"));
import { Locale } from "../../../i18n-config";

//@ts-ignore
export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <>
      <Navbar params={params} />

      <MainBanner params={params} />

      <Services params={params} />

      <About params={params} />

      <Team params={params} />

      <OurWorks params={params} />

      <Partner params={params} />

      <Footer params={params} />
    </>
  );
}
