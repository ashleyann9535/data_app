const StudentController = require('../controllers/students.controllers');

module.exports = (app) => {
    app.get('/api/student', StudentController.getStudents);
    app.get('/api/student/:id', StudentController.getOneStudent);
    app.post('/api/student/create', StudentController.createStudent);
    app.put('/api/student/:id', StudentController.updateStudent);
    app.delete('/api/student/:id', StudentController.deleteStudent);
};