const jwt = require('jsonwebtoken');

const generateToken = (id) => { // takes user id from database and return it in encrypted form
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    }); // expire range
};

module.exports = generateToken;