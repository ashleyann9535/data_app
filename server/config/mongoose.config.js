const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teacherData', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log('Established a connection to the Teacher Data database'))
    .catch((err) => console.log('Something went wrong when connecting to the Teacher Data database', err))