import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  adminemail: {
    type: String,
    required: true,
  },
  adminpassword: {
    type: String,
    required: true,
  },
  
  
}, { timestamps: true });

const Admin = mongoose.models.Admin || mongoose.model('AdminData', AdminSchema);

export default Admin;