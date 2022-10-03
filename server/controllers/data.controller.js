const Data = require('../models/data.models');
const Goal = require('../models/goals.model');
const Student = require('../models/students.model');

module.exports = {
    //Create
    createGoalData: (req,res) => {
        Data.create(req.body)
        .then((data) => {
            return Goal.updateOne({_id: req.params.id}, {$push: {dataList: data._id}}, {new:true, runValidators: true})
        })
        .then((goal) => {
            res.json(goal)
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with create data for goal', error: err.errors})
        })
    },

    //Read
    getData: (req, res) =>{
        Data.find()
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with get all data', error: err.errors});
        });
    },

    getOneData:(req,res) => {
        Data.findOne({_id:req.params.id})
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with get one data', error: err.errors});
        });
    },

    //Update 
    updateData: (req,res) => {
        Data.updateOne({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with update data', error: err.errors});
        })
    },


    //Delete
}