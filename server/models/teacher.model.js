const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const TeacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required.']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    }
},
{ timestamps: true }
)

TeacherSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Your password must match')
    }
    next()
})

TeacherSchema.pre('save', async function(next){
    console.log('In pre-save middleware', this.password)
    try{
        const hashedPassword = await bcrypt.hash(this.password,12)
        console.log('Hashed password:', hashedPassword)
        this.password = hashedPassword
        next()
    }catch(err){
        console.log('Error in save', err)
    }
})

module.exports = mongoose.model('Teacher', TeacherSchema)