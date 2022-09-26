const Goal = require('../models/goals.model');
const Student = require('../models/students.model');

module.exports = {
    //Create 
    createStudentGoal: (req,res) => {
        Goal.create(req.body)
        .then((goal) => {
            return Student.updateOne({_id: req.params.id}, {$push: {goals:goal._id}}, {new:true, runValidators: true})
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with create goal for student', error: err.errors});
        })
    },

    //Read 
    getGoals: (req, res) =>{
        Goal.find({})
        .then((goals) => {
            console.log(goals);
            res.json(goals);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with get all goals', error: err.errors});
        });
    },

    getOneGoal:(req,res) => {
        Goal.findOne({_id:req.params.id})
        .then((goal) => {
            console.log(goal);
            res.json(goal);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with get one goal', error: err.errors});
        });
    },

    //Update 
    updateGoal: (req,res) => {
        Goal.updateOne({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((goal) => {
            console.log(goal);
            res.json(goal);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with update goal', error: err.errors});
        })
    }

    //Delete
    //use update
}