import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; // We'll create this CSS file later

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", email); // Save user session
      navigate('/dashboard'); // Redirect to dashboard
    }
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
      </form>
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
};

export default AuthPage;
