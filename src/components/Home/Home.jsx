import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-image">
          <img src="src/assets/Fair_Profile_Pic.jpg" alt="Sullivan Fair" />
        </div>
        <div className="home-text">
          <h1>Sullivan Fair</h1>
          <p>
            Welcome to my portfolio! I am a passionate software developer with experience in building dynamic and responsive web applications. I enjoy solving complex problems and creating user-friendly solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;