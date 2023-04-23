import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo2 from '../../src/logoTC.png'
import axios from 'axios';
import Splashr from 'splashr';
import logo1 from '../../src/Time-Capsule-Gif.gif';

const splash1 = (
<div class= "splash-screen1">
  <div className = 'Logo' 
  style={{ display: 'grid', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%', 
          height: '100%',
          position: 'absolute',
          backgroundColor: "#8eecec" }}
    >
    <img style={{ paddingBottom: 150}}src={logo1} alt="Logo" /> 
            
  </div>
</div>
);



function HomePage() {
  const [password, setPassword] = useState('');
  const {username} = useParams();

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
        navigate(`${username}/home`);
      })
      .catch((error) => {
      //display error message to user
      console.error('Login failed', error);
      console.log(error);
      });
  };
  
  return (
    <Splashr splash={splash1} transitionTime={100} minDelay={750}>
      
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  backgroundColor: "#8eecec" }}>
      <div style={{ width: '100%', alignItems: 'center', backgroundColor: "#8eecec" }}>
      <h1 style={{ paddingLeft: '32.2%',width: 800, fontSize: 80 ,fontWeight: "bold", paddingTop: '6%'}}>Time Capsule</h1>
        <div className = 'Logo' style={{ zIndex: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img style={{paddingBottom: 40}}src={logo2} alt="Logo" />
        </div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lobster two' }}>Message Inbox</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <textarea type="text" placeholder='Inbox is empty...'
                  placeholderTextColor="#aaaaaa" rows="25" style={{ marginBottom: '10px' ,height: 200, width: 400,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        fontSize: '20px',
        
        
       }} />
        </div>
        <p style={{paddingBottom: 55, fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>Wanna Create A Message?  <Link to={`/${username}/message`} style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'blue' }}>Create Message</Link></p>
        
      </div>
    </div>
    </Splashr>
    
  );
}

export default HomePage;
