import React, { useEffect, useRef, useState } from 'react';
import logo from '../../src/logoTC.png';
import { Link } from 'react-router-dom';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useNavigate, useParams } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker'
import Clock from 'react-clock'
import Splashr from 'splashr'
//import logo1 from '../../src/Time-Capsule-Clock-Logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton'
import logo1 from '../../src/Time-Capsule-Gif.gif';
import axios from 'axios';
import Calendar from 'react-calendar';




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


export const Messagepage = () => {

    const [message, setMessage] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [open, setOpen] = React.useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const {username} = useParams();
    
    


    const handleOpen = () => {
      setOpen(!open);
    };
    
  
    const handleMenuSubmit = () => {
      // make HTTP request to server to check login credentials
        
        const data = JSON.stringify({
          //"title": title,
          //"date": date,
          "text": message,
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
          alert(`It Worked!`);
          })
          .catch((error) => {
            console.error('Login failed', error);
            setErrorMessage("Message Failed!")
          });
      };


    const handleMenuInbox = () => {
      // do something
      navigate(`/${username}/home`)
    };
    const handleMenuLogout = () => {
      // do something
      navigate('/login');
    };
  

    const handleDateChange = (date) => {
        setDate(date.value)
        return (
          alert('New date is: ', date)

        );
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
        
    };
      
    // const handleDateChange = (e) => {
    //   setDate(date);
    // };

    

    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
      

    return (
      <Splashr splash={splash1} transitionTime={100} minDelay={750}>
      <div style={{paddingTop:'13%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: "#8eecec" }}>
        <div style={{width: '100%', alignItems: 'center', backgroundColor: "#8eecec" }}>
        <h1 style={{paddingTop: 68, justifyContent: 'center', paddingLeft: 452,width: 800, fontSize: 80 ,fontWeight: "bold", backgroundColor: "#8eecec" }}>Time Capsule</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#8eecec"}}>
              <img src={logo} alt="Logo" />
          </div>
          <h1 style={{paddingBottom: 0, textAlign: 'center', fontFamily: 'Lobster two' }}>Create Message</h1>
          {errorMessage && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center'}}>{errorMessage}</p>}
        <div style={{paddingBottom: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: "#8eecec" }}>
        
          <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Start Typing...'
                   placeholderTextColor="#aaaaaa" rows="25" style={{ marginBottom: '10px' ,height: 200, width: 400,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        fontSize: '20px',
        
       }}  />
       <h1 style={{ textAlign: 'center', fontFamily: 'Lobster two' }}>Calendar</h1>
       
       <div className='app' style={{ display:'flex', flexDirection: 'column', alignContent:'center', alignItems:'center'}}>
     <div className='calendar-container' style={{alignContent:'center', alignItems:'center'}}>
       <Calendar onChange={setDate} value={date} />
     </div>
     <p className='text-center'>
       <span className='bold'>Selected Date:</span>{' '}
       {date.toDateString()}
     </p>
   </div>
        <button onClick={handleOpen} style={{overflowY: 'scroll', fontSize: 15,borderRadius: 5, height: 30, width: 150, fontWeight: 'bold'}}>Select Option </button>
      {open ? (
        <ul className="menu" style={{ overflowY: 'scroll', overflow: 'hidden', cursor: 'pointer', paddingRight: '3%'}}>
          <li className="menu-Submit">
            <button onClick={handleMenuSubmit} style={{fontSize: 15,borderRadius: 5, height: 30, width: 150, fontWeight: 'bold', display: 'block'}}>Submit Message</button>
          </li>
          <li className="menu-Inbox">
            <button onClick={handleMenuInbox} style={{fontSize: 15,borderRadius: 5, height: 30, width: 150, fontWeight: 'bold', display: 'block' }}>Inbox</button>
          </li>
          <li className="menu-Logout">
            <button onClick={handleMenuLogout} style={{fontSize: 15,borderRadius: 5, height: 30, width: 150, fontWeight: 'bold', display: 'block',color: 'red'}}>Logout</button>
          </li>
        </ul>
      ) : null}
        </div>
      </div>
    </div>
    </Splashr>
  );
}

export default Messagepage;