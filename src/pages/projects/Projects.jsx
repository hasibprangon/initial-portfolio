import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "RedDrop-Heroes",
    image: "https://i.ibb.co.com/27bhhjZN/home.png",
    description: "A blood donation website",
    liveLink: "https://nimble-basbousa-ff6eef.netlify.app/",
    githubLink: "https://github.com/hasibprangon/RedDrop-Heroes-client",
  },
  {
    id: 2,
    name: "PeerLearn- Academy",
    image: "https://i.ibb.co.com/Q3Q1z8Gp/Screenshot-1.png",
    description: "An Educational Website",
    liveLink: "https://peerlearn-academy.netlify.app/",
    githubLink:
      "https://github.com/hasibprangon/PeerLearn-Academy-client",
  },
  {
    id: 3,
    name: "Crowdcube",
    image: "https://i.ibb.co.com/7x0kHPk4/crowdcube.png",
    description: "A crowdfunding platform",
    liveLink: "https://rainbow-froyo-779ef7.netlify.app/",
    githubLink:
      "https://github.com/hasibprangon/B10Assignment-10-Crowdcube-Client-",
  },
];

const Projects = () => {
  return (
    <div className="py-10 bg-gray-800 rounded-lg">
      <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold text-white text-center mb-8">
        My Projects
      </h1>
      <div className="container mb-10 mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-4 ">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <Link
                to={`/projectDetails/${project.id}`}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View More
              </Link>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
