const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: String,
      trim: true,
      required: "Username is Required"
    },
  
    exercises: [
      {
        type: {
          type: String,
          enum: ['resistance', 'cardio'],
          description: 'Cardio or Resistance Training Only'
        },
        name: {
          type: String,
          required: true,
          trim: true
        },
        distance: Number,
        duration: Number,
        weight: Number,
        sets: Number,
        reps: Number
      },
    ],
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);
  
// UserSchema.methods.coolifier = function() {
// this.username = `${this.username}...the Coolest!`;
// return this.username;
// };
  

  
const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout; 
  