"use client";
import LandingSection from "./components/LandingSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />{" "}
      <div className="container mt-24 mx-auto px-12 py-4">
        <LandingSection />
        <ScrollAnimation />
        <AboutSection />
        <div className="mb-44 flex justify-center"><img src="/images/projects/scroll.png" alt="scroll icon by icons8" /></div>
        <ProjectsSection />
        <div className="mt-44 flex justify-center"><img src="/images/projects/scroll.png" alt="scroll icon by icons8" /></div>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
