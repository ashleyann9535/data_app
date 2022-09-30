const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Student first name is required'],
            minlength: [3, 'First name must be at least 3 characters']
        },
        lastName: {
            type: String,
            required: [true, 'Student last name is required'],
            minlength: [3, 'Last name must be at least 3 characters']
        },
        teacher: {
            type: String,
            required: [true, 'Teacher name is required'],
            minlength: [3, 'Teacher name must be at least 3 characters']
        },
        date: {
            type: Date,
            required: [true, 'IEP date is required'],
        },
        grade: {
            type: String,
            required: [true, 'Grade is required'],
            enum: ['Pre-K', 'K', '1st', '2nd', '3rd', '4th', '5th']
        },
        isActive: {
            type: Boolean,
            default: true
        },
        goals: [{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Goals'
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Student', StudentSchema);