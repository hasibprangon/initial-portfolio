import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

const ProjectDetails = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProject = data.find(
          (project) => project.id === parseInt(id)
        );
        setProject(selectedProject);
      });
  }, [id]);

  if (!project) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-5 mt-10 bg-gray-800 p-10 text-white rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
          <p className="text-lg mb-4">{project.description}</p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Technologies:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Challenges:</h3>
            <p>{project.challenges}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Future Plans:</h3>
            <p>{project.futurePlans}</p>
          </div>

          {/* Live Link and GitHub Link */}
          <div className="mt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mr-4"
            >
              Live Project
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              GitHub Repository
            </a>
          
          </div>
          <Link className="text-blue-500 hover:text-blue-700 mr-4" to="/">Go Back home</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
