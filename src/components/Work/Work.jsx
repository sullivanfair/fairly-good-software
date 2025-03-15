import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Work.css";

const employers = [
  { id: 1, name: "John Deere", color: "#367C2B", job: "Vulnerability Analyst", description: "Worked on AI-driven search enhancements.", image: "/src/assets/deere.png" },
  { id: 2, name: "HomeTown Tech", color: "#FF9900", job: "Cloud Developer", description: "Developed AWS cloud solutions.", image: "../../assets/HTT.png" },
  { id: 3, name: "Ames Moose Lodge", color: "#E82127", job: "Embedded Engineer", description: "Optimized firmware for autonomous vehicles.", image: "path/to/tesla-logo.png" },
  { id: 4, name: "Kwik Star", color: "#E82127", job: "Embedded Engineer", description: "Optimized firmware for autonomous vehicles.", image: "path/to/tesla-logo.png" },
];

const WorkExperience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [swingDirection, setSwingDirection] = useState(0);

  const handleNext = () => {
    setSwingDirection(1);
    setIsOpen(false);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev + 1) % employers.length);
      setSwingDirection(0);
    }, 400); // Adjust the timeout to match the animation duration
  };

  const handlePrev = () => {
    setSwingDirection(-1);
    setIsOpen(false);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev - 1 + employers.length) % employers.length);
      setSwingDirection(0);
    }, 400); // Adjust the timeout to match the animation duration
  };

  const toggleDoor = () => setIsOpen(!isOpen);

  return (
    <div className="work-experience">
      <button onClick={handlePrev} className="nav-button">←</button>

      <div className="doors-container">
        <motion.div
          className="door prev-door"
          style={{ backgroundColor: employers[(selectedIndex - 1 + employers.length) % employers.length].color }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img src={employers[(selectedIndex - 1 + employers.length) % employers.length].image} alt={`${employers[(selectedIndex - 1 + employers.length) % employers.length].name} logo`} />
        </motion.div>

        <motion.div
          className="door"
          onClick={toggleDoor}
          style={{ backgroundColor: employers[selectedIndex].color }}
          animate={{ rotateY: isOpen ? -110 : 0, rotateZ: swingDirection === 1 ? [0, 15, 0] : swingDirection === -1 ? [0, -15, 0] : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img src={employers[selectedIndex].image} alt={`${employers[selectedIndex].name} logo`} />
          {!isOpen ? <h2>{employers[selectedIndex].name}</h2> : null}
          <div className="door-handle"></div>
        </motion.div>

        <motion.div
          className="door next-door"
          style={{ backgroundColor: employers[(selectedIndex + 1) % employers.length].color }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img src={employers[(selectedIndex + 1) % employers.length].image} alt={`${employers[(selectedIndex + 1) % employers.length].name} logo`} />
        </motion.div>
      </div>

      {isOpen && (
        <motion.div className="job-details" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3>{employers[selectedIndex].job}</h3>
          <p>{employers[selectedIndex].description}</p>
          <button onClick={toggleDoor}>Close Door</button>
        </motion.div>
      )}

      <button onClick={handleNext} className="nav-button">→</button>
    </div>
  );
};

export default WorkExperience;