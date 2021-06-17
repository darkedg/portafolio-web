import About from '../components/Web/About';
import Contact from '../components/Web/Contact';
import Header from '../components/Web/Header';
import Skills from '../components/Web/Skills';
import data from '../data';

const Home = () => {
  const { header, about, skills } = data;

  return (
    <>
      <Header header={header} />
      <About about={about} />
      <Skills skills={skills} />
      <Contact />
    </>
  );
};

export default Home;
