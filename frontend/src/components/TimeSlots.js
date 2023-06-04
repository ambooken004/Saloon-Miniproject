import { React}   from 'react';
import './TimeSlots.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const TimeSlots = () => {

  const timeslotvalues = [{id: 1, time: "9:00AM - 9:30AM",}, {id: 2, time: "9:30AM - 10:00AM",}, {id: 3, time: "10:00AM - 10:30AM",}];

   const handleClick = async({time}) => {
    try {
      await axios.post('/api/users', {
        buttonValue: {time},
      });
      console.log('Time-slot updated successfully');
    } catch (error) {
      console.error(error);
    }
  };



  return (
    
    <div className='time-slot-container'>
      
      {
        timeslotvalues.map((slot) => (
          <Button variant='outline-dark' className='rounded-pill m-1' id={slot.id} key={slot.id} onClick={handleClick}>{slot.time}</Button>
        ))
      };
      
       {/* <Button variant='outline-dark' className='rounded-pill m-1' key={2}>9:30AM - 10:00AM</Button>
       <Button variant='outline-dark' className='rounded-pill m-1' key={3}>10:00AM - 10:30AM</Button>
       <Button variant='outline-dark' className='rounded-pill m-1' key={3}>10:300AM - 11:00AM</Button>
       <Button variant='outline-dark' className='rounded-pill m-1' key={3}>11:00AM - 11:30AM</Button> */} 
    
    </div>
  );
};

export default TimeSlots;