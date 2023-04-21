import React, { useEffect, useRef, useState } from 'react';
import logo from '../../src/logoTC.png';
import { Link } from 'react-router-dom';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from 'react-datetime-picker'
import Clock from 'react-clock'
import Splashr from 'splashr'
import logo1 from '../../src/Time-Capsule-Clock-Logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



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
    <h1 style={{paddingTop: 22, paddingLeft: 300, justifyContent: 'center', width: 800, fontSize: 80 ,fontWeight: "bold" }}>Time Capsule</h1>
    <img style={{paddingLeft: 472, paddingBottom: 390}}src={logo1} alt="Logo" />
            
  </div>
</div>

export const Homepage = () => {

    const [userMessage, setUserMessage] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    
    //const dateInputRef = useRef(null);

    const handleDateChange = (date) => {
        setDate(date.value)
        return (
          alert('New date is: ', date)

        );
    };
      
    // const handleDateChange = (e) => {
    //   setDate(date);
    // };

    const handleTextChange = (e) => {
      setUserMessage(e.target.value);
    };

    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
      

    return (
      <Splashr splash={splash1} transitionTime={1000} minDelay={500}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: "#8eecec" }}>
        <div style={{ alignItems: 'center' }}>
        <h1 style={{paddingTop: 70, justifyContent: 'center', paddingLeft: 300,width: 800, fontSize: 80 ,fontWeight: "bold" }}>Time Capsule</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
              <img src={logo} alt="Logo" />
          </div>
          <h1 style={{paddingBottom: 0, textAlign: 'center', fontFamily: 'Lobster two' }}>Create Message</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <DropdownButton id="dropdown-item-button" title="Select an Option">
      <Dropdown.ItemText>Submit Message</Dropdown.ItemText>
      <Dropdown.Item as="button">Inbox</Dropdown.Item>
      <Dropdown.Item as="button">Calendar</Dropdown.Item>
      <Dropdown.Item as="button">Log Out</Dropdown.Item>
    </DropdownButton>
          <textarea type="text" value={userMessage} onChange={handleTextChange} placeholder='Start Typing...'
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
      </div>
    </div>
    </Splashr>
  );
}

export default Homepage;