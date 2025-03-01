import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate back to login page
import './forgotpassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    // Simulate sending email for password reset
    setMessage(`An email has been sent to ${email} with instructions to reset your password.`);
    
    // Optionally, navigate back to the login page after a short delay
    setTimeout(() => {
      navigate('/');
    }, 3000); // Redirect back to login after 3 seconds
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Your Password?</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div>
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>

      {message && <div className="confirmation-message">{message}</div>}
    </div>
  );
};

export default ForgotPassword;
