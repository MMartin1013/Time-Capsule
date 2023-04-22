import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import logo1 from '../../src/Time-Capsule-Clock-Logo.png';
import logo2 from '../../src/logoTC.png'
import axios from 'axios';
import Splashr from 'splashr';
import logo1 from '../../src/Time-Capsule-Gif.gif';
import Calendar from 'react-calendar';
import u from 'splashr';

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
    {/* <h1 style={{ paddingTop: 22, paddingLeft: 300,width: 800, fontSize: 80 ,fontWeight: "bold" }}>Time Capsule</h1>
    <img style={{paddingLeft: 472, paddingBottom: 390}}src={logo1} alt="Logo" /> */}
    <img style={{ paddingBottom: 155}}src={logo1} alt="Logo" /> 
            
  </div>
</div>



function CalendarPage() {
  
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();
    

    const handleSubmit = () => {
        navigate('/home', {date});
        
    }

  
  
  return (
    <Splashr splash={splash1} transitionTime={100} minDelay={750}>
      
    <div style={{paddingTop: '6%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  backgroundColor: "#8eecec" }}>
      <div style={{ width: '100%', alignItems: 'center', backgroundColor: "#8eecec" }}>
      <h1 style={{paddingLeft: '32.2%',width: 800, fontSize: 80 ,fontWeight: "bold", paddingTop:'0.9%'}}>Time Capsule</h1>
        <div className = 'Logo' style={{ zIndex: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img style={{paddingBottom: 40}}src={logo2} alt="Logo" />
        </div>
        <h1 style={{ textAlign: 'center', fontFamily: 'Lobster two' }}>Calendar</h1>
       
        <div className='app' style={{paddingBottom: '6%', display:'flex', flexDirection: 'column', alignContent:'center', alignItems:'center'}}>
      <div className='calendar-container' style={{alignContent:'center', alignItems:'center'}}>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <button onClick={handleSubmit} style={{fontSize: 15,borderRadius: 5, height: 30, width: 150, fontWeight: 'bold' }}>Submit Calendar</button>
    </div>
    
        
      </div>
    </div>
    </Splashr>
    
  );
}

export default CalendarPage;
