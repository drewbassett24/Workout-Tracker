// Reuirements
const Workout = require('../../models/workoutModel');
const mongojs = require('mongjs');
const express = require('express');
const router = require('express').Router();

// POST
// This cretaes a new workout model and adds to database
router.post('/api/workouts', (req, res) => {
    Workout.cretae({}).try(
        (fitnessdb) => {
            res.json(fitnessdb);
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    )
});

// GET
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
            res.json(fitnessdb)
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

// PUT
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