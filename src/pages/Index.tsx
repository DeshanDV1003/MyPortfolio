import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navigation (links to sections with #ids) */}
      <Navigation />

      <main className="flex flex-col items-center gap-4 mt-10 w-full">
        {/* Hero / intro section */}
        <section id="home" className="w-full max-w-4xl">
          <Hero />
        </section>

        {/* About section */}
        <section id="about" className="mt-16 w-full max-w-4xl">
          <About />
        </section>

        {/* Experience section */}
        <section id="experience" className="mt-16 w-full max-w-4xl">
          <Experience />
        </section>

        {/* Projects section */}
        <section id="projects" className="mt-16 w-full max-w-4xl">
          <Projects />
        </section>

        {/* Contact section */}
        <section id="contact" className="mt-16 mb-16 w-full max-w-4xl">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
