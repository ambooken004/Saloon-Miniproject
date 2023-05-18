import React  from 'react';
import './TimeSlots.css';
import { Button } from 'react-bootstrap';

const TimeSlots = () => {


  return (
    <div className='time-slot-container'>
      <Button variant='outline-dark' className=' rounded-pill m-1'>9:00AM - 9:30AM</Button>
      <Button variant='outline-dark' className='rounded-pill m-1'>9:30AM - 10:00AM</Button>
      <Button variant='outline-dark' className='rounded-pill m-1'>10:00AM - 10:30AM</Button>
      <Button variant='outline-dark' className='rounded-pill m-1'>10:30AM - 11:00AM</Button>
      <Button variant='outline-dark' className='rounded-pill m-1'>11:00AM - 11:30AM</Button>
      <Button variant='outline-dark' className='rounded-pill m-1'>12:00PM - 12:30PM</Button>
      <Button variant='outline-dark' className='rounded-pill m-1'>12:30PM - 1:00PM</Button>
      <Button variant='outline-dark' className='rounded-pill m-1'>1:00PM - 1:30PM</Button>
    </div>
  );
};

export default TimeSlots;