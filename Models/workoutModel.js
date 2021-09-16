  
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
            required: "Is this a cardio or resistance exercise?",
        },
        name: {
            type: String,
            required: "What is the name of the exercise?",
        },
        duration: {
            type: Number,
            required: "What is the duration of the exercise?",
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
    }],
    // totalDuration: {
    //     type: Number,
    // }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;