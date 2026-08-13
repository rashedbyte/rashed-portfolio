import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Skills from '../pages/Skills/Skills';
import Projects from '../pages/Projects/Projects';
import ProjectDetails from '../pages/Projects/ProjectDetails';
import Experience from '../pages/Experience/Experience';
import Contact from '../pages/Contact/Contact'; // <-- Contact ইমপোর্ট
import NotFound from '../pages/NotFound/NotFound';
import Resume from '../pages/Resume/Resume';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} /> {/* <-- Contact রাউট */}
      <Route path="/resume" element={<Resume />} />

      {/* 404 Catch-all Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;