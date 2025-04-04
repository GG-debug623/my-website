import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './AuthPage.css';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true); // Track if it's signup or login
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Added missing state
  const [accountType, setAccountType] = useState('plannification');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Handle form submission for Sign Up
  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill out all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    const formData = { username, email, password, accountType };
    console.log('Signup Data:', formData);
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAccountType('plannification');
    
    // After successful signup, redirect to Dashboard
    navigate('/dashboard');
  };

  // Handle form submission for Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    setError('');
    const loginData = { email, password };
    console.log('Login Data:', loginData);
    setEmail('');
    setPassword('');
    
    // After successful login, redirect to Dashboard
    navigate('/dashboard');
  };

  return (
    <>
      <img src="logoo.png" alt="Logo" className="logo" />
      <div className="auth-container">
        <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
        <form onSubmit={isSignup ? handleSignup : handleLogin} className="auth-form">
          {error && <div className="error-message">{error}</div>}

          {isSignup && (
            <div>
              <label htmlFor="username">Username:</label>
              <input
                placeholder='username...'
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <label htmlFor="email">Email:</label>
            <input
              placeholder='email...'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {isSignup && (
            <div>
              <label htmlFor="accountType">Account Type:</label>
              <select
                id="accountType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="plannification">Plannification</option>
                <option value="production">Production</option>
                <option value="magasin">Magasin</option>
              </select>
            </div>
          )}

          <div>
            <label htmlFor="password">Password:</label>
            <input
              placeholder='password...'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isSignup && (
            <div>
              <label htmlFor="confirmPassword">Confirm password:</label>
              <input
                placeholder='confirm password...'
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} // Fixed the setter function
                required
              />
            </div>
          )}

          <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
        </form>

        {!isSignup && (
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>
        )}

        <div className="toggle-form">
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? 'Log In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
