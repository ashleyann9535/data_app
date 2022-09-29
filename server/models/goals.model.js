const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema(
    {
        goal: {
            type: String
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model('Goals', GoalSchema);