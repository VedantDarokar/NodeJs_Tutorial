import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://vedantdarokar7:ZrIvpUyaSJpKNKZu@cluster0.cav07ut.mongodb.net/',{
    dbName:"NodeJs"
}
).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => console.log(err))


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
