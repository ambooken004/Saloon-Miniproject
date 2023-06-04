import React, { useEffect, useState } from 'react';
import './TimeSlotPage.css';
import Header from '../components/Header';
import axios from "axios"
const TimeSlotPage = () => {
const [bookedslot,setBookedslots]=useState({id:1,timeslot:[]})
const [Loading,setLoading]=useState(true)
const [availbleTimeslot,SetavailableTimeslot]=useState(["3.00 to 3.30pm","3.30 to 4.00pm","4.00 to 4.30pm","4.30 to 5.00pm","5.00 to 5.30pm","5.30 to 6.00pm"])
const addtimeslot=(item)=>{
setBookedslots({...bookedslot,timeslot:[...bookedslot.timeslot,item]})
console.log(bookedslot)
}
useEffect(()=>{
  axios.get("http://localhost:8000/alltime").then((responce)=>{
  setBookedslots({...bookedslot,timeslot:responce.data[0].timeslot})
  setLoading(false)
  }) 
},[])
const loadtoserver=()=>{
axios.post("http://localhost:8000/timeadd",{data:bookedslot}).then((responce)=>{
  if(responce)
  alert("You have Successfully Booked......")
})
}
  return (
    <>
      <Header />
      <h1 className='text-center m-4'>Choose Your Time-Slot</h1>
      <div className='buttondiv'>
        {!Loading ? availbleTimeslot.map((item,key)=>{
          if(!bookedslot.timeslot.includes(item))
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
        }):<h1>Loading.....</h1>}
      </div>
      <button className='conformbutton' onClick={loadtoserver}>Comform Booking</button>
    </>
  )
};

export default TimeSlotPage;