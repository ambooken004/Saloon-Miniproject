/* const express = require('express');
const { getTimeslots } = require('../controllers/timeslotController');

const router = express.Router();

router.route('/').get(getTimeslots);
//router.route('/create').post();
//router.route('/:id').get().put().delete();

module.exports = router; */

const express = require('express');
const router = express.Router();
const timeSlotController = require('../controllers/timeslotController');

// POST /api/users/select-time-slot
router.post('/select-time-slot', timeSlotController.selectTimeSlot);

module.exports = router;