import React, { useState } from 'react';
import './EvaluationForm.css';
import { motion } from 'framer-motion';

const EvaluationForm = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [smoking, setSmoking] = useState('');
  const [drinking, setDrinking] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ age, weight, smoking, drinking });
  };

  return (
    <motion.div 
      className="evaluation-form-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Health Risk Evaluation</h2>
      <form className="evaluation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Weight:
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Smoking:
            <input type="text" value={smoking} onChange={(e) => setSmoking(e.target.value)} placeholder="e.g., occasionally, daily" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Drinking:
            <input type="text" value={drinking} onChange={(e) => setDrinking(e.target.value)} placeholder="e.g., socially, heavily" />
          </label>
        </div>
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="submit-btn"
        >
          Evaluate
        </motion.button>
      </form>
    </motion.div>
  );
};

export default EvaluationForm;
