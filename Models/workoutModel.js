  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "Please add the type of exercise.",
        },
        name: {
            type: String,
            required: "Please enter the name of the exercise.",
        },
        duration: {
            type: Number,
            required: "Please enter the duration of the exercise.",
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        },
    }]
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;