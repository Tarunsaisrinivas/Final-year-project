import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    studentemail: {
        type: String,
        required: true,
      },
      studentpassword: {
        type: String,
        required: true,
      },
},{timestamp:true});

const Student = mongoose.models.Student || mongoose.model('StudentData',StudentSchema);

export default Student;