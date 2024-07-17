import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Team from './components/Team';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import UserDashboard from './components/UserDashboard';
import Footer from './components/Footer';
import TalkToExpert from './components/TalkToExpert';
import EvaluationForm from './components/EvaluationForm';
import Blog from './components/Blog'; 
import ChatBotComponents from './components/ChatBotComponents'; 
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} /> {/* Add route for UserDashboard */}
        <Route path="/talktoexpert" element={<TalkToExpert />} />
        <Route path="/evaluation" element={<EvaluationForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <ChatBotComponents /> {/* Add the Chatbot component */}
      <Footer />
    </Router>
  );
};

export default App;
