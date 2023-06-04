/* const AsyncHandler = require('express-async-handler');
const TimeslotBooking = require('../models/timeslotModel');

/* const getTimeslots = AsyncHandler(async (req, res) => {
    const timeslots = await TimeslotBooking.find();
    res.json(timeslots);
}); */

// Create a new timeslot
/* const createTimeslot = async (req, res) => {
    try {
      const { time } = req.body;
  
      // Check if the timeslot already exists
      const existingTimeslot = await TimeslotBooking.findOne({ time });
      if (existingTimeslot) {
        return res.status(400).json({ message: 'Timeslot already exists' });
      }
  
      // Create a new timeslot
      const timeslot = new TimeslotBooking.create({
        time,
      });

      if(timeslot)
      {
        res.status(201).json({
            time_id: timeslot.id
        });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Get available timeslots
  exports.getAvailableTimeslots = async (req, res) => {
    try {
      const availableTimeslots = await Timeslot.find({ booked: false });
      res.status(200).json({ timeslots: availableTimeslots });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Book a timeslot
  exports.bookTimeslot = async (req, res) => {
    try {
      const timeslotId = req.params.id;
  
      // Find the timeslot by its ID
      const timeslot = await Timeslot.findById(timeslotId);
      if (!timeslot) {
        return res.status(404).json({ message: 'Timeslot not found' });
      }
  
      // Check if the timeslot is already booked
      if (timeslot.booked) {
        return res.status(400).json({ message: 'Timeslot is already booked' });
      }
  
      // Update the timeslot as booked
      timeslot.booked = true;
      await timeslot.save();
  
      res.status(200).json({ message: 'Timeslot booked successfully', timeslot });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = {}; */

const { SaloonUser, TimeSlot } = require('../models/timeslotModel');

const selectTimeSlot = async (req, res) => {
  try {
    const { email, selectedTimeSlot } = req.body;

    // Create a new user
    const user = new SaloonUser({
      email,
      selectedTimeSlot,
    });

    /* const document = await TimeSlot.findById(id);

    if (!document) {
      return res.status(404).json({ error: 'No such Time-slot' });
    } */

    document.buttonValue = buttonValue;
    //await document.save();

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'Time slot selected successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error selecting time slot.', error: error.message });
  }
};

module.exports = {
  selectTimeSlot,
};