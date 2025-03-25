import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Home from "./components/Home/Home";
import './App.css'
import Starfield from 'react-starfield';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Navbar/>
      <section id="home"><Home /></section>
      <section id="work"><Work /></section>
    </div>
  )
}

export default App
