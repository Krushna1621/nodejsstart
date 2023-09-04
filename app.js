const http=require('http');
const express=require('express')

const app=express()
app.use('/add-product',(req,res,next)=>{
    console.log('another middlware')
    res.send('<h1>Add Product added</h1>')
})

app.use('/',(req,res,next)=>{
    console.log('another middlware')
    res.send('<h1>Krushnkant Shinde</h1>')
})

const server = http.createServer(app);
server.listen(4000)