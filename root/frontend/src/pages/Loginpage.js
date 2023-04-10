import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/logoTC.png';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', justifyContent: 'center', alignItems: 'center' }}>
        <div className = 'Logo' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <img src={logo} alt="Logo" />
        </div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lobster Two', fontStyle: 'italic' }}>Log In</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ marginBottom: '10px' }}>
            Username:
          </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: '10px' }} />
          <label style={{ marginBottom: '10px' }}>
            Password:
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '10px' }} />
          <br />
          <button onClick={handleLogin} style={{ fontWeight: 'bold', marginTop: '10px' }}>Log In</button>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px' }}><Link to="/register" style={{ textDecoration: 'underline', color: 'blue' }}>Create Account</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
