import React, { useState, useEffect } from 'react';
import logo from '../../src/logoTC.png';
import axios from 'axios';

function HomePage() {
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    // fetch the count of messages from the backend and update the state
    axios.get('http://localhost:3001/messages/count')
      .then((response) => {
        setMessageCount(response.data.count);
      })
      .catch((error) => {
        console.error('Failed to fetch message count:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '400px', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <img src={logo} alt="Logo" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ marginBottom: '10px' }}>Inbox</h2>
          {messageCount === 0 && <p>You have 0 message</p>}
          {messageCount === 1 && <p>You have 1 message</p>}
          {messageCount > 1 && <p>You have {messageCount} messages</p>}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
