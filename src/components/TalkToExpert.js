import React, { useState } from 'react';
import './TalkToExpert.css';

const TalkToExpert = () => {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    alert('Your question has been submitted.');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert('Your email has been sent.');
  };

  return (
    <div className="talk-to-expert">
      <h2>Talk to an Expert</h2>

      <div className="help-section">
        <h3>Ask a Question</h3>
        <form onSubmit={handleQuestionSubmit}>
          <div className="form-group">
            <label htmlFor="question">Your Question:</label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit Question</button>
        </form>
      </div>

      <div className="contact-section">
        <h3>Contact the Team</h3>
        <form onSubmit={handleEmailSubmit}>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default TalkToExpert;
