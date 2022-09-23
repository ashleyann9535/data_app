const Goal = require('../models/goals.model');

module.exports = {
    //Create 
    createGoal: (req, res) => {
        Goal.create(req.body)
        .then((newGoal) => {
            console.log(newGoal)
            res.json(newGoal)
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with create goals', error: err.errors});
        });
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