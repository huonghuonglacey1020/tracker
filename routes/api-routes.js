const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});
router.put('/api/workouts/:id', ({body, params}, res) => {
    
    Workout.findByIdAndUpdate(params.id, {
        $push: {
            exercises: body
        }
    },{new: true, runValidators: true}).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).json({
            success: false,
            errors: err.errors

        })
    })



});
router.post('/api/workouts', (req, res) => {
    
    Workout.create({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json({
                success: false,
                errors: err.errors

            })
        })



});
router.get("/api/workouts/range", (req,res)=>{
    Workout.find({}).limit(7)
    .then(docs =>{
        console.log(docs)
        res.json(docs)
    })
    .catch(err=>{
        console.log(err)
        res.json(err)
    })
})


module.exports = router;