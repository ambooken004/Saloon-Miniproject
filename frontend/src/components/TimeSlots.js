import React   from 'react';
import './TimeSlots.css';
import { Button } from 'react-bootstrap';


const TimeSlots = ({ slotdatas }) => {




  return (
    
    <div className='time-slot-container'>
      {
        slotdatas.map((slot) => (
          <div key={slot.id}>
            <Button variant='outline-dark' className='rounded-pill m-1'>{slot.time}</Button>
          </div>
        ))
     
      }



    </div>
  );
};

export default TimeSlots;