import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const categories = ["All", "Branding", "Web Design", "Digital Marketing"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [direction, setDirection] = useState(0);

  const projectImages = [
    "https://i.ibb.co.com/BHCHH5P4/whellies01.png",
    "https://i.ibb.co.com/4Z2dMKh3/newspaper02.png",
    "https://i.ibb.co.com/ZRjjF8F4/makerek.png",
    "https://i.ibb.co.com/GQN2QVJf/newspaper.png",
    "https://i.ibb.co.com/4nH9LkX0/rider01.png",
  ];

  const generateFakeProject = (index) => ({
    id: faker.string.uuid(),
    title: faker.company.catchPhrase(),
    description: faker.lorem.sentence(12),
    category: faker.helpers.arrayElement(categories.slice(1)),
    img: projectImages[index % projectImages.length],
    index: index
  });

  const allProjects = Array.from({ length: 15 }, (_, i) => generateFakeProject(i));
  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  const navigateCategory = (direction) => {
    setDirection(direction === "left" ? -1 : 1);
    const currentIndex = categories.indexOf(selectedCategory);
    const newIndex = direction === "left"
      ? (currentIndex - 1 + categories.length) % categories.length
      : (currentIndex + 1) % categories.length;
    setSelectedCategory(categories[newIndex]);
    setShowAll(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: { duration: 0.2 }
    })
  };

  const tabVariants = {
    inactive: {
      scale: 1,
      color: "#19293aa4",
      borderBottomWidth: "2px",
      borderColor: "rgba(0,0,0,0.5)"
    },
    active: {
      scale: 1.05,
      color: "#000",
      borderBottomWidth: "4px",
      borderColor: "#C0345E",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.02,
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div id="work" className="px-4 sm:px-8 lg:px-[15.625%] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between  items-start md:items-center mb-8 sm:mb-12 lg:mb-[55px] gap-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-8 sm:leading-10 lg:leading-[48px] font-medium pl-2.5 md:pl-0 ">
          Some of our <br />
          <span className="text-[#19293aa4] text-3xl sm:text-4xl md:text-5xl">
            recent projects
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 lg:grid lg:grid-cols-4 lg:gap-0 w-full lg:w-3/4 justify-center md:justify-start mb-8 sm:mb-12 lg:mb-16">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => {
              setDirection(0);
              setSelectedCategory(category);
              setShowAll(false);
            }}
            className={`text-sm sm:text-base lg:text-xl py-1 sm:py-2 w-max lg:w-full`}
            variants={tabVariants}
            initial="inactive"
            animate={selectedCategory === category ? "active" : "inactive"}
            whileHover="hover"
            custom={direction}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={selectedCategory}
          className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={direction}
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`relative rounded-lg overflow-hidden shadow-md group min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] ${selectedCategory === "All" && project.img === "https://i.ibb.co.com/GQN2QVJf/newspaper.png"
                ? "lg:col-span-2"
                : ""
                }`}
              variants={itemVariants}
              custom={direction * (project.index % 2 === 0 ? 1 : -1)}
            >
              <div className="relative w-full h-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {project.img ==="https://i.ibb.co.com/4Z2dMKh3/newspaper02.png" && (
                  <>
                    <div className="absolute open-sans inset-0 bg-black opacity-0 group-hover:opacity-55 transition-opacity duration-300 z-10"></div>
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 sm:mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base mb-4 sm:mb-6 line-clamp-2">
                        {project.description}
                      </p>
                      <button className="text-sm sm:text-base border-b-2 border-white pb-1 w-fit hover:opacity-80">
                        Full project
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="relative mt-8 sm:mt-12 lg:mt-20 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 max-w-xl sm:max-w-full mx-auto">
        {filteredProjects.length > 5 && (
          <NavLink to="#">
            <motion.p
              onClick={() => setShowAll(!showAll)}
              className="text-sm sm:text-base lg:text-xl font-semibold border-b-2 border-[#C0345E] hover:text-[#C0345E] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll
                ? "Show Less"
                : `See All ${selectedCategory === "All"
                  ? "Work"
                  : `${selectedCategory} Projects`
                }`}
            </motion.p>
          </NavLink>
        )}

        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <motion.button
            onClick={() => navigateCategory("left")}
            aria-label="Previous Category"
            className="p-1 sm:p-2 hover:text-white bg-[#50647380] hover:bg-[#19293A] transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            onClick={() => navigateCategory("right")}
            aria-label="Next Category"
            className="p-1 sm:p-2 hover:text-white bg-[#50647380] hover:bg-[#19293A] transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Projects;