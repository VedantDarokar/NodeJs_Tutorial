import express from 'express'

const app = express();
const PORT = 3000;      

//C = Create => Post
//R = Read => Get
//U = Update => Put
//D = Delete => Delete

app.get('/ved', (req, res) => {
  res.send('Hello World!'); 
})

app.post('/instagram_post', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
