const StudentController = require('../controllers/students.controllers');

module.exports = (app) => {
    app.get('/api/student', StudentController.getStudents);
    app.get('/api/student/:id', StudentController.getOneStudent);
    app.post('/api/student/create', StudentController.createStudent);
};