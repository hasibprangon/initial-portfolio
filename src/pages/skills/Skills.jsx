import Slider from "react-slick";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { id: 1, icon: <FaHtml5 />, name: "HTML" },
  { id: 2, icon: <FaCss3Alt />, name: "CSS" },
  { id: 3, icon: <FaJs />, name: "JavaScript" },
  { id: 4, icon: <FaReact />, name: "React" },
  { id: 5, icon: <FaNodeJs />, name: "Node.js" },
  { id: 6, icon: <SiExpress />, name: "Express" },
  { id: 7, icon: <SiFirebase />, name: "Firebase" },
  { id: 8, icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { id: 9, icon: <SiBootstrap />, name: "Bootstrap" },
  { id: 10, icon: <SiMongodb />, name: "MongoDB" },
  { id: 11, icon: <FaGithub />, name: "GitHub" },
  { id: 12, icon: <SiNextdotjs />, name: "Next.js" },
];

const Skills = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-800 py-10  rounded-lg">
      <h1 className="text-white tetx-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">
        My Skills
      </h1>
      <div className="container mx-auto px-5">
        <Slider {...settings}>
          {skills.map((skill) => (
            <div key={skill.id} className="p-2 mb-8">
              <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 h-32 md:h-40 lg:h-48">
                <div className="text-4xl md:text-5xl lg:text-6xl text-blue-600">
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm md:text-base lg:text-lg font-medium">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
