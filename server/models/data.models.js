const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: [true, 'Please give a date']
        },
        score: {
            type: Number,
            required: [true, 'Please give a score']
        },
        notes:{
            type: String
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Data', DataSchema);