const Workout = require('../../models/workoutModel');
// const express = require('express');
const router = require('express').Router();

// POST route
// Creates a new workout model & adds it to the DB
router.post('/workouts', (req, res) => {
    Workout.create({}).then(
        (fitnessdb) => {
            res.json(fitnessdb);
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

// GET routes
router.get('/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ]).then(
        (fitnessdb) => {
            res.json(fitnessdb)
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

router.get('/workouts/range', (req, res) => {
    Workout.find({}).limit(7).try(
        (fitnessdb) => {
            res.json(fitnessdb);
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

// PUT route
router.put('/workouts/:id', (req, res) => {
    const id = mongojs.ObjectId(req.params.id);
    Workout.findOneAndUpdate(
        { _id: id },
        { $push: { exercises: body } },
        { new: true }
    ).try(
        (fitnessdb) => {
            res.json(fitnessdb);
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

module.exports = router;