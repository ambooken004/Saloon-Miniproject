import React from 'react';
import './TimeSlotPage.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TimeSlots from '../components/TimeSlots';
import { Button } from 'react-bootstrap';
//import axios from 'axios';


const TimeSlotPage = () => {
  
  //const [data, setData] = useState([]);
  
  //const [slot, setSlot] = useState([]);

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/timeslotdata'); // Replace '/api/data' with your actual backend API endpoint
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };


    fetchData();
  },); */

  /* const confirmBooked = () => {
    setSlot("BOOKED");
  }; */

  

  return (
    <>
      <Header />
      <h1 className='text-center m-4'>Choose Your Time-Slot</h1>
      <div className='time-container text-center'>
        <TimeSlots />
      </div>
      <div className='text-center'>
        <Button variant='success' className='mt-0 rounded-pill h-25 w-25 m-1'>
          <Link to='/thankyoupage' style={{ textDecoration: "none", color: "white"}}>Confirm As Booked</Link>
        </Button>
      </div>
    </>
  );
};

export default TimeSlotPage;