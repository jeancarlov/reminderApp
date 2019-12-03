import { ADD_REMINDER } from '../constants';


//helper reminder function
const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
    
  }
}

// reducer as a constant 
// two parameters state with an empty array and action parameter that takes an argument
const reminders = (state = [], action) => {
  // this will be modify to become a return state
  let reminders = null;
  switch(action.type) {
    case ADD_REMINDER:
      // keep in mind the reminder helper fn above dor the code below
      reminders = [...state, reminder(action)];
     console.log("reminders as state", reminders);
     return reminder;
    default:
      return state;
  }
}

export default reminders;