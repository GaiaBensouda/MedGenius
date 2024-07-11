// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import About from './About';
import Project from './Project';
import Team from './Team';

const ecgVariants = {
  initial: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const Home = () => {
  return (
    <div className="home" id="home">
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="welcome-title"
      >
        Welcome to MedGenius
      </motion.h2>
      <motion.p 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Your personalized medical treatment advisor powered by AI.
      </motion.p>
      <svg className="ecg-signal" viewBox="0 0 500 100">
        <motion.path
          d="M0 50 H100 V10 H200 V50 H300 V90 H400 V50 H500"
          variants={ecgVariants}
          initial="initial"
          animate="animate"
          stroke="blue"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <About />
      <Project />
      <Team />
    </div>
  );
};

export default Home;
