import React, { useState } from 'react';
import './ChatBot.css';

const ChatBotComponents = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, { text: input, user: true }]);
    setInput('');

    const response = getResponse(input);
    setMessages((prevMessages) => [...prevMessages, { text: input, user: true }, { text: response, user: false }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([]);
  };

  const getResponse = (input) => {
    const lowerCaseInput = input.toLowerCase();
    if (lowerCaseInput.includes('project')) {
      return 'The project section provides an overview of what MedGenius is working on. Visit the Project page for more details.';
    } else if (lowerCaseInput.includes('about')) {
      return 'The About section gives information about our mission and vision. Visit the About page to learn more.';
    } else if (lowerCaseInput.includes('team')) {
      return 'Meet the dedicated professionals behind MedGenius on our Team page.';
    } else if (lowerCaseInput.includes('login')) {
      return 'You can login to your account from the Login page. If you don\'t have an account, you can register there as well.';
    } else if (lowerCaseInput.includes('register')) {
      return 'To register, go to the Login page and click on the Register button.';
    } else if (lowerCaseInput.includes('talk to expert')) {
      return 'You can talk to an expert by visiting the Talk to Expert page.';
    } else if (lowerCaseInput.includes('health tips')) {
      return 'Check out the latest health tips in the Health Tips section on our homepage.';
    } else {
      return 'I am sorry, I do not have information on that. Please visit the relevant section of the website.';
    }
  };

  return (
    <div className="chatbot">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/images/MedGenius.png`} alt="MedGenius Logo" className="logo" />
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type your message..."
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={handleReset} className="reset-button">Reset</button>
      </div>
    </div>
  );
};

export default ChatBotComponents;
