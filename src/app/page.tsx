import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        backgroundImage: "linear-gradient(var(--accent-glow) 1px, transparent 1px), linear-gradient(90deg, var(--accent-glow) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none z-0"
        style={{ backgroundColor: "var(--accent)", opacity: 0.04 }} />
      <ScrollUI />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}