import mongoose from "mongoose";

// const userSchema= new mongoose.Schema({
//     name: String,
//     email: String
// });
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  employees: Number,
  question: String,
  createdAt: { type: Date, default: Date.now },
});

// module.exports=mongoose.model('User', contactSchema);
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;