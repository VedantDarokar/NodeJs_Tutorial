import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import {User} from './Models/User.js'; 
import { userRegister } from './controllers/user.js';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect("mongodb+srv://vedantdarokar7:ZrIvpUyaSJpKNKZu@cluster0.cav07ut.mongodb.net/", {
  dbName: 'NodeJs'
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => console.log("Error connecting to MongoDB:", err));

// EJS View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

// Serve Static Files
app.use(express.static(path.join(path.resolve(), 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/submit',userRegister);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
