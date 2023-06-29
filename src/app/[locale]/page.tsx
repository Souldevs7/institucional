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

//@ts-ignore
export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Services />

      <About />

      <Team />

      <OurWorks />

      <Partner />

      <Footer />
    </>
  );
}
