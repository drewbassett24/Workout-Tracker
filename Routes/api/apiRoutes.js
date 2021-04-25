const Workout = require('../../models/workoutModel');
const mongojs = require('mongojs');
const express = require('express');
const router = require('express').Router();

// POST route
// Creates a new workout model & adds it to the DB
router.post('/api/workouts', (req, res) => {
    Workout.create({}).try(
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
router.get('/api/workouts', (req, res) => {
    Workout.find({}).try(
        (fitnessdb) => {
            res.json(fitnessdb)
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

router.get('/api/workouts/range', (req, res) => {
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
router.put('/api/workouts/:id', (req, res) => {
    const id = mongojs.ObjectId(req.params.id);
    Workout.findOneAndUpdate(
        {_id: id},
        {$push: {exercises: body}},
        {new: true}
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