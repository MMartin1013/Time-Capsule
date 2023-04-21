import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo1 from '../../src/Time-Capsule-Clock-Logo.png';
import logo2 from '../../src/logoTC.png'
import axios from 'axios';
import Splashr from 'splashr'

const splash1 = <div class= "splash-screen1">
  <div className = 'Logo' 
  style={{ display: 'grid', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%', 
          height: '100%',
          position: 'absolute',
          backgroundColor: "#8eecec" }}
    >
    <h1 style={{ paddingTop: 22, paddingLeft: 300,width: 800, fontSize: 80 ,fontWeight: "bold" }}>Time Capsule</h1>
    <img style={{paddingLeft: 472, paddingBottom: 390}}src={logo1} alt="Logo" />
            
  </div>
</div>



function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // make HTTP request to server to check login credentials
      const data = JSON.stringify({
        "username": username,
        "password": password
      });
    
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3001/users/',
      headers: {
      'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
      .then((response) => {
        console.log('Login successful');
        console.log(JSON.stringify(response.data));
        // redirect user to home page or dashboard on successful login
        navigate('/home');
      })
      .catch((error) => {
      //display error message to user
      console.error('Login failed', error);
      console.log(error);
      });
  };
  
  return (
    <Splashr splash={splash1} transitionTime={1000} minDelay={500}>
      
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  backgroundColor: "#8eecec" }}>
      <div style={{ alignItems: 'center' }}>
      <h1 style={{ paddingLeft: 300,width: 800, fontSize: 80 ,fontWeight: "bold" }}>Time Capsule</h1>
        <div className = 'Logo' style={{ zIndex: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <img style={{paddingBottom: 40}}src={logo2} alt="Logo" />
        </div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lobster two' }}>Log In</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} style={{ borderRadius: 5,fontSize:20, textAlign: 'center', height: 30, width: 250,marginBottom: '10px' }} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: 5,fontSize:20, textAlign: 'center', height: 30, width: 250, marginBottom: '10px' }} />
          <br />
          <button onClick={handleLogin} style={{fontSize: 15,borderRadius: 5, height: 30, width: 150, fontWeight: 'bold' }}>Submit</button>
        </div>
        <p style={{paddingBottom: 55, fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>Don't have an account?  <Link to="/register" style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'blue' }}>Create Account</Link></p>
        
      </div>
    </div>
    </Splashr>
    
  );
}

export default LoginPage;
