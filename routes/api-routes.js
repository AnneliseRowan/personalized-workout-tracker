const router = require('express').Router(); 
const Workout = require('../models/workout'); 

router.post('./api/workouts', (req, res) => {
    Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    });
});



module.exports = router;