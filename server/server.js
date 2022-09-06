const express = require('express');
const cors = require('cors')
require('dotenv').config()
const cookieParser = require('cookie-parser')

const app = express();
app.use(cors())

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config');

require('./routes/students.routes')(app);
// require('./routes/teacher.routes')(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
});