import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import InfoSection from './components/infoSection';
import ParticlesContainer from './components/ParticlesContainer';

function App() {
  return (
    <div className="App">
      <div id = "particles" style = {{"z-index": 2}}>
        <ParticlesContainer />
      </div>
      <Navbar />
      
      <InfoSection title = "Hello, world! My name is Marie">

          <div style = {{margin: "auto"}}>
            <p>I have a bachelor's degree in Computer Science, and although I don't have professional experience yet, I have a strong foundation in C and C++ programming from my coursework and personal projects.</p>
            <p>I am passionate about space technology and excited about the opportunity to contribute to the development of high-performance space systems.</p>
          </div>
          <img src = "/marie-dijkstra-2.jpg" alt = "Marie Wolfel" className = "infoSectionImage"/>

      </InfoSection>
      
    </div>
  );
}

export default App;
