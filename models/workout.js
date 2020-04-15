const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaT = new Schema (
    {
        day: {
            type:Date,
            default:() => new Date()

            
        },
        exercises: [
            {
                type: {
                    type: String,

                    trim: true,
                    required: "enter type of excercise"
                },
                
                name: {
                    type: String,

                    trim: true,
                    required: "enter name of excercise"
                },
                duration: {
                    type: Number,

                    
                    required: "enter duration of excercise in minutes"
                },
                weight: {
                    type: Number

                    
                },
                reps: {
                    type: Number

                    
                },
                sets: {
                    type: Number

                    
                },
                distance: {
                    type: Number

                    
                },


                


            }
        ]
    },{
        toJSON: { virtuals:true}
    }
    

)


schemaT.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration;
    },0);
})
const Workout = mongoose.model('Workout', schemaT);

module.exports = Workout;
