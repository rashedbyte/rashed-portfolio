import Hero from '../../components/Hero/Hero'; // আপনার Hero ফাইল পাথ
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#0b0d17] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-purple-500/30">
      
      {/* 1. Hero Section */}
      <section id="hero" className="w-full">
        <Hero />
      </section>

      {/* 2. Projects Section */}
      <section id="projects" className="w-full">
        <Projects />
      </section>
      
      {/* 5. About Section */}
      <section id="about" className="w-full">
        <About />
      </section>


      {/* 4. Experience Section */}
      <section id="experience" className="w-full">
        <Experience />
      </section>



      {/* 3. Skills Section */}
      <section id="skills" className="w-full">
        <Skills />
      </section>
      
      {/* 6. Contact Section */}
      <section id="contact" className="w-full">
        <Contact />
      </section>

    </div>
  );
};

export default Home;