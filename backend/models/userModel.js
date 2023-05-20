// Model what type of data user have

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please Add Customer Email"],
            unique: true
        },
        password: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true // track when this field was created/updated in database
    }
);

userSchema.pre('save', async function (next) { //encrypt the password
    if(!this.isModified('password'))
    {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); //entering salt to password to make it encrypted 
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('Customer', userSchema); // contains model name and schema

module.exports = User;