import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo2 from '../../src/logoTC.png'
import axios from 'axios';
import Splashr from 'splashr';
import logo1 from '../../src/Time-Capsule-Gif.gif';
import Message from '../components/Message';

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



function InboxPage() {
  const [messages, setMessages] = useState([]);
  const {username} = useParams();

  const requestMessages = () => {
    // make HTTP request to server to check login credentials
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:3001/messages/${username}`,
      headers: {
      'Content-Type': 'application/json'
      },
    };

    axios.request(config)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
      //display error message to user
      console.error('Could not retrieve messages', error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      requestMessages();
    }, 10000)
  
    return () => clearInterval(intervalId); //This is important
   
  }, [])
  
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
        {messages && messages.map(message => 
              <Message title={message.title} text={message.text}/>
        )}
        </div>
        <p style={{paddingBottom: 55, fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>Wanna Create A Message?  <Link to={`/${username}/message`} style={{ fontWeight: 'bold', textDecoration: 'underline', color: 'blue' }}>Create Message</Link></p>
        
      </div>
    </div>
    </Splashr>
    
  );
}

export default InboxPage;
