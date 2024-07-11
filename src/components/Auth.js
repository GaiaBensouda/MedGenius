// src/components/Auth.js
import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <div className="auth-box">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" required />
            </div>
            <button type="submit" className="auth-button">Login</button>
            <p className="forgot-password">Forgot Password?</p>
          </form>
          <p className="toggle-auth" onClick={toggleAuthMode}>Don't have an account? <span>Register</span></p>
        </div>
      ) : (
        <div className="auth-box">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Surname:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" required />
            </div>
            <button type="submit" className="auth-button">Register</button>
          </form>
          <p className="toggle-auth" onClick={toggleAuthMode}>Already have an account? <span>Login</span></p>
        </div>
      )}
    </div>
  );
};

export default Auth;
