import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Your existing login logic
    if (username === 'sowntharya' && password === '1234') {
      alert('Logged in successfully!');
      navigate('/home');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleSignUp = () => {
    // Navigate to /signup when the "SignUp" button is clicked
    navigate('/signup');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form style={styles.form}>
        <label style={styles.label}>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} style={styles.input} />
        </label>
        <label style={styles.label}>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} style={styles.input} />
        </label>
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
        <br />
        <button type="button" onClick={handleSignUp} style={styles.button}>
          SignUp
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    backgroundColor: '#e0ffff', // Set the background color
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    marginBottom: '15px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4b0082',
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

// Applying body styles directly to the body
Object.assign(document.body.style, styles.body);

export default LoginPage;
