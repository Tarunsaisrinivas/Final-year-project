import mongoose from 'mongoose';

const FacultySchema = new mongoose.Schema({
facultyemail: {
    type: String,
    required: true,
  },
  facultypassword: {
    type: String,
    required: true,
  },
 
},{timestamps:true});

const Faculty = mongoose.models.Faculty || mongoose.model('FacultyData',FacultySchema);

export default Faculty;