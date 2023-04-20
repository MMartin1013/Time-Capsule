import React, { useEffect, useRef, useState } from 'react';
import logo from '../../src/logoTC.png';
import { Link } from 'react-router-dom';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from 'react-datetime-picker'
import Clock from 'react-clock'

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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: "#8eecec"}}>
      <div style={{ width: '400px', justifyContent: 'center', alignItems: 'center', backgroundColor: "#8eecec" }}>
        <div className = 'Logo' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh',marginBottom: '20px', backgroundColor: "#8eecec" }}>
          <img src={logo} alt="Logo" />
        </div>
        <h1 style={{ marginTop: 60, textAlign: 'center', fontWeight: "bold", fontFamily: 'Lobster Two', fontStyle: 'italic' }}>Submit Message</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label style={{ marginBottom: '10px' }}>
            Start typing...
          </label>
          <textarea type="text" value={userMessage} onChange={handleTextChange} placeholder='Enter Message...'
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
          <label style={{ fontSize: 16, fontWeight: "bold", marginBottom: '10px' }}>
            Select Date for Delivery!
          </label>
          <div style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
          <DateTimePicker style={{width: 100}}
            format='y-MM-dd h:mm:ss a'
            type="date"
            
            
            value={date}
            onChange={handleDateChange}
            //ref={dateInputRef}
            returnValue='start'
            hourAriaLabel='Hour'
            hourPlaceholder='hh'
            minuteAriaLabel='Minute'
            minutePlaceholder='mm'
            maxDetail='minute'
            amPmAriaLabel='Select AM/PM'
            closeWidgets={true}
            //isClockOpen={true}
            monthAriaLabel="MM"
            yearAriaLabel='YY'
            dayAriaLabel='DD'
            yearPlaceholder='yyyy'
            dayPlaceholder='dd'
            monthPlaceholder='mm'
            nativeInputAriaLabel='Date'
            
            
            />
            <div>
            <p>Current time:</p>
            <Clock 
            value={time}
            renderNumbers={true} />
            </div>
          
            {/* <p style={{ fontSize: 16, fontWeight: "bold"}}>Selected Date:</p>
            <p>{value}</p> */}
          </div>
          <br />
          {/* <button onClick={handleLogin} style={{ fontWeight: 'bold', marginTop: '10px' }}>Log In</button> */}
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px' }}><Link to="/login" style={{ fontSize: 16, fontWeight: "bold", textDecoration: 'underline', color: 'blue' }}>Log Out</Link></p>
      </div>
    </div>
  );
}

export default Homepage;