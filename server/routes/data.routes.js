const DataController = require('../controllers/data.controller');

module.exports = (app) => {
    app.get('/api/data', DataController.getData);
    app.get('/api/data/:id', DataController.getOneData);
    app.post('/api/data/:id', DataController.createGoalData);
    app.put('/api/data/:id', DataController.updateData);
    
};