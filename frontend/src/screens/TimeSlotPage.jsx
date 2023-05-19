import React, { useEffect, useState } from 'react';
import './TimeSlotPage.css';
import Header from '../components/Header';
import TimeSlots from '../components/TimeSlots';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const TimeSlotPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/timeslotdata'); // Replace '/api/data' with your actual backend API endpoint
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <h1 className='text-center m-4'>Choose Your Time-Slot</h1>
      <div className='time-container text-center'>
        <TimeSlots slotdatas={data} />
      </div>
      <div className='text-center'>
        <Button variant='outline-primary' className='mt-0 rounded-pill h-25 w-25 m-1'>Confirm As Booked</Button>
      </div>
    </>
  );
};

export default TimeSlotPage;