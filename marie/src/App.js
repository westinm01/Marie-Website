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

          <div className = "text" style = {{margin: "auto"}}>
            <p>I'm a space enthusiast with a bachelor's degree in Computer Science. While I may not have professional experience just yet, my passion for embedded systems has led me to build a solid foundation in Python, C++, and C. Whether it's coursework or personal projects, I'm always tinkering with something!</p>
          
            <p>My dream? To work in the aerospace industry. Right now, I'm on the lookout for an entry-level position in embedded software development or software engineering.</p>
            
            <p>On the right, I also have my trusty sidekick, Dijkstra. He's my coding companion, always ready to lend a paw when the projects get tough. Thanks for stopping by my website!</p>
            <a href="/mw_resume.pdf" target="_blank" rel="noopener noreferrer">View my resume</a>
            
          </div>
          <img src = "/m_and_d_3.jpg" alt = "Marie Wolfel" className = "infoSectionImage"/>

      </InfoSection>
      
    </div>
  );
}

export default App;
