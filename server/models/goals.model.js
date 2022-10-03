const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema(
    {
        goal: {
            type: String
        },
        isActive: {
            type: Boolean,
            default: true
        },
        dataList: [{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Data'
        }],
    },
    {timestamps: true}
);

module.exports = mongoose.model('Goals', GoalSchema);