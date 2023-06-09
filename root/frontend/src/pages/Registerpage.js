import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../src/logoTC.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Splashr from 'splashr';
import logo1 from '../../src/Time-Capsule-Gif.gif';


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
    <img style={{ paddingBottom: 150}}src={logo1} alt="Logo" />       
  </div>
</div>


function RegisterPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const disclaimer = () => { alert( `
                              *** TERMS OF SERVICE ***
  THE USE OF ANY ASPECT OF TIME CAPSULE IS AT YOUR
    OWN RISK THE MATERIAL PRESENTED THROUGH THE
         USE OF THIS APPLICATION IS INTENDED FOR
    ENTERTAINMENT PURPOSES ONLY. TIME CAPSULE
   AND AFFILIATES WILL NOT BE HELD RELIABLE FOR 
    ANY CONTENT DISTRIBUTED THROUGH THE USE OF 
         THIS APPLICATION. WE CANNOT ACCEPT ANY
    LIABILITY WHATSOEVER IN RESPECT OF ANY SUCH
    CONTENT WHICH IS PROVIDED BY THIRD PARTIES
         AND/OR ANY OTHER USERS OF THE SERVICE. 
      ANY ACTIONS YOU TAKE BASED ON CONTENT, 
    NOTIFICATIONS AND OTHERWISE PROVIDED BY THE
        SERVICE ARE TAKEN AT YOUR SOLE RISK. YOU
          SHOULD ALWAYS CHECK ANY INFORMATION 
         PROVIDED THROUGH THE SERVICE TO ENSURE
                                     ITS ACCURACY.`);
  };

  const handleRegister = () => {
    // handle register logic here

    if (password !== confirmPassword) {
      alert(`                                          **  ERROR  **
                             PASSWORDS DO NOT MATCH`)
      return
    }

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
      console.log(JSON.stringify(response.data));
      navigate('/login');
      })
      .catch((error) => {
      console.log(error);
      setErrorMessage("User Already Exists!")
      });
  };

  return (
    <Splashr splash={splash1} transitionTime={100} minDelay={750}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: "#8eecec" }}>
      <div style={{ alignItems: 'center' }}>
      <h1 style={{justifyContent: 'center', paddingLeft: 300,width: 800, fontSize: 80 ,fontWeight: "bold" }}>Time Capsule</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <img src={logo} alt="Logo" />
        </div>
        <h1 style={{paddingBottom: 0, textAlign: 'center', fontFamily: 'Lobster two' }}>Create Account</h1>
        {errorMessage && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center'}}>{errorMessage}</p>}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         
          <input type="username" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} style={{ borderRadius: 5,fontSize:20, textAlign: 'center', height: 30, width: 250, marginBottom: '10px' }} />
          
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: 5,fontSize:20, textAlign: 'center', height: 30, width: 250, marginBottom: '10px'}} />

          <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ borderRadius: 5,fontSize:20, textAlign: 'center', height: 30, width: 250, marginBottom: '10px'}} />
          <br />
          <button onClick={handleRegister} style={{fontSize: 15, borderRadius: 5, height: 30, width: 150, fontWeight: 'bold' , marginTop: '10px' }}>Submit</button>
        </div>
        <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>By submitting this form you agree to the {" "} 
        <Link onClick={disclaimer} style={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline', color: '##f2e82b' }}>Terms of Service</Link> </p>
        <p style={{fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>Already have an account?  <Link to="/login" style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'blue' }}>Log in</Link></p>
      </div>
    </div>
    </Splashr>
  );
}

export default RegisterPage;
