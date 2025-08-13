import React, { useState, useEffect } from "react";
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
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  const navigateCategory = (direction) => {
    setDirection(direction === "left" ? -1 : 1);
    const currentIndex = categories.indexOf(selectedCategory);
    const newIndex =
      direction === "left"
        ? (currentIndex - 1 + categories.length) % categories.length
        : (currentIndex + 1) % categories.length;
    setSelectedCategory(categories[newIndex]);
    setShowAll(false);
  };

  // Animation variants
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
    <div id="work" className="px-4 sm:px-8 lg:px-[15.625%] py-12 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h2 className="w-fit text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[44px] lg:leading-[48px] font-medium banner2">
          Some of our <br />
          <span className="text-[#19293aa4] text-[28px] sm:text-[36px] lg:text-[48px]">
            recent projects
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 w-3/4 justify-start mb-12 sm:gap-6 lg:gap-0">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => {
              setDirection(0);
              setSelectedCategory(category);
              setShowAll(false);
            }}
            className={`text-base sm:text-lg md:text-xl py-2 transition-all`}
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
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          custom={direction}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative rounded-lg overflow-hidden shadow-md group min-h-[300px]"
              variants={itemVariants}
              custom={direction * (index % 2 === 0 ? 1 : -1)}
            >
              <img
                src={project.img}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
                  project.img === "https://i.ibb.co.com/4Z2dMKh3/newspaper02.png" 
                    ? "group-hover:scale-110" 
                    : ""
                }`}
              />

              {project.img === "https://i.ibb.co.com/4Z2dMKh3/newspaper02.png" && (
                <>
                  <motion.div 
                    className="absolute inset-0 bg-black/0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                    <motion.h3 
                      className="text-xl sm:text-2xl font-medium mb-3"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="mb-6 line-clamp-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1.0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.button 
                      className="border-b-2 border-white pb-1 w-fit hover:opacity-80 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                    >
                      Full project
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="relative mt-10 flex flex-col sm:flex-row justify-between items-center gap-6 max-w-xl sm:max-w-full mx-auto">
        {filteredProjects.length > 6 && (
          <NavLink to="#">
            <motion.p
              onClick={() => setShowAll(!showAll)}
              className="text-base sm:text-lg md:text-xl font-semibold border-b-2 border-[#C0345E] hover:text-[#C0345E] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll
                ? "Show Less"
                : `See All ${
                    selectedCategory === "All"
                      ? "Work"
                      : `${selectedCategory} Projects`
                  }`}
            </motion.p>
          </NavLink>
        )}

        <div className="flex items-center justify-end gap-4">
          <motion.button
            onClick={() => navigateCategory("left")}
            aria-label="Previous Category"
            className="p-2 hover:text-white bg-[#50647380] hover:bg-[#19293A] transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={() => navigateCategory("right")}
            aria-label="Next Category"
            className="p-2 hover:text-white bg-[#50647380] hover:bg-[#19293A] transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Projects;