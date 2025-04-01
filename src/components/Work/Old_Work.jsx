import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Work.css";
import { div, p } from "framer-motion/client";

const employers = [
    { 
        id: 1, 
        name: "John Deere", 
        color: "#367C2B", 
        job: "Vulnerability Analyst: March 2024 - Present", 
        description:
            <ul>
                <li>Work in an Agile environment and discuss progress during team stand-ups</li>
                <li>Assist with and assign vulnerability tickets generated from our scanning process</li>
                <li>Integrated M&A's AWS environment into vulnerability scanning software deployment process</li>
                <li>Utilized ServiceNow performance analytics to create a dynamic dashboard for Deere's bug bounty program</li>
                <li>Designed and scripted a solution with Python to remove duplicate device entries in Deere's Qualys environment to reduce licensing</li>
            </ul>, 
        image: "src/assets/deere.png"
    },
    { 
        id: 2, 
        name: "HomeTown Tech", 
        color: "#FF9900", 
        job: "Computer Repair Technician: June 2023 - March 2024", 
        description: 
            <ul>
                <li>Test computer components and manage client data using Parted Magic Software</li>
                <li>Troubleshoot multiple computer configurations and operating systems</li>
                <li>Communicate and quote adequate repair pricing with clients</li>
            </ul>,
        image: "src/assets/HTT.png" 
    },
    { 
        id: 3, 
        name: "Ames Moose Lodge", 
        color: "#E82127", 
        job: "Website Developer: March 2024 - July 2024", 
        description:
            <ul>
                <li>Designed and developed their website using Wix</li>
                <li>Applied design elements based on customer needs</li>
                <li>Shared and discussed progress during monthly meetings</li>
            </ul>,
        image: "path/to/tesla-logo.png" 
    },
    { 
        id: 4, 
        name: "Kwik Star", 
        color: "#E82127", 
        job: "Guest and Food Service Co-Worker: June 2020 - May 2023", 
        description:
            <ul>
                <li>Perform basic accounting duties and manage money tendered via cash and card payments</li>
                <li>Maintain inventory of sale items and verify the contents of daily truck deliveries</li>
                <li>Operate as a team to keep the store well-stocked and organized for both employees and customers</li>
            </ul>,
        image: "path/to/tesla-logo.png" 
    },
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
    }, 400);
  };

  const handlePrev = () => {
    setSwingDirection(-1);
    setIsOpen(false);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev - 1 + employers.length) % employers.length);
      setSwingDirection(0);
    }, 400);
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
          {!isOpen ? <h2>{employers[(selectedIndex - 1 + employers.length) % employers.length].name}</h2> : null}
          <div className="door-handle"></div>
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
          {!isOpen ? <h2>{employers[(selectedIndex + 1) % employers.length].name}</h2> : null}
          <div className="door-handle"></div>
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