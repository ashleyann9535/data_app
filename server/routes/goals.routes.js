const GoalController = require('../controllers/goals.controller');

module.exports = (app) => {
    app.get('/api/goal', GoalController.getGoals);
    app.get('/api/goal/:id', GoalController.getOneGoal);
    app.post('/api/goal/create', GoalController.createGoal);
    app.put('/api/goal/:id', GoalController.updateGoal);
};