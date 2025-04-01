import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Work.css";
import { div, p, script, ul } from "framer-motion/client";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const cards = [
    { 
        id: 1, 
        title: <p>John Deere: <br/> March 2024-Present</p>, 
        content: 
        <ul>
            <li>Work in an Agile environment and discuss progress during team stand-ups</li>
            <li>Assist with and assign vulnerability tickets generated from our scanning process</li>
            <li>Integrated M&A's AWS environment into vulnerability scanning software deployment process</li>
            <li>Utilized ServiceNow performance analytics to create a dynamic dashboard for Deere's bug bounty program</li>
            <li>Designed and scripted a solution with Python to remove duplicate device entries in Deere's Qualys environment to reduce licensing</li>
        </ul> 
    },
    { 
        id: 2, 
        title: <p>Ames Moose Lodge: <br/> March 2024-July 2024</p>, 
        content: 
        <ul>
            <li>Designed and developed their website using Wix</li>
            <li>Applied design elements based on customer needs</li>
            <li>Shared and discussed progress during monthly meetings</li>
        </ul>  
    },
    { 
        id: 3, 
        title: <p>HomeTown Tech: <br/> June 2023-March 2024</p>, 
        content: 
        <ul>
            <li>Test computer components and manage client data using Parted Magic Software</li>
            <li>Troubleshoot multiple computer configurations and operating systems</li>
            <li>Communicate and quote adequate repair pricing with clients</li>
        </ul>  
    },
    { 
        id: 4, 
        title: <p>Kwik Star: <br/> June 2020-May 2023</p>, 
        content: 
        <ul>
            <li>Perform basic accounting duties and manage money tendered via cash and card payments</li>
            <li>Maintain inventory of sale items and verify the contents of daily truck deliveries</li>
            <li>Operate as a team to keep the store well-stocked and organized for both employees and customers</li>
        </ul>  
    }
];

const Work = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setExpanded(false); // Collapse any expanded card when navigating
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        setExpanded(false); // Collapse any expanded card when navigating
    };

    const handleCardClick = (index) => {
        if (index === activeIndex) {
            // If the clicked card is already active, toggle the expanded state
            setExpanded(!expanded);
        } else {
            // If a different card is clicked, make it active and expand it
            setActiveIndex(index);
            setExpanded(true);
        }
    };

    return (
        <div className="carousel-container">
            <button className="nav-button left" onClick={handlePrev}>
                <ChevronLeft size={32} />
            </button>

            <div className="carousel">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`card ${index === activeIndex ? "active" : ""} ${expanded && index === activeIndex ? "expanded" : ""}`}
                        onClick={() => handleCardClick(index)} // Handle card click
                    >
                        <h3>{card.title}</h3>
                        {expanded && index === activeIndex && (
                            <div className="expanded-content">
                                <p>{card.content}</p>
                                <button className="close-btn" onClick={() => setExpanded(false)}>
                                    <X size={24} />
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button className="nav-button right" onClick={handleNext}>
                <ChevronRight size={32} />
            </button>
        </div>
    );
};

export default Work;