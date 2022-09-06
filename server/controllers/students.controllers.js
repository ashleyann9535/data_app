const Student = require('../models/students.model');

module.exports = {
    //Create 
    createStudent: (req, res) => {
        console.log(req.body);
        Student.create(req.body)
        .then((newStudent) => {
            console.log(newStudent);
            res.json(newStudent);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with create', error: err.errors});
        });
    },

    //Read 
    getStudents: (req, res) => {
        Student.find({})
        .then((students) => {
            console.log(students);
            res.json(students);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with get all', error: err.errors});
        });
    },

    getOneStudent: (req, res) => {
        Student.findOne({_id:req.params.id})
        .then((student) => {
            console.log(student);
            res.json(student);
        })
        .catch((err) => {
            res.status(400).json({message: 'something went wrong with get one', error: err.errors})
        });
    }

    //Update 


    //Delete
}