import express from 'express'

const app = express() 
const port = 3200

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/getId/:id', (req, res) =>{ 
    let {id} = req.params 
    res.send(`product with id ${id}`)
}) 


app.get('/user/:id/:phone?', (req, res) => { 
    let phone =req.params.phone ?? 'Sin configurar';
    res.send(`User Id is ${req.params.id}, with phone ${phone}`)
}) 

app.listen(port, ()=> console.log(`Server is running in port ${port}`)) 

