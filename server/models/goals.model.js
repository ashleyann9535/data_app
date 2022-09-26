const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema(
    {
        goal: {
            type: String
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Goals', GoalSchema);