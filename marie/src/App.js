import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import InfoSection from './components/infoSection';
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <InfoSection />
    </div>
  );
}

export default App;
