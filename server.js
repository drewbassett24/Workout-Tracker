const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3003

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

mongoose.connect(
    //process.env.MONGODB_URI || 'mongodb://localhost/WorkoutTracker',
    "mongodb+srv://DB:Bastenfyr3@trainer-cluster.2poqm.mongodb.net/workoutTracker?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});
