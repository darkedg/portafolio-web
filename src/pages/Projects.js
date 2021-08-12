import Project from '../components/Web/Project';
import data from '../data';

const Projects = () => {
  const { projects } = data;

  return (
    <>
      <Project projects={projects} id="projects" />
    </>
  );
};

export default Projects;
