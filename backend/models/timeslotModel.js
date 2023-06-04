const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
    slotName: {
      type: String,
      default: 'Initial Value',
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  });

const saloonUserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    selectedTimeSlot: {
      type: String,
      default: false,
      required: true,
      ref: 'TimeSlot',
    },
  });

const TimeSlot = mongoose.model('TimeSlot', timeSlotSchema);

const SaloonUser = mongoose.model('SaloonUser', saloonUserSchema);

module.exports = { SaloonUser, TimeSlot };

