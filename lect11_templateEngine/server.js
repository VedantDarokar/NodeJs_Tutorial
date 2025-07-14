import express from 'express'

const app = express()
const PORT = 3000       

let products = [
    {title: 'Product 1', price: 10000}, 
    {title: 'Product 2', price: 20000},
    {title: 'Product 3', price: 30000}  
]
app.get('/', (req, res) => {
    let name = 'Vedant'
    res.render('index.ejs',{name,products})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

