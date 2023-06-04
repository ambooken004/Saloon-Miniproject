import React, { useState } from 'react';
import './TimeSlotPage.css';
import Header from '../components/Header';
const TimeSlotPage = () => {
const [bookedslot,setBookedslots]=useState([])
const [availbleTimeslot,SetavailableTimeslot]=useState(["3.00 to 3.30pm","3.30 to 4.00pm","4.00 to 4.30pm","4.30 to 5.00pm","5.00 to 5.30pm","5.30 to 6.00pm"])
const addtimeslot=(item)=>{
setBookedslots([...bookedslot,item])
}
  return (
    <>
      <Header />
      <h1 className='text-center m-4'>Choose Your Time-Slot</h1>
      <div className='buttondiv'>
        {availbleTimeslot.map((item,key)=>{
          if(!bookedslot.includes(item))
          {
          return(
            <button className='timebuttons' key={key} onClick={()=>addtimeslot(item)}>{item}</button>
          )
          }
          else{
            return(
            <div key={key} className='bookdivparent'>
            <button className='timebuttons'>{item}</button>
            <div className='bookdiv'>
            <p className='herep'>Booked</p>
            </div>
            </div>
            )
          }
        })}
      </div>
    </>
  );
};

export default TimeSlotPage;