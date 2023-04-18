import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/logoTC.png';
import axios from 'axios';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = () => {
    // handle register logic here
    console.log(`Registering with username: ${username} and password: ${password}`);
    axios.post(`http://localhost:3001/users/${username}/${password}`)
      .then(response => {
        console.log('Registration successful:', response.data);
        // redirect to the login page or show a success message
        navigate('/login');
      })
      .catch(error => {
        console.error('Registration failed:', error);
        // show an error message to the user
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <img src={logo} alt="Logo" />
        </div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lobster Two', fontStyle: 'italic' }}>Create Account</h1>
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
          <button onClick={handleRegister} style={{ fontWeight: 'bold', marginTop: '10px' }}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
