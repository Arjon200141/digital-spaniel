import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const categories = ["All", "Branding", "Web Design", "Digital Marketing"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const projectImages = [
    "https://i.ibb.co.com/BHCHH5P4/whellies01.png",
    "https://i.ibb.co.com/4Z2dMKh3/newspaper02.png",
    "https://i.ibb.co.com/4nH9LkX0/rider01.png",
    "https://i.ibb.co.com/GQN2QVJf/newspaper.png",
    "https://i.ibb.co.com/ZRjjF8F4/makerek.png",
  ];
  const generateFakeProject = (index) => ({
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    description: faker.lorem.sentence(12),
    category: faker.helpers.arrayElement(categories.slice(1)),
    img: projectImages[index % projectImages.length],
  });
  const allProjects = Array.from({ length: 15 }, (_, i) =>
    generateFakeProject(i)
  );
  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter(
          (p) =>
            p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 5);

  const navigateCategory = (direction) => {
    const currentIndex = categories.indexOf(selectedCategory);
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + categories.length) % categories.length
        : (currentIndex + 1) % categories.length;
    setSelectedCategory(categories[newIndex]);
    setShowAll(false);
  };

  return (
    <div id="work" className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-snug">
          Some of our <br />
          <span className="text-[#19293aa4]">recent projects</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-start md:justify-between gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setShowAll(false);
            }}
            className={`text-lg md:text-xl py-2 transition border-b-4 ${
              selectedCategory === category
                ? "border-[#C0345E] font-semibold text-[#C0345E]"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-lg overflow-hidden shadow-md group min-h-[300px]"
          >
            <img
              src={project.img}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>

            <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
              <p className="mb-6 line-clamp-2">{project.description}</p>
              <button className="border-b-2 border-white pb-1 hover:opacity-80 transition-opacity">
                Full project
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        {filteredProjects.length > 6 && (
          <NavLink to="#">
            <p
              onClick={() => setShowAll(!showAll)}
              className="text-lg md:text-xl border-b-2 border-[#C0345E] hover:text-[#C0345E] transition-colors cursor-pointer"
            >
              {showAll
                ? "Show Less"
                : `See All ${
                    selectedCategory === "All"
                      ? "Projects"
                      : `${selectedCategory} Projects`
                  }`}
            </p>
          </NavLink>
        )}

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigateCategory("left")}
            aria-label="Previous Category"
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={() => navigateCategory("right")}
            aria-label="Next Category"
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
