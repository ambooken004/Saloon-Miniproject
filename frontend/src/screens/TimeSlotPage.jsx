import React from 'react';
import './TimeSlotPage.css';
import Header from '../components/Header';
import TimeSlots from '../components/TimeSlots';
import { Button } from 'react-bootstrap';

const TimeSlotPage = () => {

  return (
    <>
      <Header />
      <div className='time-container text-center'>
        <TimeSlots />
      </div>
      <div className='text-center'>
        <Button variant='outline-primary' className='mt-0 rounded-pill h-25 w-25 m-1'>Confirm As Booked</Button>
      </div>
    </>
  );
};

export default TimeSlotPage;