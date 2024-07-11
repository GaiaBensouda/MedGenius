// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Team from './components/Team';
import Auth from './components/Auth';
import TalkToExpert from './components/TalkToExpert'; // Import the TalkToExpert component
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contact" element={<TalkToExpert />} />
        </Routes>
      </Router>
    </motion.div>
  );
}

export default App;
