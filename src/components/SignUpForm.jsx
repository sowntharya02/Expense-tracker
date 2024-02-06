import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = () => {
    // Check for empty input fields
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all the fields.');
      return;
    }

    // You can add your signup logic here
    if (password !== confirmPassword) {
      setError("Passwords don't match. Please try again.");
    } else {
      // Perform signup logic here (e.g., send data to the server)
      alert('Signup successful!');
      // Redirect to the home page after successful signup
      navigate('/home');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
