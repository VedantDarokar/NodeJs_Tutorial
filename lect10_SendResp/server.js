import express from 'express'
import path from 'path';

const app = express();
const PORT = 3000;  

const products = [
    {title: 'IPHONE15', price: 75000},
    {title: 'IPHONE16', price: 80000},
    {title: 'GOOGLE PIXEL', price: 60000},
];


//send a response
app.get('/', (req, res) => {
    // res.json({
    //     message: 'Welcome to the Product API',
    //     products: products,
    //     success: true
    // });

    // res.send('<h1>Welcome to the Product API</h1>')

   const dir = path.resolve();
   const url = path.join(dir, './index.html');
   console.log("my path =",url);
    res.sendFile(url);
}),

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});