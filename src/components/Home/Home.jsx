import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-image">
          <img src="./assets/Fair_Profile_Pic.jpg" alt="Sullivan Fair" />
        </div>
        <div className="home-text">
          <h1>Sullivan Fair</h1>
          <p>
            Welcome to Fairly-Good-Software!  
          </p>
          <p>
            I am a software engineering graduate with a minor in cyber security from Iowa State University that currently works at John Deere as a 
            vulnerability analyst. I also enjoy playing guitar and video games in my free time.
          </p>
          <p>
            I am currently searching for full-time opportunites.  Feel free to explore the website and reach out if you have any questions or would like to connect!
          </p>
            <a href="./assets/Sullivan Fair-Resume.pdf" target="_blank">View my Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Home;