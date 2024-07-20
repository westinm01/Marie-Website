import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import InfoSection from './components/infoSection';
import ParticlesContainer from './components/ParticlesContainer';
import Work from './components/Work.js';
import Education  from './components/Education.js';
import Project from './components/Project.js';
import {motion} from 'framer-motion'
function App() {

  const jobs = [
    {
      title: "Grader",
      location: "University of California, Riverside",
      date: "Jan 2021 - Present",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Uc_riverside_textlogo.png",
      description:[
        "Grade 200 homework submissions weekly",
        "Grade ~80 student code demos weekly"
      ],
      tags: ["Patience", "Assembly Programming"]
    },

    {
      title: "Software Driven Experience Intern",
      location: "Stellantis",
      date: "June 2023 - Aug 2023",
      image: "https://pbs.twimg.com/profile_images/1350691793394946048/sc3Hpcsr_200x200.png",
      description:[
        "Analyzed key performance indicators (KPIs) and developed software solutions in JavaScript",
        "Contributed to the creation and integration of connected services using AWS and DynamoDB",
          "Adhered to established software development processes throughout the project lifecycle, creating multiple pages of documentation for the team in the process"
      ],
      tags: ["AWS", "DynamoDB", "JavaScript", "Agile"]
    },

  ]

  const educations = [
    {
      degree: "B.S. - Computer Science",
      dates: "Sept 2022 - June 2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Uc_riverside_textlogo.png",
      university: "University of California, Riverside",
    },

    {
      degree: "A.S. - Computer Science",
      dates: "Sept 2020 - June 2022",
      image : "https://venturacollegefoundation.org/wp-content/uploads/2020/08/VC_seal09.png",
      university: "Ventura College",
    }
  ]

  const projects = [
    {
      title: "NOTE",
      date: "June 2024",
      desc: "Person-following shopping cart robot!",
      images: ["/note.jpg"],
      tags: ["Python", "Embedded Systems", "Computer Vision"]
    },
    {
      title: "Starting Today",
      date: "May 2024",
      desc: "The amazing task scheduler",
      images: ["/st3.png", "/st2.png"],
      tags: ["Flutter", "Firebase", "Dart", "REST API"]
    },
    {
      title: "Attendance Tracker",
      date: "March 2024",
      desc: "Identifies the faces of students for easy attendance tracking.",
      images: ["/attendancetracker.jpg"],
      tags: ["PYNQ Z2 Board", "Raspberry Pi", "Computer Vision"]
    },


    {
      title: "Guitarduino",
      date: "December 2023",
      desc: "Guitar Hero, but on Arduino!",
      images: ["/gitarduino.jpg"],
      tags: ["C++", "Embedded Systems", "Arduino"]
    },
    {
      title: "Pokemon Duels",
      date: "June 2023",
      desc: "Objective: Developed a personalized Pokémon game in C++ with a unique storyline, featuring character and equipment selection, combat, and inventory management."+
"User Interface: Simple graphics with a text-based interface for navigation and interactions, including a personality quiz for character assignment."+
"Class Design: Implemented SOLID principles with a clear class hierarchy, including classes for display, map menu, and battle management."+
"Installation/Usage: Clone the repository, build with cmake and make, then run the game to explore maps, battle, and save progress.",
      images: ["/pkmn.png"],
      tags: ["C++", "Modular Compilation", "Design Patterns", "OOP"]
    },



  ]

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
            <a href="/mw_resume.pdf" target="_blank" rel="noopener noreferrer"><motion.button whileHover = {{scale: 1.05}} whileTap = {{scale: 0.9}}id = "resumeButton" className = "retroFont">View my resume</motion.button></a>
            
          </div>
          <img src = "/m_and_d_3.jpg" alt = "Marie Wolfel" className = "infoSectionImage"/>
      </InfoSection>

      <section id = "about"></section>
      <InfoSection title = "About Me">
        <div style = {{"width" : "100%"}}> {educations.map((edu, index) => {return  <>{index ?<hr style = {{"width": "100%", "borderWidth" : "3px", "border-style": "none","border-top": "dashed"}}/>: ""}<Education degree = {edu.degree} dates = {edu.dates} image = {edu.image} university = {edu.university}></Education></>})}</div>
        </InfoSection>
        
      <section id = "work"></section>
      <InfoSection title = "Work">
        <div style = {{"width": "100%"}}>{jobs.map((job, index) => {return <>{index ? <hr style = {{"width": "100%", "borderWidth" : "3px", "border-style": "none","border-top": "dashed"}}/>: ""}<Work title = {job.title} location = {job.location} date = {job.date} image = {job.image} desc = {job.description} tags = {job.tags}/></>})}</div>
        </InfoSection>

        <section id = "projects"></section>
        <InfoSection title = "Projects">
          <div style = {{"width": "100%"}}>{projects.map((project, index) => {return <>{index ? <hr style = {{"width": "100%", "borderWidth" : "3px", "border-style": "none","border-top": "dashed"}}/>: ""}<Project title = {project.title} index = {index} date = {project.date} desc = {project.desc} images = {project.images} tags = {project.tags}/></>})}</div>
        </InfoSection>
        <section id = "contact"></section>
        <InfoSection title = "Contact">
        </InfoSection>
      
    </div>
  );
}

export default App;
