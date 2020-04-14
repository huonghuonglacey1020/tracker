const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaT = new Schema (
    {
        day: {
            type:Date,
            default:() => new Date()

            
        },
        excersices: [
            {
                type: {
                    type: String,

                    trim: true,
                    required: "enter type of exercise"
                },
                
                name: {
                    type: String,

                    trim: true,
                    required: "enter name of exercise"
                },
                duration: {
                    type: Number,

                    
                    required: "enter duration of exercise in minutes"
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
const Workout = mongoose.model('Workout', schemaT);

module.exports = Workout;
