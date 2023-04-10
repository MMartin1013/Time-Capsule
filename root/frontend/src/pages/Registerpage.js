import React, { useState } from 'react';
import logo from '../../src/logoTC.png';


function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // handle register logic here
    console.log(`Registering with username: ${username}, email: ${email}, and password: ${password}`);
    //axios.get()
    //axios.post("http://localhost3001/username/password");
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
            Email:
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: '10px' }} />
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
